import { Component } from '@angular/core';
import { LoginForm } from '../../components/containers/login-form/login-form';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LsButton } from "../../components/buttons/ls-button/ls-button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginForm, RouterOutlet, RouterLink, LsButton],
  template: `
    <app-login-form>
      <h1>Login</h1>
      <form>
        <div class="login-params">
          <div class="email">
            <h2 class="text-left">Email</h2>
            <input type="email" required autofocus class="border-black border-1 rounded-lg h-9 w-[24vw] text-[1.2rem]"/>
          </div>
          <div class="pass">
            <h2 class="text-left">Password</h2>
            <input type="password" required class="border-black border-1 rounded-lg h-9 w-[24vw] text-[1.2rem]" />
          </div>
        </div>
        <app-ls-button [value]="'Login'" />
      </form>
      <h2 id="signup-phrase">Don't have an account? <a routerLink="/profile/sign-up">Create One Here</a></h2>
    </app-login-form>
    <router-outlet />
  `,
  styleUrls: ['./login.scss'],
})
export class Login {

}
