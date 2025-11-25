import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div class="the-app">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `,
  styles: [``],
})
export class App {
  protected readonly title = signal('thousand-knots');
}
