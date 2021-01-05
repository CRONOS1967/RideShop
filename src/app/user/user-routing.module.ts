import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { LogInComponent } from './log-in/log-in.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { AddcarComponent } from './user-dashbord/addcar/addcar.component';
import { UserProfileComponent } from './user-dashbord/user-profile/user-profile.component';
import { UserPostsComponent } from './user-dashbord/user-posts/user-posts.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const userRoutes: Routes = [
  { path: 'login', component: LogInComponent },
  {
    path: 'user/:uid',
    component: UserDashbordComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: 'addCar',
        component: AddcarComponent,
        outlet: 'userTab',
      },
      { path: 'profile', component: UserProfileComponent, outlet: 'userTab' },
      { path: 'posts', component: UserPostsComponent, outlet: 'userTab' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
