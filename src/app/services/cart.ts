import { Injectable, signal, inject } from '@angular/core';
import { Catalog } from './catalog';
import { Catalogs } from '../models/catalog.types';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  catalogService = inject(Catalog);

  cart = signal<Catalogs[]>([]);

  addToCart = (product: Catalogs) => {
    this.cart.set([...this.cart(), product]);
  }
}
