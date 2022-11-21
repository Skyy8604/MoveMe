import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
import {StationModel} from "../model/station.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseURL = 'https://fahrplan.search.ch/api/completion.json?latlon=';

  constructor(private http: HttpClient) {
  }

  public getClosestStationToCoords(lat: number, lon: number, acc: number): Observable<StationModel[]> {
    return this.http.get<StationModel[]>(`${this.baseURL}${lat},${lon}&accuracy=${acc}`);
  }
}
