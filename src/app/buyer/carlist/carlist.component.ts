import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

import { CarsService } from "src/app/shared/service/cars.service";
import {filter} from 'rxjs/operators';

@Component({
  selector: "app-carlist",
  templateUrl: "./carlist.component.html",
  styleUrls: ["./carlist.component.css"],
})
export class CarlistComponent implements OnInit {
  cars: any;
  filterdCars;
  constructor(
    private carService: CarsService,
    private route: Router,
    
  ) {}
  showSearch: boolean;
  ngOnInit(): void {
    this.getCars();
    this.check(); //cheakes wheater to show the Search bar
  }
  check() {
    let rou;
    this.route.events.subscribe((path:any)=>{} );
      rou = this.route.url
  
    if (rou == "/list") {
      return (this.showSearch = true);
    } else {
      return (this.showSearch = false);
    }
  }
  filter(query: string) {
    console.log(query);
    //this.filterdCars = this.cars;
    this.cars = (query) ?
      this.cars.filter(p=>p.model.toLowerCase().includes(query.toLowerCase())): this.cars = this.filterdCars;

  }
  getCars() {
    return this.carService
      .getAll()
      .snapshotChanges()
      .subscribe(
        (data) =>
          (this.filterdCars= this.cars =  data.map((e) => {
            return {
              cid: e.payload.doc.id,
              ...e.payload.doc.data(),
            };
          }))
      );
  }
  carDetail(url, id) {
    this.route.navigate([url, id]);
  }
}
