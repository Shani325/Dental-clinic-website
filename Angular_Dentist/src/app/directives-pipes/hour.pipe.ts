import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 9)
      return `${value}:00`;
    return `0${value}:00`
  }

}
