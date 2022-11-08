import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ConnectionsService} from "../../service/connections.service";
import {Connection, ConnectionsResponseModel} from "../../model/connectionsResponse.model";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  @Input('connections') connections: Connection[] | undefined;

  constructor(private connectionsService: ConnectionsService) {
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

}
