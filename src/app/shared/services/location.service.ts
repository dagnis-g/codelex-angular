import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<any> {
    const url = "https://rickandmortyapi.com/api/location";
    return this.http.get<any>(url);
  }

  getLocation(id: string): Observable<any> {
    const url = `https://rickandmortyapi.com/api/location/${id}`;
    return this.http.get<any>(url);
  }

}
