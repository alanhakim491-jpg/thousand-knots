import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  template: `
    <button (click)=btnClicked.emit()>{{ label() }}</button>
  `,
  styles: `
    button {
      width: 100%;
      padding: 0.2rem 0.7rem;
      border: 0.5px solid black;
      border-radius: 7px;
      box-shadow: -10px 10px 20px 5px rgba(255, 255, 255, 0.04), 10px -10px 20px 5px rgba(0, 0, 0, 0.08);
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        scale: 1.1;
      }
    }
  `,
})
export class CartButton {
  label = input('');
  btnClicked = output();
}
