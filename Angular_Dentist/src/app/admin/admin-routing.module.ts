import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
    path:'',
    component:WorkersComponent
  },
  {
    path:'form',
    component:WorkerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
