import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    myForm: any;
    constructor(private router: Router,
                private fb: FormBuilder,
                private appService: AppService) {
                    this.myForm = this.fb.group({
                        admin_email: ['', Validators.required],
                        admin_password: ['', Validators.required]
                    }) 
                }           
    
    ngOnInit() {}
    

    onLogin(data) {
        this.appService.login(data)
        this.router.navigate(['/dashboard']);
    }
}