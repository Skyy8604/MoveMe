import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConnectionsResponseModel} from "../model/connectionsResponse.model";

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  private baseURL = 'https://fahrplan.search.ch/api/route.json?from=';

  constructor(private http: HttpClient) { }

  public getConnection(from: string, to: string): Observable<ConnectionsResponseModel> {
    return this.http.get<ConnectionsResponseModel>(this.baseURL + from + '&to=' + to);
  }
}
