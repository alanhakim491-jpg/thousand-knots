import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  template: `
    <div class="login signup">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./login-form.scss'],
})
export class LoginForm {

}
