import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import treat from './treat.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(private _http: HttpClient) {
    this.getTreatsFromServer().subscribe(res => this.treats = res)
  }

  treats: treat[] = [

  ]

  treatmentsName: string[] = ['בדיקה כללית', 'עקירה', 'טפול שורש', 'סתימה', 'הרכבת כתר']
  daysNames: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];

  getTreats(): treat[] {
    return this.treats;
  }

  addOrUpdateTreat(t: treat) {

    if (this.treats.find(tr => tr.id === t.id)) {
      // var index = this.treats.findIndex(tr => tr.id === t.id);
      // this.treats.splice(index, 1);
      // this.treats.push(t)
      return this._http.put<any>(`https://localhost:44320/api/Treatment/${t.id}`, t).subscribe(result => console.log(result))
    }
    return this._http.post<any>("https://localhost:44320/api/Treatment", t).subscribe(result => console.log(result))
  }
  getTreatsFromServer() {
    return this._http.get<treat[]>("https://localhost:44320/api/Treatment")
  }
}
