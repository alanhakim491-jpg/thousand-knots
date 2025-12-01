import { Component, inject } from '@angular/core';
import { LoginForm } from "../../components/containers/login-form/login-form";
import { LsButton } from 'src/app/components/buttons/ls-button/ls-button';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Footer } from 'src/app/components/footer/footer';

@Component({
  selector: 'app-sign-up',
  imports: [LoginForm, LsButton, ReactiveFormsModule, Footer],
  template: `
    <app-login-form form="signup">
      <h1>Sign Up</h1>
      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <div class="up">
          <input type="text" formControlName="fullName" placeholder="Full Name" required class="border-black border-1 rounded-md h-11 w-[15.5vw] text-[1.1rem]" />
          <input type="tel" formControlName="phone" placeholder="Phone" required class="border-black border-1 rounded-md h-11 w-[15.5vw] text-[1.1rem]" />
        </div>
        <input type="email" formControlName="email" placeholder="E-mail" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <input type="password" formControlName="pass" placeholder="Password" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <input type="password" formControlName="confirmPass" placeholder="Confirm Password" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <app-ls-button [value]="'Sign-Up'" />
      </form>
    </app-login-form>
    <app-footer />
  `,
  styleUrls: ['./sign-up.scss'],
})
export class SignUp {

  private fb = inject(FormBuilder); // we could also create an instance using constructor(private fb: FormBuilder, private router: Router) {signupForm = ..}, 
  private router = inject(Router); // however, inject is the modern angular 17-20+ way

  signupForm = this.fb.group({  // import FormBuilder and ReactiveFormModule and Validators at top of component
    fullName: ['', Validators.required], // add in the Template inside the input type, a formControlName="" to use in the TS class
    phone: ['', Validators.required], // define the singupForm as an fb.group (FormBuilder.group) and set it in the form tag as [formGroup]="signupForm"
    email: ['', Validators.email],
    pass: ['', Validators.required],
    confirmPass: ['', Validators.required]
  })

  onSubmit() { // define this function after the (ngSubmit) event
    if (this.signupForm.valid) {
      this.router.navigate(["/login"]);
    }
  }
}
