import { Component, inject, input, signal } from '@angular/core';
import { Catalog } from '../../services/catalog';
import { Cart } from '../../services/cart';
import { Catalogs } from '../../models/catalog.types';
import { CartButton } from '../buttons/cart-button/cart-button';
import { MatIconModule } from '@angular/material/icon';
import { ShovableBtn } from "../buttons/shovable-btn/shovable-btn";

@Component({
  selector: 'app-catalog-card',
  imports: [CartButton, MatIconModule, ShovableBtn],
  template: `
    <div class="catalog-card">
      <div class="the-top">
        <div class="stock" [class]="product().sku ? 'text-black' : 'text-rose-400'">
          @if (product().sku) {
            {{ product().sku }} left
          } @else {
            Out of stock
          }
        </div>
        <app-shovable-btn (btnClick)="markHandler()">
          <mat-icon>{{ bookmarkIcon() }}</mat-icon>
        </app-shovable-btn>
      </div>
      <div class="the-image">
        <img [src]="product().imageURL" class="mb-2 rounded-lg"/>
        <div class="desc-over">
          <p>{{ product().description }}</p>
        </div>
      </div>
      <div class="props flex flex-col justify-between gap-2">
        <div class="the-bottom flex flex-col gap-[0.5vh]">
          <h2>{{ product().title }}</h2>
          <p>{{ '$' + product().price  }}</p>
        </div>
        <app-cart-button label='Cart' (btnClicked)="cartService.addToCart(product())" />
      <div>
    </div>
  `,
  styleUrls: ['./catalog-card.scss'],
})
export class CatalogCard {
  catalogService = inject(Catalog);
  cartService = inject(Cart);

  product = input.required<Catalogs>();

  bookmarkIcon = signal('bookmark_border');

  markHandler() {
    this.bookmarkIcon.set(
      this.bookmarkIcon() === 'bookmark_border' ? 'bookmark' : 'bookmark_border'
    );
  }
}
