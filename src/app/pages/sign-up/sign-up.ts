import { Component, inject } from '@angular/core';
import { LoginForm } from "../../components/containers/login-form/login-form";
import { LsButton } from 'src/app/components/buttons/ls-button/ls-button';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Api, AuthResponse } from 'src/app/services/auth/api';
import { AuthStore } from 'src/app/services/auth/auth-store';
import { Footer } from 'src/app/components/footer/footer';
import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-up',
  imports: [LoginForm, LsButton, ReactiveFormsModule, Footer],
  template: `
    <app-login-form form="signup">
      <h1>Sign Up</h1>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="up">
          <input type="text" formControlName="firstName" placeholder="First Name" required class="border-black border-1 rounded-md h-11 w-[15.5vw] text-[1.1rem]" />
          <input type="text" formControlName="lastName" placeholder="Last Name" required class="border-black border-1 rounded-md h-11 w-[15.5vw] text-[1.1rem]" />
        </div>
        <input type="tel" formControlName="phoneNumber" placeholder="Phone" class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <input type="email" formControlName="email" placeholder="E-mail" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <input type="password" formControlName="password" placeholder="Password" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <input type="password" formControlName="confirmPass" placeholder="Confirm Password" required class="border-black border-1 rounded-md h-11 w-[32vw] text-[1.1rem]" />
        <app-ls-button [value]="'Sign-Up'" />
      </form>
    </app-login-form>
    <app-footer />
  `,
  styleUrls: ['./sign-up.scss'],
})
export class SignUp {
  private fb = inject(FormBuilder);
  private authApi = inject(Api);
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  loading = false;
  errorMsg = '';

  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: [''],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    confirmPass: ['', Validators.required],
  })

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    };

    this.loading = true;
    this.errorMsg = '';

    const dto = this.form.getRawValue() as { email: string, password: string };

    this.authApi.signup(dto).pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (res: unknown) => {
        this.authStore.setToken((res as AuthResponse).access_token)
        this.loading= false;
        this.router.navigate(['/profile/login']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'signup failed';
      },
    });
  }
}
