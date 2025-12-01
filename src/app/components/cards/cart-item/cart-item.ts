import { Component, input, inject } from '@angular/core';
import { Carts } from 'src/app/models/cart.types';
import { Cart } from 'src/app/services/cart';
import { PrimaryButton } from '../../buttons/primary-button/primary-button';
import { ShovableBtn } from '../../buttons/shovable-btn/shovable-btn';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButton, ShovableBtn, MatIconModule],
  template: `
    <div class="cart-card">
      <div class="left" >
        <img [src]="item().imageURL" />
        <div class="words">
          <h2>{{ item().title }}</h2>
          <p>{{ '$' + item().price }}</p>
        </div>
      </div>
      <div class="right">
        <div class="inc-dec">
          <app-shovable-btn (btnClick)="cartService.decHandler(item().id)"><mat-icon>remove</mat-icon></app-shovable-btn>
          <h2>{{ item().count }}</h2>
          <app-shovable-btn (btnClick)="cartService.incHandler(item().id)"><mat-icon>add</mat-icon></app-shovable-btn>
        </div>
        <app-primary-button label='DELETE' class="text-[1.1rem] font-light" effect="cart" (click)="cartService.delHandler(item().id)" />
      </div>
    </div>
  `,
  styleUrls: ['./cart-item.scss'],
})
export class CartItem {
  item = input.required<Carts>();

  cartService = inject(Cart);
}
