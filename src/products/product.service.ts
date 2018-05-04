import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';
@Injectable()
export class  ProductService {
    // private _baseUrl = './assets/products.json';
    private _getUrl = 'http://localhost:3000/get-products';
    private _postUrl = 'http://localhost:3000/add-product';
    private _deleteUrl = 'http://localhost:3000/delete-product';
    constructor(private _http: HttpClient) {

    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._getUrl)
    }

    addProduct(product) {
        return this._http.post(this._postUrl, product)
    }

    deleteProduct(_id) {
        return this._http.post(this._deleteUrl, {_id: _id})
    }
}
