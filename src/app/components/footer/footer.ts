import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="text-center">{{ credits() }}</div>
  `,
  styles: `
    div {
      margin: 7vh auto;
      padding-bottom: 1vh;
      font-family: 'Roboto Condensed', sans-serif;
    }
  `,
})
export class Footer {
  credits = signal('2025, by Angstrom.dev')
}
