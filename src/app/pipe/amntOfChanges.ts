import {Pipe, PipeTransform} from "@angular/core";
import {Connection} from "../model/connectionsResponse.model";

/*
 * Returns the amount of changes of a given connection
 * Takes a connection of type Connection.
 * Usage:
 *    {{ connection | amntOfChanges }}
 */
@Pipe({name: 'amntOfChanges'})
export class AmntOfChanges implements PipeTransform {
  transform(value: Connection): any {
    let amntOfChanges = value.legs.length - 1;
    value.legs.forEach((leg) => {
      if (!leg.type || leg.type === 'walk') {
        amntOfChanges--;
      }
    })
    return amntOfChanges;
  }
}
