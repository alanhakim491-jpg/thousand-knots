import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="form">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./login-form.scss'],
})
export class LoginForm {
  @Input() form: 'login' | 'signup' | 'contact' = 'login';
}
