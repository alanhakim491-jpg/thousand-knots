import { Component, input } from '@angular/core';
import { Catalog } from 'src/app/services/catalog';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <p>
      cart-item works!
    </p>
  `,
  styles: ``,
})
export class CartItem {
  item = input.required<Catalog>();
}
