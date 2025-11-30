import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  template: `
    <button (click)=btnClicked.emit()>{{ label() }}</button>
  `,
  styles: `
    button {
      font-size: 1rem;
      width: 100%;
      background-color: black;
      color: white;
      padding: 0.5rem 0.7rem;
      border: 0.5px solid black;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        scale: 1.05;
      }
    }
  `,
})
export class CartButton {
  
  label = input('');
  btnClicked = output();

}
