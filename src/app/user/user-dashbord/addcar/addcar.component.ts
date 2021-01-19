import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CarsService } from 'src/app/shared/service/cars.service';
import { UserService } from 'src/app/shared/service/user.service';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css'],
})
export class AddcarComponent implements OnInit {
  constructor(
    private carService: CarsService,
    private as: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService,
 
  ) {}
  show: boolean = false;

  date: number = new Date().getFullYear();
  p = 0;
  ymin = 1900;
  ymax = this.date + 1;
  y: number;
  images: any;
  imgUrl =
    'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii01MyAxIDUxMSA1MTEuOTk5MDYiIHdpZHRoPSI1MTJweCI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMjc2LjQxMDE1NiAzLjk1NzAzMSBDIDI3NC4wNjI1IDEuNDg0Mzc1IDI3MC44NDM3NSAwIDI2Ny41MDc4MTIgMCBMIDY3Ljc3NzM0NCAwIEMgMzAuOTIxODc1IDAgMC41IDMwLjMwMDc4MSAwLjUgNjcuMTUyMzQ0IEwgMC41IDQ0NC44NDM3NSBDIDAuNSA0ODEuNjk5MjE5IDMwLjkyMTg3NSA1MTIgNjcuNzc3MzQ0IDUxMiBMIDMzOC44NjMyODEgNTEyIEMgMzc1LjcxODc1IDUxMiA0MDYuMTQwNjI1IDQ4MS42OTkyMTkgNDA2LjE0MDYyNSA0NDQuODQzNzUgTCA0MDYuMTQwNjI1IDE0NC45NDE0MDYgQyA0MDYuMTQwNjI1IDE0MS43MjY1NjIgNDA0LjY1NjI1IDEzOC42MzY3MTkgNDAyLjU1NDY4OCAxMzYuMjg1MTU2IFogTSAyNzkuOTk2MDk0IDQzLjY1NjI1IEwgMzY0LjQ2NDg0NCAxMzIuMzI4MTI1IEwgMzA5LjU1NDY4OCAxMzIuMzI4MTI1IEMgMjkzLjIzMDQ2OSAxMzIuMzI4MTI1IDI3OS45OTYwOTQgMTE5LjIxODc1IDI3OS45OTYwOTQgMTAyLjg5NDUzMSBaIE0gMzM4Ljg2MzI4MSA0ODcuMjY1NjI1IEwgNjcuNzc3MzQ0IDQ4Ny4yNjU2MjUgQyA0NC42NTIzNDQgNDg3LjI2NTYyNSAyNS4yMzQzNzUgNDY4LjA5NzY1NiAyNS4yMzQzNzUgNDQ0Ljg0Mzc1IEwgMjUuMjM0Mzc1IDY3LjE1MjM0NCBDIDI1LjIzNDM3NSA0NC4wMjczNDQgNDQuNTI3MzQ0IDI0LjczNDM3NSA2Ny43NzczNDQgMjQuNzM0Mzc1IEwgMjU1LjI2MTcxOSAyNC43MzQzNzUgTCAyNTUuMjYxNzE5IDEwMi44OTQ1MzEgQyAyNTUuMjYxNzE5IDEzMi45NDUzMTIgMjc5LjUwMzkwNiAxNTcuMDYyNSAzMDkuNTU0Njg4IDE1Ny4wNjI1IEwgMzgxLjQwNjI1IDE1Ny4wNjI1IEwgMzgxLjQwNjI1IDQ0NC44NDM3NSBDIDM4MS40MDYyNSA0NjguMDk3NjU2IDM2Mi4xMTMyODEgNDg3LjI2NTYyNSAzMzguODYzMjgxIDQ4Ny4yNjU2MjUgWiBNIDMzOC44NjMyODEgNDg3LjI2NTYyNSAiIHN0eWxlPSIgZmlsbC1ydWxlOm5vbnplcm87ZmlsbC1vcGFjaXR5OjE7IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTSAzMDUuMTAxNTYyIDQwMS45MzM1OTQgTCAxMDEuNTM5MDYyIDQwMS45MzM1OTQgQyA5NC43MzgyODEgNDAxLjkzMzU5NCA4OS4xNzE4NzUgNDA3LjQ5NjA5NCA4OS4xNzE4NzUgNDE0LjMwMDc4MSBDIDg5LjE3MTg3NSA0MjEuMTAxNTYyIDk0LjczODI4MSA0MjYuNjY3OTY5IDEwMS41MzkwNjIgNDI2LjY2Nzk2OSBMIDMwNS4yMjY1NjIgNDI2LjY2Nzk2OSBDIDMxMi4wMjczNDQgNDI2LjY2Nzk2OSAzMTcuNTkzNzUgNDIxLjEwMTU2MiAzMTcuNTkzNzUgNDE0LjMwMDc4MSBDIDMxNy41OTM3NSA0MDcuNDk2MDk0IDMxMi4wMjczNDQgNDAxLjkzMzU5NCAzMDUuMTAxNTYyIDQwMS45MzM1OTQgWiBNIDMwNS4xMDE1NjIgNDAxLjkzMzU5NCAiIHN0eWxlPSIgZmlsbC1ydWxlOm5vbnplcm87ZmlsbC1vcGFjaXR5OjE7IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTSAxNDAgMjY4Ljg2MzI4MSBMIDE5MC45NTMxMjUgMjE0LjA3NDIxOSBMIDE5MC45NTMxMjUgMzQ5LjEyNSBDIDE5MC45NTMxMjUgMzU1LjkyNTc4MSAxOTYuNTE5NTMxIDM2MS40OTIxODggMjAzLjMyMDMxMiAzNjEuNDkyMTg4IEMgMjEwLjEyNSAzNjEuNDkyMTg4IDIxNS42ODc1IDM1NS45MjU3ODEgMjE1LjY4NzUgMzQ5LjEyNSBMIDIxNS42ODc1IDIxNC4wNzQyMTkgTCAyNjYuNjQwNjI1IDI2OC44NjMyODEgQyAyNjkuMTEzMjgxIDI3MS40NTcwMzEgMjcyLjMzMjAzMSAyNzIuODIwMzEyIDI3NS42Njc5NjkgMjcyLjgyMDMxMiBDIDI3OC42MzY3MTkgMjcyLjgyMDMxMiAyODEuNzMwNDY5IDI3MS43MDcwMzEgMjg0LjA3ODEyNSAyNjkuNDgwNDY5IEMgMjg5LjAyNzM0NCAyNjQuNzgxMjUgMjg5LjM5ODQzOCAyNTYuOTg4MjgxIDI4NC42OTkyMTkgMjUyLjA0Mjk2OSBMIDIxMi4yMjY1NjIgMTc0LjI1MzkwNiBDIDIwOS44NzUgMTcxLjc4MTI1IDIwNi42NjAxNTYgMTcwLjI5Njg3NSAyMDMuMTk5MjE5IDE3MC4yOTY4NzUgQyAxOTkuNzM0Mzc1IDE3MC4yOTY4NzUgMTk2LjUxOTUzMSAxNzEuNzgxMjUgMTk0LjE3MTg3NSAxNzQuMjUzOTA2IEwgMTIxLjY5OTIxOSAyNTIuMDQyOTY5IEMgMTE3IDI1Ni45ODgyODEgMTE3LjM3MTA5NCAyNjQuOTAyMzQ0IDEyMi4zMTY0MDYgMjY5LjQ4MDQ2OSBDIDEyNy41MTE3MTkgMjc0LjE3OTY4OCAxMzUuMzAwNzgxIDI3My44MDg1OTQgMTQwIDI2OC44NjMyODEgWiBNIDE0MCAyNjguODYzMjgxICIgc3R5bGU9IiBmaWxsLXJ1bGU6bm9uemVybztmaWxsLW9wYWNpdHk6MTsiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+Cjwvc3ZnPgo=';
  car;
  userData;
  phone;
  ngOnInit(): void {
    
    console.log(this.date);
    this.as.signedIn$.subscribe((data) => {
      console.log(data.uid);
      this.userData = data.uid;
      this.getPhone();
    });
   
  }
 
  selectedImg(event) {
    this.images = event.target.files;
  }
  getPhone(){
    this.userService.userCollection
      .doc(this.userData).valueChanges().subscribe(
        (data)=>{
          this.phone = data.phone;
        }
      )
  }
  addCar(form) { this.getPhone();
    form.value.color = form.value.color.toString();
    
    this.carService.carCollection
      .add({
        id: this.userData,
        model: form.value.carModel,
        make: form.value.carMake,
        year: form.value.year,
        picture: form.value.photo,
        description: {
          price: form.value.carPrice,
          priceType: form.value.priceType,
          location: form.value.city,
          condition: form.value.condition,
          engine: form.value.engine,
          color: form.value.color,
          body: form.value.bodyType,
          transsmission: form.value.transsmission,
        },
        phone:this.phone
      })
      .then(async (resp) => {
        const imageUrl = await this.carService.upLoadImg(resp.id, this.images);
        this.carService.carCollection.doc(resp.id).update({
          picture: imageUrl || null,
        });
        this.imgUrl = imageUrl;
        this.router.navigate(['posts'], { relativeTo: this.route });
      })
      .catch((err) => console.log(err));
  }
  getCarMake() {
    return ['audi', 'Chevrolet', 'Cadillac', 'Acura', 'BMW'];
  }
  nLength(n) {
    this.y = ((Math.log(Math.abs(n) + 1) * 0.43429448190325176) | 0) + 1;
    if (4 == this.y) return true;
    else false;
  }

  lessthanval(n: number) {
    if (n >= this.date + 1) return true;
    else return false;
  }
  greaterthan(n: number) {
    if (n < 1900) return true;
    else return false;
  }
}
