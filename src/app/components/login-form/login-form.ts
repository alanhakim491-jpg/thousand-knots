import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="login">
      <h1>Login</h1>
      <form>
        <div class="login-params">  
          <h2>Email</h2>
          <input type="email" class="border-black border-1 rounded-lg h-9"/>
          <h2>Password</h2>
          <input type="password" class="border-black border-1 rounded-lg h-9" />
        </div>
        <input type="submit" placeholder="Login" class="mx-auto my-[3vh] text-center py-3 px-9 rounded-lg cursor-pointer" />
      </form>
      <h2>Don't have an account? <span routerLink="/sign-up">Create One Here</span></h2>
    </div>
  `,
  styleUrls: ['./login-form.scss'],
})
export class LoginForm {

}
