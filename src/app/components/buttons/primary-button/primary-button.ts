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
      padding: 1.7vh 1vw;
      cursor: pointer;
      &::after {
          content: '';
          width: 0;
          height: 3px;
          position: absolute;
          background: black;
          top: 4.2vh;
          left: 1vw;
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
