import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CarsService } from 'src/app/shared/service/cars.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userId: string;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private carService: CarsService
  ) {}

  ngOnInit(): void {
    this.authService.signedIn$.subscribe((data) => {
      this.userId = data.uid;
      console.log(this.userId);
      this.userData = this.getUser();
      console.log(this.userData);
    });
  }
  getUser() {
    return this.userService.userCollection.doc(this.userId).valueChanges();
  }
  updatephone(form) {
    console.log(form);
    this.userService.userCollection
      .doc(this.userId)
      .update({
        phone: form.number,
      })
      .catch((err) => {
        console.log(err);
      });
  }
  updateUsername(form) {
    console.log(form);
    this.userService.userCollection
      .doc(this.userId)
      .update({
        name: form.name || this.userData.displayName,
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // deleteUser() {
  //   // this.userService.userCollection.doc(this.userId).delete();
  //   this.carService.getPosts(this.userId).doc().delete();
  //   this.userService.reAuthenticate().then(() => {
  //     this.userService.fb
  //       .delete()
  //       .then(() => this.router.navigate(['home']))
  //       .catch((err) => console.log(err));
  //   });
  // }
}
