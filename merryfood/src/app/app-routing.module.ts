import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductSinglePageComponent } from './product-single-page/product-single-page.component';
import { ResigterComponent } from './resigter/resigter.component';
import { AdminComponent } from './admin/admin.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminProductSComponent } from './admin-product-s/admin-product-s.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path:'about',component:LandingPageComponent},
  {path:'loginPage',component:LoginPageComponent},
  {path:'register',component:ResigterComponent},
  {path:'admin',component:AdminComponent},
  {path:'product',component:ProductPageComponent},
  {path:'productSingle/:id',component:ProductSinglePageComponent},
  {path:'orderPage/:id',component:OrderPageComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'editProduct/:id',component:EditProductComponent},
  {path:'adminSProduct/:id',component:AdminProductSComponent},
  {path:'fav/:id',component:FavouriteComponent},
  {path:'favPage',component:FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
