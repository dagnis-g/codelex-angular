import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {
  @Input()
  residentLink?: string;
  @Output()
  resident?: any;

  constructor(private http: HttpClient) {
  }
  
  getResidents() {
    return this.http.get(<string>this.residentLink)
  }

  ngOnInit(): void {
    this.getResidents().subscribe(data => {
      this.resident = data;
    });

  }

}
