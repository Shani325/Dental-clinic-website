import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import user from 'src/app/user.model';
import UserService from 'src/app/user.service';
import patient from '../patient.model';
import { PatientsService } from '../patients.service';
import treat from '../../treat.model';
import { TreatmentsService } from '../../treatments.service';

@Component({
  selector: 'treatment-form',
  templateUrl: './treatment-form.component.html',
  styleUrls: ['./treatment-form.component.css']
})
export class TreatmentFormComponent implements OnInit, OnDestroy {

  user: user | undefined;
  id: number | undefined;
  daysNumbers: number[] | undefined;
  daysNames: string[] = [];
  treatments: string[] = []
  days: string[] = []
  patients: patient[] = []
  min: number | undefined;
  max: number | undefined;
  times: number[] = []

  constructor(private route: ActivatedRoute, private userService: UserService, private patientsService: PatientsService,
    private treatsService: TreatmentsService, private router: Router) {
    this.treatments = treatsService.treatmentsName
    this.daysNames = treatsService.daysNames
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.user = this.userService.getUsers().find(i => i.id === this.id)
    this.daysNumbers = this.user?.days;
    if (this.daysNumbers)
      for (let index = this.daysNumbers.length - 1; index >= 0; index--) {
        this.days.push(this.daysNames[this.daysNumbers[index] - 1])
      }
    for (let index = 0; index < this.patientsService.getPatients().length; index++) {
      if (this.patientsService.getPatients()[index].idDoctor === this.id)
        this.patients.push(this.patientsService.getPatients()[index])
    }
    this.min = this.user?.startHour
    this.max = this.user?.endHour
    if (this.max && this.min)
      for (let index = 0; index < this.max - this.min; index++) {
        this.times.push(this.min + index)
      }
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    alert(`האם ברצונך לשנות את פרטי הטיפול?`)
  }

  @Input()
  treat: treat = <treat>{};

  @Output()
  onAdd: EventEmitter<treat> = new EventEmitter<treat>();

  addTreatment: FormGroup = new FormGroup({
    "tzPatientControl": new FormControl("", [Validators.required]),
    "typeControl": new FormControl("", [Validators.required]),
    "dayControl": new FormControl("", [Validators.required]),
    "timeControl": new FormControl(undefined, [Validators.required])
  })

  checkPatient(p: patient): boolean {
    if (p.idDoctor === this.id)
      return true;
    return false;
  }

  saveTreat() {
    var num;
    for (let index = 0; index < this.daysNames.length; index++) {
      if (this.daysNames[index] === this.addTreatment.value.dayControl)
        num = index + 1;
    }
    this.treatsService.addOrUpdateTreat(<treat>{
      id: this.treat.id ? this.treat.id :0,
      name: this.addTreatment.value.typeControl,
      idDoctor: this.id,
      hour:parseInt( this.addTreatment.value.timeControl),
      day: this.addTreatment.value.dayControl,
      dayNum: num,
      tzPatient: this.addTreatment.value.tzPatientControl
    })
    this.onAdd.emit();
    this.router.navigate([`doctor/${this.id}/treatments`])
  }
}
