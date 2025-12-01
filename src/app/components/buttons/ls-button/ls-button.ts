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
      backdrop-filter: blur(5px) saturate(120%);
      -webkit-backdrop-filter: blur(5px) saturate(120%);
      background: rgba(224, 242, 254, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0px 8px 24px 0 rgba(12, 74, 110, 0.15),
        inset 0 0 0px rgba(255, 255, 255, 0),
        inset 0px 0px 4px 2px rgba(255, 255, 255, 0.2);
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
