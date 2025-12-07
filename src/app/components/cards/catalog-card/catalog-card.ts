import { Component, inject, input, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router'
import { NgClass } from '@angular/common';
import { Catalog } from 'src/app/services/catalog';
import { Cart } from 'src/app/services/cart';
import { Catalogs } from 'src/app/models/catalog.types';
import { CartButton } from '../../buttons/cart-button/cart-button';
import { MatIconModule } from '@angular/material/icon';
import { ShovableBtn } from '../../buttons/shovable-btn/shovable-btn';

@Component({
  selector: 'app-catalog-card',
  imports: [CartButton, MatIconModule, ShovableBtn, NgClass, RouterLink],
  template: `
    <div class="catalog-card" [ngClass]='size'>
      <div class="the-top">
        @if (size === 'four-size') {
          <div class="stock" [class]="product().sku ? 'text-black' : 'text-rose-400'">
            @if (product().sku) {
              {{ product().sku }} left
            } @else {
              Out of stock
            }
          </div>
          @if (size === 'four-size') {
            <app-shovable-btn (btnClick)="markHandler()" where="catalog">
              <mat-icon>{{ bookmarkIcon() }}</mat-icon>
            </app-shovable-btn>
          }
        }
      </div>
      <div class="the-image">
        <img [src]="product().imageURL" class="mb-2"/>
        @if (size === 'four-size') {
          <div class="desc-over">
            <p>{{ product().description }}</p>
          </div>
        }
      </div>
      <div class="props flex flex-col gap-1">
        <div class="the-bottom flex flex-row justify-between items-center">
          <h2 routerLink="/item/:id">{{ product().title }}</h2>
          @if (size === 'four-size' || size === 'two-size') {
            <p>{{ '$' + product().price  }}</p>
          }
        </div>
        @if (size === 'four-size') {
          <app-cart-button width="catalog" label='Cart' (btnClicked)="cartService.addToCart(product())" />
        }
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

  @Input() size: 'two-size' | 'four-size' | 'one-size' = 'four-size';
}
