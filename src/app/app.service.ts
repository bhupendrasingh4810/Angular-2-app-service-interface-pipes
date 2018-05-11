import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
@Injectable()
export class  AppService {
    // private _baseUrl = './assets/products.json';
    private _getUrl = 'http://localhost:3000/get-products';
    private _login = 'http://localhost:3000/login'
    constructor(private _http: HttpClient,
    private _router: Router) {

    }

    login(data) {
        console.log(data)
        return this._http.post<Response>(this._login, data).map((response: any) => {
            console.log(response)
            if(response.status) {
                localStorage.setItem('user', JSON.stringify(response.data[0]))
            }
        })
    }

    logout() {
         localStorage.removeItem('user')
        this._router.navigate(['login'])
    }
}