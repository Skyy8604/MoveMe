import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SuggestionsModel} from "../model/suggestions.model";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private baseURL = 'https://fahrplan.search.ch/api/completion.json?term=';

  constructor(private http: HttpClient) { }

  public getSuggestions(term: string): Observable<SuggestionsModel[]> {
    return this.http.get<SuggestionsModel[]>(`${this.baseURL}${term}`);
  }
}
