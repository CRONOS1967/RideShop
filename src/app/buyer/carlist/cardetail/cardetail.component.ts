import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/car.model';
import { CarsService } from 'src/app/shared/service/cars.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carId: string;
  carData: any;
  constructor(private route: ActivatedRoute, private carService: CarsService) {}

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['cid'];
    this.route.params.subscribe((params: Params) => {
      this.carId = params['cid'];
    });
    this.carData = this.getCarInfo();
    console.log(this.carData);
  }

  getCarInfo() {
    return this.carService.carCollection.doc(this.carId).valueChanges();
  }
}
