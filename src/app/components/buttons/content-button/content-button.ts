import { Component, input } from '@angular/core';

@Component({
  selector: 'app-content-button',
  imports: [],
  template: `
    <button class="rounded-lg">{{ label() }}</button>
  `,
  styles: `
    button {
      cursor: pointer;
      width: 100%;
      padding: 1.8vh 6vw;
      font-size: 1.2rem;
      font-family: 'Roboto Condensed', sans-serif;
      box-shadow: -10px 10px 20px 5px rgba(255, 255, 255, 0.04), 10px -10px 20px 5px rgba(0, 0, 0, 0.08);
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #f3e8ff;
      }
    }
  `,
})
export class ContentButton {
  label = input('')
}
