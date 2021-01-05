import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard,redirectUnauthorizedTo,hasCustomClaim } from '@angular/fire/auth-guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const adminOnly = () => hasCustomClaim('admin');

const userRoutes: Routes = [

  { path: 'admin', component: AdminDashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin,adminOnly },},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
