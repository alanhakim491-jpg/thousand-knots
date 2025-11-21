import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';

@Component({
  selector: 'app-contact',
  imports: [LoginForm],
  template: `
    <app-login-form>
      <div>
        
      </div>
    </app-login-form>
  `,
  styles: ``,
})
export class Contact {

}
