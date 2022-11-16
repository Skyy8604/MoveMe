import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../model/connectionsResponse.model";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  @Input('connections') connections: Connection[] = [];
  @Input('isApiError') isApiError: boolean = false;
  @Input('apiError') apiError: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
