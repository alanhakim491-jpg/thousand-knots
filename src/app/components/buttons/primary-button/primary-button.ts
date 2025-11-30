import { Component, input, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [NgClass],
  template: `
    <button class="prm-btn" [ngClass]="effect">{{ label() }}</button>
  `,
  styles: `
    .prm-btn {
      height: 100%;
      text-align: left;
      padding: 1.5vh 3.4vw;
      @media screen and (min-width: 1600px) {
            font-size: 1.3rem;
      }
      cursor: pointer;
    }

    .prm-btn.header {
      position: relative;
      width: 100%;
      &::after {
          content: '';
          width: 0;
          height: 1.2px;
          position: absolute;
          background: black;
          top: 3.8vh;
          left: 3.45vw;
          border-radius: 20px;
          transition: 0.2s;
          @media screen and (min-width: 1600px) {
            top: 3.3vh;
          }
      }
      &:hover::after {
            width: 13%;
      } 
    }
    .prm-btn.cart {
      transition: opacity 0.2s ease;
      &:hover {
        opacity: 0.5;
      }
    }
  `,
})
export class PrimaryButton {
  label = input('');

  @Input() effect: 'header' | 'cart' = 'cart'
}
