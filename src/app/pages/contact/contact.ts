import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';

@Component({
  selector: 'app-contact',
  imports: [LoginForm],
  template: `
    <app-login-form>
      <div class="contact-us">
        <h1>Contact Us</h1>
        <form>
          <div class="top-row">
            <input type="text" placeholder="Full Name*" required />
            <input type="tel" id="phone" placeholder="Phone*" required />
          </div>
          <input type="email" placeholder="E-mail*" required />
          <textarea placeholder="Tell Us!" rows="20" cols="67"></textarea>
          <input type="submit" />
        </form>
      </div>
    </app-login-form>
  `,
  styleUrls: ['./contact.scss'],
})
export class Contact {

}
