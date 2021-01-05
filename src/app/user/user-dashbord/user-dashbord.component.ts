import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css'],
})
export class UserDashbordComponent implements OnInit {
  userData: Observable<any>;
  constructor(
    public authService: AuthService,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    this.authService.signedIn$.subscribe((data) => {
      this.userData = data;
      console.log(data);
    });
  }
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
