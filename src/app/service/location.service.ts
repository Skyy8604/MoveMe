import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";
import {StationModel} from "../model/station.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  public getClosestStationToCoords(lat: number, lon: number, acc: number): Observable<StationModel[]> {
    return this.http.get<StationModel[]>('https://fahrplan.search.ch/api/completion.json?latlon=' + lat +',' + lon + '&accuracy=' + acc);
  }
}
