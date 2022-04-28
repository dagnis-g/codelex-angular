import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignupDetails} from "../../../shared/models/signup.model";

@Component({
  selector: 'app-form-homework',
  templateUrl: './form-homework.component.html',
  styleUrls: ['./form-homework.component.scss']
})
export class FormHomeworkComponent implements OnInit {
  @Output()
  signupEvent = new EventEmitter<SignupDetails>();
  @Input()
  exampleValue?: string;

  signupForm = new FormGroup({});

  countries = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Estonia',
      countryCode: 'EST'
    },
    {
      title: 'Lithuania',
      countryCode: 'LT'
    }
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      country: [''],
      male: [false],
      female: [false],
      robot: [false, [Validators.requiredTrue]]
    })
  }

  signup(): void {
    console.log(this.signupForm.value)
    // this.signupForm.markAllAsTouched()
    if (this.signupForm.valid) {
    }
  }


}
