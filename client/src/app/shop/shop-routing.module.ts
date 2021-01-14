import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetialsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ShopComponent},
  {path:':id', component: ProductDetialsComponent, data: {breadcrumb: {alias: 'productDetails'}}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
