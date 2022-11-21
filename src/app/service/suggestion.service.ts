import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SuggestionModel} from "../model/suggestion.model";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private baseURL = 'https://fahrplan.search.ch/api/completion.json?term=';

  constructor(private http: HttpClient) {
  }

  public getSuggestions(term: string): Observable<SuggestionModel[]> {
    return this.http.get<SuggestionModel[]>(`${this.baseURL}${term}`);
  }
}
