import { DatePipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import patient from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  currentDate: string | null;
  dates: string | null[] = []

  constructor(public datepipe: DatePipe) {
    this.currentDate = this.datepipe.transform((new Date), 'dd/MM/yyyy');
    console.log(this.currentDate)
  }

  ngOnInit(): void {

  }

  patients: patient[] = [
    new patient('325442234', "שני", "אנגל", "03-6194899", new Date(2000, 1, 1).toLocaleDateString(), 2),
    new patient("678967899", "רות", "אנגל", "03-6194899", new Date(2004, 1, 1).toLocaleDateString(), 2),
    new patient("234543234", "תמר", "אנגל", "03-6194899", new Date(2009, 1, 1).toLocaleDateString(), 3)
  ]

  getPatients():patient[]{
    return this.patients;
  }

  deletePatient(patient:patient){
    var index = this.patients.indexOf(patient);
    this.patients.splice(index, 1);
  }

  addPatient(patient:patient){
    this.patients.push(patient)
  }
}
