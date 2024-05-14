import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuesComponent } from './queues/queues.component';
import { SecretaryRoutingModule } from './secretary-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllQueuesComponent } from './all-queues/all-queues.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { HourPipe } from '../directives-pipes/hour.pipe';
import { DirectivesPipesModule } from '../directives-pipes/directives-pipes.module';

@NgModule({
  declarations: [
    QueuesComponent,
    AllQueuesComponent,
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule ,
    DirectivesPipesModule     
  ]
})
export class SecretaryModule { }
