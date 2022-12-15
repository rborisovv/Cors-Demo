import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiHost: string = 'http://www.localhost:8000';

  constructor(private http: HttpClient) {

  }

  public home(): Observable<string> {
    return this.http.get(`${this.apiHost}/home`, {withCredentials: true, responseType: 'text'});
  }
}
