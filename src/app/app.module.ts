import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../products/product-list.component';
import { ProductFilterList } from '../products/product.filter.list';
import { FormComponent } from './form/form.component';
import { ProductService } from '../products/product.service';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ProductListComponent }
]
@NgModule({
  declarations: [
    AppComponent, ProductListComponent, FormComponent, ProductFilterList, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, AppService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }