import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TreatmentFormComponent } from './treatment-form/treatment-form.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PatientsComponent,
    TreatmentFormComponent,
    TreatmentsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class DoctorModule { }
