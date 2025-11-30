import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <div class="the-app">
      <app-header />
      <router-outlet />
    </div>
  `,
  styles: [``],
})
export class App {
  protected readonly title = signal('thousand-knots');
}
