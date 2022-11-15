import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../model/connectionsResponse.model";
import {TimeFormatter} from "../../common/timeFormatter";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  @Input('connections') connections: Connection[] = [];
  @Input('isApiError') isApiError: boolean = false;
  @Input('apiError') apiError: any;

  getTimeDiff = TimeFormatter.getTimeDiff;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkHowManyChanges(connection: Connection): number {
    let amntOfChanges = connection.legs.length - 1;
    connection.legs.forEach((leg) => {
      if (!leg.type || leg.type === 'walk') {
        amntOfChanges--;
      }
    })
    return amntOfChanges;
  }
}
