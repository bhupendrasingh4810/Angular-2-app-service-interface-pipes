import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {  // It loads first
    }
    price: string[] = ['<1000', '1000-2000', '>2000'];
    products: IProduct[] = [];
    listFilter: string;
    pageTitle: String = 'Bhupendra';
    showImage = true;
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //     {
    //         productId: 1,
    //         productName: "Shirt",
    //         productAvailable: "In Stock",
    //         productCode: "34r33",
    //         releaseDate: "2/2/1212",
    //         description: "cdk d df  kdfk ",
    //         price: 3434,
    //         starRating:4,
    //         imageUrl:"../../assets/images/shirt.jpg"
    //     },
    //     {
    //         productId: 2,
    //         productName: "tshirt",
    //         productAvailable: "In Stock",
    //         productCode: "34r4r4r",
    //         releaseDate: "2/2/1452",
    //         description: "cdk fdvff  kdfk ",
    //         price: 3434,
    //         starRating:4,
    //         imageUrl:"../../assets/images/tshirt.jpg"
    //     },
    // ];
    ngOnInit() {  // loads when component is loaded
            this._productService.getProducts().subscribe(data => this.products = data);
    // Async/Await
    // async ngOnInit() {  // loads when component is loaded
    //     this.products = await this._productService.getProducts();
            // let result;
            // result = this._productService.getProducts();
            // this.products.push({'productId':result[0].productId,
            //                     'productName':result[0].productName,
            //                     'productAvailable':result[0].productAvailable,
            //                     'productCode':result[0].productCode,
            //                     'releaseDate':result[0].releaseDate,
            //                     'description':result[0].description,
            //                     'price':result[0].price,
            //                     'starRating':result[0].starRating,
            //                     'imageUrl':result[0].imageUrl});
    }
    addProduct(product) {
        this._productService.addProduct(product);
    }
    deleteProduct(_id) {
        this._productService.deleteProduct(_id);
    }
}
