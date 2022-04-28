import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {PeopleApiResponse} from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getPeople(page: number = 1): Observable<PeopleApiResponse> {
    const url = `${environment.baseUrlStarWars}/people/?page=${page}`;

    return this.http.get<PeopleApiResponse>(url);
  }
}

