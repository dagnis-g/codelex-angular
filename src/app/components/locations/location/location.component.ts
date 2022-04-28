import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LocationService} from "../../../shared/services/location.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location$?: Observable<any>;

  constructor(private locationService: LocationService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.location$ = this.locationService.getLocation(id);
      }
    })
  }


}
