import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import UserService from 'src/app/user.service';
import patient from '../patient.model';
import { PatientsService } from '../patients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: patient[] = [];
  add: boolean = false;
  currentId: number = 0;

  constructor(private patientsService: PatientsService, private route: ActivatedRoute, private router: Router,
    private usersService:UserService) {
    this.patients = patientsService.getPatients()
    this.currentId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }

  addForm: FormGroup = new FormGroup({
    "tzControl": new FormControl("", [Validators.pattern("[0-9 ]{9}"), Validators.required]),
    "firstNameControl": new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10),
    Validators.pattern("[א-ת ]*")]),
    "lastNameControl": new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10),
    Validators.pattern("[א-ת ]*")]),
    "phoneControl": new FormControl("", [Validators.pattern("[0-9 ]{10}"), Validators.required]),
    "dateOfBirthControl": new FormControl("", [Validators.required]),
  })

  checkPatient(tmp: patient): boolean {
    if (tmp.idDoctor === this.currentId)
      return true;
    return false;
  }


  deletePatient(patient: patient) {
    this.patientsService.deletePatient(patient)
  }

  addPatient() {
    this.add = true
  }

  savePatient() {
    var p = new patient(this.addForm.value.tzControl,
      this.addForm.value.firstNameControl,
      this.addForm.value.lastNameControl,
      this.addForm.value.phoneControl,
      this.addForm.value.dateOfBirthControl,
      this.currentId)
    this.patientsService.addPatient(p)
    this.addForm.reset()
    this.add = false;
  }

  ShowTreats(){
    this.router.navigate([`doctor/${this.currentId}/treatments`])
  }

  ShowTreatsToday(){
    this.router.navigate([`doctor/${this.currentId}/schedule`])
  }
}
