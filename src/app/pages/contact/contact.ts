import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { LoginForm } from '../../components/containers/login-form/login-form';

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
          <textarea placeholder="Tell Us!" rows="20" cols="67" maxlength="300" #textRef (input)="inputHandler()"></textarea>
          <input type="submit" />
          <div class="char-count" #wrdRef>{{ charCount() }}</div>
        </form>
      </div>
    </app-login-form>
  `,
  styleUrls: ['./contact.scss'],
})
export class Contact {
  @ViewChild('textRef') textRef!: ElementRef<HTMLTextAreaElement>;

  charCount = signal('0 / 300'); // set an initial safe guard, as ViewChild is always applied with life cycle ngAfterInit(), so it wont apply if set immediately as the initial signal

  ngAfterInit() {
    this.charCount.set(`0 / ${this.textRef.nativeElement.maxLength}`)
  }

  inputHandler() {
    this.charCount.set(`${this.textRef.nativeElement.value.length} / ${this.textRef.nativeElement.maxLength}`)
  }
}
