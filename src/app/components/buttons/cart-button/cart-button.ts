import { Component, signal, input, output, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart-button',
  imports: [NgClass],
  template: `
    <div
      class="cart-button-container"
      (mouseenter)="width === 'catalog' && showSizes.set(true)"
      (mouseleave)="onContainerMouseLeave()"
    >
      @if (width === 'catalog') {
        <div 
          class="sizes" [class.show]="showSizes()"
          (mouseenter)="onSizesMouseEnter()"
          (mouseleave)="width === 'catalog' && showSizes.set(false)"
          >
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
      background-color: #ffffff;
      padding: 0.4rem;
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
      font-size: 0.9rem;
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

    button.item {
      width: 100%;
      padding: 0.6rem 7.85rem;
      transition: 0.3s ease;
      &:hover {
        scale: 1.05;
      }
    }
  `,
})
export class CartButton {
  showSizes = signal(false);
  sizes = ['S', 'M', 'L', 'XL'];
  private hideTimeout: any;
  
  label = input('');
  btnClicked = output();

  @Input() width: 'catalog' | 'summary' | 'item' = 'catalog';

  onContainerMouseLeave() {
    if (this.width === 'catalog') {
      // Delay hiding to allow mouse to move to sizes div
      this.hideTimeout = setTimeout(() => {
        this.showSizes.set(false);
      }, 100);
    }
  }

  onSizesMouseEnter() {
    if (this.width === 'catalog') {
      // Cancel hide if mouse enters sizes
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      this.showSizes.set(true);
    }
  }
}
