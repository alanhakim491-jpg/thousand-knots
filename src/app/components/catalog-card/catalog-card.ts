import { Component, inject, Input } from '@angular/core';
import { Catalog } from '../../services/catalog';
import { Catalogs } from '../../models/catalog.types';
import { CartButton } from '../buttons/cart-button/cart-button';

@Component({
  selector: 'app-catalog-card',
  imports: [CartButton],
  template: `
    <div class="catalog-card">
      <div class="stock">
        @if (product.sku) {
          {{ product.sku }} left
        } @else {
          Out of stock
        }
      </div>
      <div class="the-image">
        <img [src]="product.imageURL" class="mb-2 rounded-lg"/>
        <div class="desc-over">
          <p>{{ product.description }}</p>
        </div>
      </div>
      <div class="props flex flex-col justify-between gap-2">
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
}
