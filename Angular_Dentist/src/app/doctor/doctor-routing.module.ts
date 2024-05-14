import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TreatmentFormComponent } from './treatment-form/treatment-form.component';
import { TreatmentsComponent } from './treatments/treatments.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent
  },
  {
    path: 'treatment-form',
    component: TreatmentFormComponent
  },
  {
    path: 'treatments',
    component: TreatmentsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
