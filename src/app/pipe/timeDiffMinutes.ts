import {Pipe, PipeTransform} from "@angular/core";

/*
 * Returns the time difference of two points in time in format: 'XX minutes' or 'XX:XXh'
 * Takes a string representing the end date as an argument.
 * Usage:
 *    start date | timeDiffMinutes: end
 * Example:
 *    {{ '2022-11-16 23:48:00' | timeDiffMinutes: '2022-11-17 00:54:00'}}
 */
@Pipe({name: 'timeDiffMinutes'})
export class TimeDiffMinutes implements PipeTransform {
  transform(value: string, end: string): string {
    let timeStartHour = new Date(value).getHours();
    let timeStartMinutes = new Date(value).getMinutes();
    let timeEndHour = new Date(end).getHours();
    let timeEndMinutes = new Date(end).getMinutes();

    let hourDiff = timeEndHour - timeStartHour;
    let minuteDiff = timeEndMinutes - timeStartMinutes;

    return this.checkHourAndMinDiff(hourDiff, minuteDiff, timeStartMinutes, timeEndMinutes);
  }

  private checkHourAndMinDiff(hourDiff: number, minuteDiff: number, timeStartMinutes: number, timeEndMinutes: number): string {
    if (hourDiff == 0) {
      return minuteDiff + ' minutes';
    } else if (hourDiff >= 1) {
      minuteDiff = (60 - timeStartMinutes) + timeEndMinutes;
      if (minuteDiff > 59) {
        minuteDiff -= 60;
        if (minuteDiff >= 0 && minuteDiff <= 9) {
          return hourDiff + ':0' + minuteDiff + 'h';
        }
        return hourDiff + ':' + minuteDiff + 'h';
      }

      return minuteDiff + ' minutes';

    } else if (hourDiff < 0) {
      hourDiff += 24;
      return this.checkHourAndMinDiff(hourDiff, minuteDiff, timeStartMinutes, timeEndMinutes);
    }
    return 'error';
  }
}
