import { Component, inject } from '@angular/core';
import { LoginForm } from '../../components/containers/login-form/login-form';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LsButton } from "../../components/buttons/ls-button/ls-button";
import { Footer } from '../../components/footer/footer';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Api, AuthResponse } from 'src/app/services/auth/api';
import { AuthStore } from 'src/app/services/auth/auth-store';
import { Router } from '@angular/router';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginForm, RouterOutlet, RouterLink, LsButton, Footer, ReactiveFormsModule],
  template: `
    <app-login-form form="login">
      <h1>Login</h1>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="login-params">
          <div class="email">
            <h2 class="text-left">Email</h2>
            <input type="email" formControlName="email" required autofocus class="border-black border-1 rounded-md h-10 w-[28vw] text-[1.2rem]"/>
          </div>
          <div class="pass">
            <h2 class="text-left">Password</h2>
            <input type="password" formControlName="password" required class="border-black border-1 rounded-md h-10 w-[28vw] text-[1.2rem]" />
          </div>
        </div>
        <app-ls-button [value]="'Login'" />
      </form>
      <h2 id="signup-phrase">Don't have an account? <a routerLink="/profile/sign-up">Create One Here</a></h2>
    </app-login-form>
    <router-outlet />
    <app-footer />
  `,
  styleUrls: ['./login.scss'],
})
export class Login {
  private fb = inject(FormBuilder);
  private authApi = inject(Api);
  private authStore = inject(AuthStore);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  loading = false;
  errorMsg = '';

  form = this.fb.nonNullable.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    };

    this.loading = true;
    this.errorMsg = '';

    const dto = this.form.getRawValue() as { email: string, password: string };

    this.authApi.signin(dto).pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (res: unknown) => {
        this.authStore.setToken((res as AuthResponse).access_token)
        this.loading= false;
        this.router.navigate(['/profile']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'login failed';
      },
    });
  }
}
