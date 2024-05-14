import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import treat from 'src/app/treat.model';
import { TreatmentsService } from 'src/app/treatments.service';

@Component({
  selector: 'all-queues',
  templateUrl: './all-queues.component.html',
  styleUrls: ['./all-queues.component.css']
})
export class AllQueuesComponent implements OnInit {

  treats: treat[] = []
  currentId: number = 0
  constructor(private treatsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
    treatsService.getTreatsFromServer().subscribe(res => this.treats = res)
    this.currentId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }

  addQueue() {
    this.router.navigate([`secretary/${this.currentId}/queue-form`])
  }

}
