import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../model/connectionsResponse.model";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  @Input('connections') connections: Connection[] | undefined;
  @Input('isApiError') isApiError: boolean | undefined;
  @Input('apiError') apiError: any;


  constructor() {
  }

  ngOnInit(): void {
  }

  checkHowManyChanges(connection: Connection): number {
    let amntOfChanges = connection.legs.length - 1;
    connection.legs.forEach( (leg) => {
      if (!leg.type || leg.type === 'walk') {
        amntOfChanges--;
      }
    })
    return amntOfChanges;
  }

  getJustTimeWithoutDate(dateTime: string): any {
    let dateTimeArray = dateTime.split(' ');
    return dateTimeArray.at(1)?.slice(0, 5);
  }

}
