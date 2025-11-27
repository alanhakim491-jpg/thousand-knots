import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ls-button',
  imports: [],
  template: `
    <input type="submit" [value]='value()' class="mx-auto my-[3vh] text-center py-2 px-8 rounded-lg cursor-pointer" (click)=lsClicked.emit() />
  `,
  styles: `
    input[type='submit'] {
      font-size: 1.1rem;
      border-radius: 7px;
      box-shadow: -10px 10px 20px 5px rgba(255, 255, 255, 0.04), 10px -10px 20px 5px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(8px) saturate(100%);
      -webkit-backdrop-filter: blur(8px) saturate(100%);
      background: rgba(253, 244, 227, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        4px 4px 20px 0 rgba(120, 53, 15, 0.1),
        inset 0 0 150px rgba(245, 158, 11, 0.05),
        inset 0px 0px 4px 2px rgba(255, 255, 255, 0.15);
      transition: scale 0.3s ease-in-out;
      &:hover {
        scale: 1.05;
      }
      @media screen and (min-width: 1600px) {
        font-size: 1.3rem;
      }
    }
  `,
})
export class LsButton {
  value = input('');
  lsClicked = output();
}
