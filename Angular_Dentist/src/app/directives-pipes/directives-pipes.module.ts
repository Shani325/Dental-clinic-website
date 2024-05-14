import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourPipe } from './hour.pipe';
import { AboutDirective } from './about.directive';



@NgModule({
  declarations: [
    HourPipe,
    AboutDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HourPipe,
    AboutDirective
  ]
})
export class DirectivesPipesModule { }
