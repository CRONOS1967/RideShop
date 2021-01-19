import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';
import { CarlistComponent } from './carlist/carlist.component';
import { CardetailComponent } from './carlist/cardetail/cardetail.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [CarlistComponent, CardetailComponent],
  imports: [CommonModule, BuyerRoutingModule,MaterialModule],
  exports: [CarlistComponent, CardetailComponent],
})
export class BuyerModule {}
