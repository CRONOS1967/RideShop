import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  error: any;
  error2: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  createUser(form: NgForm) {
    this.authService
      .createUser(form)
      .catch((err) => {
        this.error2 = err;
      })
      .then((result: any) => {
        this.userService.save(result.user);
        this.router.navigate(['user', result.user.uid]);
      });
  }

  loginUser(form: NgForm) {
    this.authService
      .logInUser(form)
      .catch((err) => {
        this.error = err;
        console.log(this.error);
      })
      .then((result: any) => {
        this.router.navigate(['user', result.user.uid]);
      });
  }
  loginGoogle() {
    this.authService
      .logViaGoogle()
      .catch((err) => {
        this.error = err;
        console.log(this.error);
      })
      .then((result: any) => {
        this.userService.save(result.user);
        this.router.navigate(['user', result.user.uid]);
      });
  }
  loginFacebook() {
    this.authService
      .logViaFb()
      .catch((err) => {
        this.error = err;
        console.log(this.error);
      })
      .then((result: any) => {
        this.userService.save(result.user);
        this.router.navigate(['user', result.user]);
      });
  }
}
