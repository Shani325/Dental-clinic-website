import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Directive({
  selector: '[about]'
})
export class AboutDirective {

  constructor(el: ElementRef, public dialog: MatDialog) {

  }

  @HostListener('click')
  onMouseEnter() {
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(AboutComponent, {
      data: ''
    });
  }

}
