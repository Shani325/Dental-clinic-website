import { NgModule, Query } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllQueuesComponent } from './all-queues/all-queues.component';
import { QueuesComponent } from './queues/queues.component';


const routes: Routes = [
  {
    path:'',
    component:AllQueuesComponent
  },
  {
    path:'queue-form',
    component:QueuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
