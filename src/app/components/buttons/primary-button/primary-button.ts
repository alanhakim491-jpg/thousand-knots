import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="prm-btn">{{ label() }}</button>
  `,
  styles: `
    .prm-btn {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 10px 20px;
      &::after {
          content: '';
          width: 0;
          height: 3px;
          position: absolute;
          background: black;
          top: 3.5vh;
          left: 1.3vw;
          transition: 0.5s;
      }
      &:hover::after {
            width: 40%;
          } 
    }
  `,
})
export class PrimaryButton {
  label = input('')
}
