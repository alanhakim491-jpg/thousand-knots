import { Component, inject } from '@angular/core';
import { CcContent } from 'src/app/components/containers/cc-content/cc-content';
import { CartItem } from 'src/app/components/cards/cart-item/cart-item';
import { CcHeader } from 'src/app/components/cc-header/cc-header';
import { Cart } from 'src/app/services/cart';

@Component({
  selector: 'app-cart-page',
  imports: [CcContent, CcHeader, CartItem],
  template: `
    <app-cc-header [header]="'My Cart'" />
    <app-cc-content layout="flex-col">
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
      }
    </app-cc-content>
  `,
  styles: ``,
})
export class CartPage {

  cartService = inject(Cart);
  
}
