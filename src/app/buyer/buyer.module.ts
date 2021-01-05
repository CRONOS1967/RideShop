import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';
import { CarlistComponent } from './carlist/carlist.component';
import { CardetailComponent } from './carlist/cardetail/cardetail.component';




@NgModule({
  declarations: [CarlistComponent, CardetailComponent],
  imports: [CommonModule, BuyerRoutingModule],
  exports: [CarlistComponent, CardetailComponent],
})
export class BuyerModule {}
