import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:Car[];
  constructor() { }

  ngOnInit(): void {
  }

}
