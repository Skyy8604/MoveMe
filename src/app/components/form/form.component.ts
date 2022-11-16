import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ConnectionsService} from "../../service/connections.service";
import {Connection, ConnectionsResponseModel} from "../../model/connectionsResponse.model";
import {SuggestionService} from "../../service/suggestion.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public journeyForm: any;
  public connections: any;
  public isStartValid = true;
  public isDestValid = true;
  public invalid: any;
  public isApiError: any;
  public apiError: any;
  public isFormFilled: boolean;
  public suggestions: any;

  constructor(private connectionsService: ConnectionsService,
              private fb: FormBuilder, private suggestionsService: SuggestionService) {
    this.connections = null;
    this.invalid = null;
    this.journeyForm = null;
    this.isFormFilled = true;
    this.suggestions = null;
  }

  ngOnInit(): void {
    this.journeyForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      dateTime: [],
      departOrArrival: ['depart', Validators.required]
    })

  }

  searchConnection(): void {
    if (this.journeyForm.valid) {
      this.isFormFilled = true;
      this.connectionsService.getConnection(this.journeyForm.controls['start'].getRawValue(), this.journeyForm.controls['end'].getRawValue(),
        this.journeyForm.controls['dateTime'].getRawValue(), this.journeyForm.controls['departOrArrival'].getRawValue())
        .subscribe((result) => {
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
    } else {
      this.isFormFilled = false;
    }
  }

  public addStationToStartPoint(label: string): void {
    this.journeyForm.controls['start'].setValue(label);
  }

  public onInputChange(event: any) {
    this.getSuggestions(event.target.value);
  }

  private getSuggestions(input: string): void {
    this.suggestionsService.getSuggestions(input).subscribe((result) => {
      this.suggestions = result
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



