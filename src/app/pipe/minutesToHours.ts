import {Pipe, PipeTransform} from "@angular/core";

/*
 * Turns minutes in to hh:mm format if value is higher than 60
 * Takes a number as value
 * Usage:
 *    {{ 65 | minutesToHours }}
 */
@Pipe({name: 'minutesToHours'})
export class MinutesToHours implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = value - (hours * 60);

    if (hours === 0) {
      return minutes + ' minutes'
    } else if (minutes < 10) {
      return hours + ':0' + minutes + 'h'
    }
    return hours + ':' + minutes + 'h'
  }
}
