import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConnectionsResponseModel} from "../model/connectionsResponse.model";

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  private baseURL = 'https://fahrplan.search.ch/api/route.json?';

  constructor(private http: HttpClient) {
  }

  public getConnection(from: string, to: string, dateTime: string, departOrArrival: string): Observable<ConnectionsResponseModel> {
    if (dateTime == null) {
      return this.http.get<ConnectionsResponseModel>(`${this.baseURL}num=7&from=${from}&to=${to}`);
    } else {
      let dateTimeObject = this.changeDateTimeFormat(dateTime);
      return this.http.get<ConnectionsResponseModel>(`${this.baseURL}pre=3&num=4&from=${from}&to=${to}&date=
      ${dateTimeObject.date}&time=${dateTimeObject.time}&time_type=${departOrArrival}`);
    }
  }

  private changeDateTimeFormat(dateTime: string): DateTimeObject {
    let dateTimeObject: DateTimeObject = {
      date: '01.01.1970',
      time: '00:00'
    };
    let dateTimeArray = dateTime.split('T');

    let date = dateTimeArray.at(0);
    if (date) {
      let dateArray = date.split('-');
      date = dateArray.at(2) + '.' + dateArray.at(1) + '.' + dateArray.at(0);
      dateTimeObject.date = date
      dateTimeObject.time = dateTimeArray.at(1)!;
    }

    return dateTimeObject;
  }
}

export interface DateTimeObject {
  date: string;
  time: string;
}
