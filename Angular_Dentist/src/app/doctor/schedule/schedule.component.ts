import { Component, OnInit } from '@angular/core';
import treat from '../../treat.model';
import { TreatmentsService } from '../../treatments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  treats: treat[] = []
  currentDayNum = 0
  id:number=0
  constructor(private treatmentsService: TreatmentsService, private router: Router, private route: ActivatedRoute) {
    treatmentsService.getTreatsFromServer().subscribe((treats) => {
      this.treats = treats
    })
    
    this.currentDayNum = new Date().getDay()+1
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([`doctor/${this.id}`])
  }

}
