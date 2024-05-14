import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoursGuard } from './directives-pipes/hours.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'doctor/:id',
    loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule),
    canActivate:[HoursGuard]
  },
  {
    path: 'secretary/:id',
    loadChildren: () => import('./secretary/secretary.module').then(m => m.SecretaryModule),
    canActivate:[HoursGuard]
  },
  {
    path: 'admin/:id',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
