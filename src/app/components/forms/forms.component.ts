import {Component} from '@angular/core';
import {LoginDetails} from "../../shared/models/login.model";
import {SignupDetails} from "../../shared/models/signup.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  exampleValue = 'Es nezinu';

  login(loginDetails: LoginDetails): void {
    console.log(loginDetails)
  }

  signup(signupDetails: SignupDetails): void {
    console.log(signupDetails)
  }
}
