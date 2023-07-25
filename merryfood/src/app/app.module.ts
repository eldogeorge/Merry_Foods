import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductSinglePageComponent } from './product-single-page/product-single-page.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResigterComponent } from './resigter/resigter.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminProductSComponent } from './admin-product-s/admin-product-s.component';
import { SearchPipe } from './merryFoodsPipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    LoginPageComponent,
    ProductPageComponent,
    ProductSinglePageComponent,
    FavouriteComponent,
    LandingPageComponent,
    ResigterComponent,
    AdminComponent,
    AddProductComponent,
    EditProductComponent,
    AdminProductSComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
