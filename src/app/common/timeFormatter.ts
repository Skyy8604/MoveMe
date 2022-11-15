export class TimeFormatter {

  static getTimeDiff(timeStart: string, timeEnd: string): string {
    let timeStartHour = new Date(timeStart).getHours();
    let timeStartMinutes = new Date(timeStart).getMinutes();
    let timeEndHour = new Date(timeEnd).getHours();
    let timeEndMinutes = new Date(timeEnd).getMinutes();

    let hourDiff = timeEndHour - timeStartHour;
    let minuteDiff = timeEndMinutes - timeStartMinutes;

    return TimeFormatter.checkHourAndMinDiff(hourDiff, minuteDiff, timeStartMinutes, timeEndMinutes);
  }

  static checkHourAndMinDiff(hourDiff: number, minuteDiff: number, timeStartMinutes: number, timeEndMinutes: number): string {
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
      } else {
        return minuteDiff + ' minutes';
      }
    } else if (hourDiff < 0) {
      hourDiff += 24;
      return TimeFormatter.checkHourAndMinDiff(hourDiff, minuteDiff, timeStartMinutes, timeEndMinutes);
    }
    return 'error';
  }
}
