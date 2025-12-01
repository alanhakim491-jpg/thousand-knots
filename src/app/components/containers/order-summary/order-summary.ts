import { Component, inject } from '@angular/core';
import { CartButton } from '../../buttons/cart-button/cart-button';
import { Cart } from 'src/app/services/cart';

@Component({
  selector: 'app-order-summary',
  imports: [CartButton],
  template: `
    <div class="summary">
      <h2 id="title">Summary</h2>
      <div class="total-items">
        <p>Total Items</p>
        <h2>{{ cartService.totalItems() + ' ' + 'Items' }}</h2> 
      </div>
      <div class="sub-total">
        <p>Sub-Total</p>
        <h2>{{ '$' + cartService.subTotal() }}</h2>
      </div>
      <form>
        <div class="cash-select">
          <input type="radio" id="cash" name="payment-method" value="Cash on delivery" checked />
          <label for="cash">Cash on delivery</label>
        </div>
        <div class="card-select">
          <input type="radio" id="card" name="payment-method" value="Pay by Card" />
          <label for="card">Pay by Card</label>
        </div>
      </form>
      <app-cart-button width="summary" label="Proceed to Checkout"/>
    </div>
  `,
  styleUrls: ['./order-summary.scss'],
})
export class OrderSummary {
  cartService = inject(Cart);

}
