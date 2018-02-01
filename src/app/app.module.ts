import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';
import { ProductFilterList } from '../products/product.filter.list';
import { FormComponent } from './form/form.component';
import { ProductService } from '../products/product.service';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, FormComponent, ProductFilterList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }