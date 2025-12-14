import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleInstagram, simpleTiktok, simpleFacebook } from '@ng-icons/simple-icons';
import { LoginForm } from '../../components/containers/login-form/login-form';
import { CcContent } from 'src/app/components/containers/cc-content/cc-content';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-contact',
  imports: [CcContent, LoginForm, Footer, NgIcon],
  providers: [provideIcons({ simpleInstagram, simpleTiktok, simpleFacebook })],
  template: `
    <app-cc-content layout="contact">
      <app-login-form form="contact">
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
      <div class="socials">
        <h2>Find Us On</h2>
        <ul class="details">
          <li><ng-icon name="simpleInstagram" class="instagram"></ng-icon><a href="https://www.instagram.com/thousandknotss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">@thousandknotss</a></li>
          <li><ng-icon name="simpleTiktok" class="tiktok"></ng-icon><a href="https://www.tiktok.com/@thousandknotss?is_from_webapp=1&sender_device=pc" target="_blank">Thousandknots</a></li>
          <li><ng-icon name="simpleFacebook" class="facebook"></ng-icon><a href="https://www.facebook.com/thousandknotss" target="_blank">thousandknotss</a></li>
        </ul>
        <h3>Or</h3>
        <div class="email-us">
          <p>Email Us At</p>
          <a href="mailto:info@thousandknots.com">info@thousandknots.com</a>
        </div>
        <p>We'll get back to you as soon as possible.</p>
      </div>
    </app-cc-content>
    <app-footer />
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
