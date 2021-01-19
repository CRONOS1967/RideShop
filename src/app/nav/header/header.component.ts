import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isActive=true;
  constructor(public authService: AuthService,private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
  search(){
    this.router.navigateByUrl('/list')
  }
 
}
