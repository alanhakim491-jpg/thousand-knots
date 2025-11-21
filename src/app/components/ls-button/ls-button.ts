import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ls-button',
  imports: [],
  template: `
    <input type="submit" [value]='value()' class="mx-auto my-[3vh] text-center py-2 px-8 rounded-lg cursor-pointer" />
  `,
  styles: `
    input[type='submit'] {
      font-size: 1.1rem;
      border-radius: 7px;
      box-shadow: -10px 10px 20px 5px rgba(255, 255, 255, 0.04), 10px -10px 20px 5px rgba(0, 0, 0, 0.08);
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #f0f0f0;
      }
      @media screen and (min-width: 1600px) {
        font-size: 1.3rem;
      }
    }
  `,
})
export class LsButton {
  value = input('')
}
