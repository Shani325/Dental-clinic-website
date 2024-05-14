import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import user from 'src/app/user.model';
import UserService from 'src/app/user.service';

@Component({
  selector: 'worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {

  hours: number[] = []
  flag: boolean = true

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    for (let index = 8; index <= 23; index++) {
      this.hours.push(index)
    }
  }

  addForm: FormGroup = new FormGroup({
    "firstNameControl": new FormControl("", [Validators.minLength(2), Validators.required]),
    "lastNameControl": new FormControl("", [Validators.minLength(2), Validators.required]),
    "phoneControl": new FormControl("", [Validators.pattern("[0-9 ]{10}"), Validators.required]),
    "cityControl": new FormControl("", [Validators.minLength(4), Validators.required]),
    "streetControl": new FormControl("", [Validators.minLength(4), Validators.required]),
    "numOfHouseControl": new FormControl(0, [Validators.min(1), Validators.required]),
    "dateOfBirthControl": new FormControl(new Date().toLocaleDateString(), [Validators.minLength(4), Validators.required]),
    "userNameControl": new FormControl("", [Validators.minLength(4), Validators.required]),
    "passwordControl": new FormControl("", [Validators.minLength(4), Validators.required]),
    "permissionControl": new FormControl(0, [Validators.required]),
    "startControl": new FormControl("", [Validators.required]),
    "endControl": new FormControl("", [Validators.required]),
    "sunday": new FormControl(0),
    "monday": new FormControl(0),
    "tuesday": new FormControl(0),
    "wendsday": new FormControl(0),
    "thursday": new FormControl(0),
    "friday": new FormControl(0)
  })


  sendForm() {

    var daysTmp = [
      this.addForm.value.sunday,
      this.addForm.value.monday,
      this.addForm.value.tuesday,
      this.addForm.value.wendsday,
      this.addForm.value.thursday,
      this.addForm.value.friday
    ]
    var days: number[] = []
    for (let index = 0; index < daysTmp.length; index++) {
      if (daysTmp[index])
        days.push(index + 1)
    }
    console.log(this.addForm.value.startControl,
      this.addForm.value.endControl)
    if (parseInt( this.addForm.value.startControl )>=parseInt( this.addForm.value.endControl)) {
      this.flag = false
      alert(" שעת סיום חייבת להיות לאחר שעת התחלה")
    }
    else
      this.userService.addUser(new user(
        this.userService.getUsers().length+1,
        this.addForm.value.userNameControl,
        this.addForm.value.passwordControl,
        this.addForm.value.permissionControl,
        this.addForm.value.firstNameControl,
        this.addForm.value.lastNameControl,
        this.addForm.value.phoneControl,
        this.addForm.value.cityControl,
        this.addForm.value.streetControl,
        this.addForm.value.numOfHouseControl,
        this.addForm.value.dateOfBirthControl,
        days,
        this.addForm.value.startControl,
        this.addForm.value.endControl
      ))
  }
}
