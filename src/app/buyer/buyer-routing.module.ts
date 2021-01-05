import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './carlist/cardetail/cardetail.component';
import { CarlistComponent } from './carlist/carlist.component';

const buyerRoutes: Routes=[
  {path:'list', component: CarlistComponent},
  {path:'car/:cid', component:CardetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(buyerRoutes),
  ],
  exports:[
    RouterModule
  ]
})
export class BuyerRoutingModule { }
