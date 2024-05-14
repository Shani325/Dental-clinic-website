import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import patient from 'src/app/doctor/patient.model';
import { PatientsService } from 'src/app/doctor/patients.service';
import treat from 'src/app/treat.model';
import { TreatmentsService } from 'src/app/treatments.service';
import user from 'src/app/user.model';
import UserService from 'src/app/user.service';

@Component({
  selector: 'queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.css']
})
export class QueuesComponent implements OnInit {

  treats: treat[] = []
  doctors: user[] = []
  patients: patient[] = []
  typesTreats: string[] = []
  hours: number[] = []
  days: string[] = []
  isShowForm: Boolean = false
  currentTreat: treat = <treat>{};
  currentId: number = 0
  currentDoctor: user | undefined
  constructor(private usersService: UserService, private patientsService: PatientsService,
    private treatsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {

    this.currentId = Number(this.route.snapshot.paramMap.get('id'))
    
    treatsService.getTreatsFromServer().subscribe(res=>this.treats=res)

    this.doctors = usersService.getUsers().filter(u => u.permission === 2);
    this.patients = patientsService.getPatients()
    this.typesTreats = treatsService.treatmentsName
  }

  ngOnInit(): void {
  }

  showForm() {
    var currentPatient = this.patients.find(p => p.tz === this.currentTreat.tzPatient)
    this.currentDoctor = this.doctors.find(d => d.id === currentPatient?.idDoctor)
    this.hours = []
    this.days = []
    if (this.currentDoctor) {
      for (let index = this.currentDoctor.startHour; index < this.currentDoctor?.endHour; index++) {
        this.hours.push(index)
      }
      for (let index = 0; index < this.currentDoctor.days.length; index++) {
        this.days.push(this.treatsService.daysNames[this.currentDoctor.days[index] - 1])
      }
    }
    this.isShowForm = true
  }

  addTreat(t: treat) {
    t.id = 0
    t.hour = Number(t.hour)
    for (let index = 0; index < this.treatsService.daysNames.length; index++) {
      if (t.day === this.treatsService.daysNames[index])
        t.dayNum = index + 1
    }
    if (this.currentDoctor)
      t.idDoctor = this.currentDoctor.id
    this.treatsService.addOrUpdateTreat(t);
    this.goHome()
  }

  goHome() {
    this.router.navigate([`secretary/${this.currentId}`])
  }

}
