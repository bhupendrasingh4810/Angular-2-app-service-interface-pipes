import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../products/product.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var swal: any;
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  language: any;
  formSubmitted = false
  errorResponse: any = null;

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private _productService: ProductService,
      public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
      this.myForm = this.fb.group({
          productName: ['', Validators.required],
          productAvailable: ['', Validators.required],
          productCode: ['', Validators.required],
          releaseDate: ['', Validators.required],
          description: ['', Validators.required],
          price: ['', Validators.required],
          starRating: ['', Validators.required],
          imageUrl: ['', Validators.required]
      });
  }

  onFormSubmit(product, isValid: Boolean) {
      if (!isValid) return
      this.formSubmitted = true;
      var $submitButton = $('.spin');
      $submitButton.addClass("spinner");

      this._productService.addProduct(product).subscribe(_ => {
            //   this.showChangePasswordSuccess();
              this.activeModal.close();
          // } else {
          //     $submitButton.removeClass("spinner");
          //     this.alertService.error(_.error.error_message);
          // }
      });
  }

  showChangePasswordSuccess(type: string) {
      swal({
          type: 'success',
          text: type,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success'
      });

  }
}      
