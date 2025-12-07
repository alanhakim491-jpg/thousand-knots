import { Component, signal, input, output, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart-button',
  imports: [NgClass],
  template: `
    <div
      class="cart-button-container"
      (mouseenter)="width === 'catalog' && showSizes.set(true)"
      (mouseleave)="width === 'catalog' && showSizes.set(false)"
    >
      @if (width === 'catalog') {
        <div class="sizes" [class.show]="showSizes()">
          @for (s of sizes; track s) {
            <div class="size">{{ s }}</div>
          }
        </div>
      }

      <button
        (click)="btnClicked.emit()"
        [ngClass]="width"
      >
        {{ label() }}
      </button>
    </div>
  `,
  styles: `
    .cart-button-container {
      position: relative;
      width: 100%;
    }

    .sizes {
      display: none;
      gap: 0.5vw;
      background-color: #f5f5f4;
      padding: 0.5rem;
      justify-content: center;
      flex-direction: row;
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      margin-bottom: 0.25rem;
      z-index: 10;

      &.show {
        display: flex;
      }
    }

    .size {
      font-size: 0.8rem;
      padding: 0.5rem 0.7rem;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        scale: 1.1;
      }
    }

    button {
      width: 100%;
      font-size: 1rem;
      background-color: black;
      color: white;
      padding: 0.5rem 0.7rem;
      cursor: pointer;
      transition: 0.3s ease;
    }

    button.catalog {
      width: 100%;
    }

    button.summary {
      width: 27.5vw;
      border-radius: 5px;
      padding: 0.6rem 0.7rem;
    }
  `,
})
export class CartButton {
  showSizes = signal(false);
  sizes = ['S', 'M', 'L', 'XL'];
  
  label = input('');
  btnClicked = output();

  @Input() width: 'catalog' | 'summary' = 'catalog';
}
