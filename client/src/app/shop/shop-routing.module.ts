import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ShopComponent},
  {path:':id', component: ProductDetialsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
