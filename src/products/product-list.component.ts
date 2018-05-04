import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormComponent } from '../app/form/form.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService,
        public _ngModal: NgbModal) {  // It loads first
    }
    price: string[] = ['<1000', '1000-2000', '>2000'];
    products: IProduct[] = [];
    listFilter: string;
    pageTitle: String = 'Bhupendra';
    showImage = true;
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this._productService.getProducts().subscribe(data => this.products = data);
    }
    addProduct(product) {
        this._productService.addProduct(product);
    }
    deleteProduct(_id) {
        this._productService.deleteProduct(_id);
    }
    submitForm() {
        const modalRef = this._ngModal.open(FormComponent);
    }
}
