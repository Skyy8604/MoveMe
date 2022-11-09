import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ConnectionsComponent} from "../connections/connections.component";
import {ConnectionsService} from "../../service/connections.service";
import {Connection, ConnectionsResponseModel} from "../../model/connectionsResponse.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public connections: any;
  public isStartValid = true;
  public isDestValid = true;
  public invalid: any;
  public isApiError: any;
  public apiError: any;

  constructor(private connectionsComponent: ConnectionsComponent, private connectionsService: ConnectionsService) {
    this.connections = null;
    this.invalid = null;
  }

  ngOnInit(): void {
  }

  public addStationToStartPoint(label: string): void {
    this.journeyForm.controls['start'].setValue(label);
  }

  journeyForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  searchConnection(): void {
    this.connectionsService.getConnection(this.journeyForm.controls['start'].getRawValue(), this.journeyForm.controls['end'].getRawValue()).subscribe((result) => {
      if (result.url) {
        this.isDestValid = true;
        this.isStartValid = true;
        this.connections = this.giveUniqueIdToConnections(result);
      } else if (result.messages) {
        this.checkWhichFieldIsInvalid(result)
      } else {
        this.isApiError = true;
      }
    }, (error) => {
      this.apiError = error;
      this.isApiError = true;
    });
  }

  private checkWhichFieldIsInvalid(result: ConnectionsResponseModel) {
    let arrayOfMessage = result.messages.at(0)?.split(' ');
    if (arrayOfMessage) {
      this.invalid = arrayOfMessage.at(1)
    }
    if (this.invalid == this.journeyForm.controls['start'].getRawValue()) {
      this.isStartValid = false;
    } else if (this.invalid == this.journeyForm.controls['end'].getRawValue()) {
      this.isDestValid = false;
    }
  }

  private giveUniqueIdToConnections(result: ConnectionsResponseModel): Connection[] {  // every connection of a request needs a unique id so the cards can be (un-)collapsed correctly
    let index = 0;
    result.connections.forEach((connection) => {
      connection.id = index;
      index++;
    });
    return result.connections;
  }

}



