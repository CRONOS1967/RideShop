import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AddcarComponent } from './user-dashbord/addcar/addcar.component';
import { UserProfileComponent } from './user-dashbord/user-profile/user-profile.component';
import { UserPostsComponent } from './user-dashbord/user-posts/user-posts.component';

@NgModule({
  declarations: [LogInComponent, UserDashbordComponent, AddcarComponent, UserProfileComponent, UserPostsComponent],
  imports: [CommonModule, FormsModule,RouterModule,AngularFireModule.initializeApp(environment.firebase)],
  exports: [],
})
export class UserModule {}
