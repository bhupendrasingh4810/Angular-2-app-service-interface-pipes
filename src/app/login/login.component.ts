import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    myForm: any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(private router: Router,
        private fb: FormBuilder,
        private appService: AppService) {
        this.myForm = this.fb.group({
            admin_email: ['', [Validators.email,Validators.required]],
            admin_password: ['', Validators.required]
        })
    }

    ngOnInit() {
        if(localStorage.getItem('user')) {
            this.router.navigate(['dashboard'])
        }
     }


    onLogin(data) {
        this.appService.login(data).subscribe(item => {
            this.router.navigate(['dashboard'])
        })

    }
}