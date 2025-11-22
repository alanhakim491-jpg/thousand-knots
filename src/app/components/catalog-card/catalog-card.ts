import { Component, inject, Input, ViewChild, ElementRef } from '@angular/core';
import { Catalog } from '../../services/catalog';
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
        <div class="stock">
          @if (product.sku) {
            {{ product.sku }} left
          } @else {
            Out of stock
          }
        </div>
        <app-shovable-btn (btnClick)="markHandler()">
          <mat-icon>{{ bookmarkIcon }}</mat-icon>
        </app-shovable-btn>
      </div>
      <div class="the-image">
        <img [src]="product.imageURL" class="mb-2 rounded-lg"/>
        <div class="desc-over">
          <p>{{ product.description }}</p>
        </div>
      </div>
      <div class="props flex flex-col justify-between gap-3">
        <h2>{{ product.title }}</h2>
        <div class="the-bottom flex flex-row justify-between items-center">
          <p>{{ '$' + product.price  }}</p>
          <app-cart-button label='Cart'/>
        </div>
      <div>
    </div>
  `,
  styleUrls: ['./catalog-card.scss'],
})
export class CatalogCard {
  catalogService = inject(Catalog);

  @Input() product!: Catalogs;

  bookmarkIcon = 'bookmark_border';

  markHandler() {
    this.bookmarkIcon = this.bookmarkIcon === 'bookmark_border' ? 'bookmark' : 'bookmark_border';
  }
}
