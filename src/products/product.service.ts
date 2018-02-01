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
        return this._http.get<IProduct[]>(this._getUrl).do(data => console.log(JSON.stringify(data)));
    //                                         .catch(this.handleError);
    // Observable using Http
    // getProducts(): Observable<IProduct[]> {
    //     return this._http.get(this._baseUrl).map((res: Response) => <IProduct[]>res.json())
    //                                         .do(data => console.log(JSON.stringify(data)))
    //                                         .catch(this.handleError);
    // Async/Await
    // async getProducts(): Promise<IProduct[]> {
    //     const response = await this._http.get(this._baseUrl).toPromise();
    //     return response.json();
        // return [
        //     {
        //         productId: 3,
        //         productName: "jeans",
        //         productAvailable: "Out of Stock",
        //         productCode: "3445g4g",
        //         releaseDate: "2/2/1782",
        //         description: "cf gf ff  kdfk ",
        //         price: 3434,
        //         starRating:4,
        //         imageUrl:"../../assets/images/jeans.jpg"
        //     }
        // ];
    }
    // private handleError(err: HttpErrorResponse) {
    //     console.log(err.message);
    //     return Observable.throw(err.message);
    // }
    addProduct(product) {
        return this._http.post(this._postUrl, product)
                         .map((response: Response) => response.json());
    }
    deleteProduct(_id) {
        return this._http.post(this._deleteUrl, {_id: _id})
                         .map((response: Response) => response.json());
    }
}
