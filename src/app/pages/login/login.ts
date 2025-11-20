import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginForm, RouterOutlet],
  template: `
    <app-login-form />
    <router-outlet />
  `,
  styles: ``,
})
export class Login {

}
