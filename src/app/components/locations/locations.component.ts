import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../shared/services/location.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations$: Observable<any> = this.locationService.getLocations()
    .pipe(map(locationResponse => locationResponse.results))

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
  }

}
