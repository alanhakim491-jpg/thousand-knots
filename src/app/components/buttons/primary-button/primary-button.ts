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
      text-align: center;
      width: 100%;
      padding: 1.5vh 1.2vw;
      border-radius: 30px;
      @media screen and (min-width: 1600px) {
            font-size: 1.3rem;
      }
      cursor: pointer;
      &::after {
          content: '';
          width: 0;
          height: 3px;
          position: absolute;
          background: black;
          top: 3.8vh;
          left: 1.23vw;
          border-radius: 20px;
          transition: 0.5s;
          @media screen and (min-width: 1600px) {
            top: 3.3vh;
          }
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
