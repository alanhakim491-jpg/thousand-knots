import { Component, input, output, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart-button',
  imports: [NgClass],
  template: `
    <button (click)=btnClicked.emit() [ngClass]="width">{{ label() }}</button>
  `,
  styles: `
    button {
      font-size: 1rem;
      width: 100%;
      background-color: black;
      color: white;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        scale: 1.05;
      }
    }

    button.catalog {
      width: 100%;
      padding: 0.5rem 0.7rem;
    }
    button.summary {
      border-radius: 5px;
      width: 27.5vw;
      padding: 0.6rem 0.7rem
    }
  `,
})
export class CartButton {
  
  label = input('');
  btnClicked = output();

  @Input() width: 'catalog' | 'summary' = 'catalog';
}
