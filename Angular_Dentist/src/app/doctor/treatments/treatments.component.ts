import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import treat from '../../treat.model';
import { TreatmentsService } from '../../treatments.service';

@Component({
  selector: 'treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treats: treat[] = []
  id: number = 0;
  selectedTreat: treat | undefined;
  constructor(private treatsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
    treatsService.getTreatsFromServer().subscribe(results =>
      this.treats = results)
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }

  checkTreat(t: treat): boolean {
    if (t.idDoctor === this.id)
      return true;
    return false;
  }

  addTreat() {
    this.router.navigate([`doctor/${this.id}/treatment-form`])
  }

  updateTreat(t: treat) {
    this.selectedTreat = t;
  }

  hideForm() {
    this.selectedTreat = undefined;
  }

  goHome() {
    this.router.navigate([`doctor/${this.id}`])
  }

}
