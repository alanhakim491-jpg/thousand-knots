import { Component } from '@angular/core';
import { LoginForm } from "../../components/login-form/login-form";

@Component({
  selector: 'app-sign-up',
  imports: [LoginForm],
  template: `
    <app-login-form>
      
    </app-login-form>
  `,
  styleUrls: ['./sign-up.scss'],
})
export class SignUp {

}
