import { Injectable, signal } from '@angular/core';
import { Catalogs } from '../models/catalog.types';
import { Carts } from '../models/cart.types';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  cart = signal<Carts[]>([]);

  addToCart = (product: Catalogs) => {
    if (!product.sku) return; // guard to check for stock, if no stock, dont add

    const current = this.cart(); // current is the cart current signal value, which is defined above as an array of Carts (type model)
    const existingIndex = current.findIndex(p => p.id === product.id); // this searches for an item in the cart that matches the same id and returns -1 if nonexistent

    if (existingIndex > -1) {
      const updated = [...current]; // creates a new array to update
      updated[existingIndex] = { // updates to the current/existing instead of the ...current or old item
        ...updated[existingIndex],
        count: updated[existingIndex].count + 1, // new array that spreads the existing item and increasing the count by 1
      };
      this.cart.set(updated); // updates the array within cart to be the updated one
    } else {
      this.cart.set([...current, { ...product, count: 1 }]); // and if the item doesnt match id, it simply creates a new array that spreads the current array and adds the item as a new card/product
    }
  }

  incHandler = (productId: number) => {
    const current = this.cart();
    const existingIndex = current.findIndex(p => p.id === productId);

    if (existingIndex > -1) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        count: updated[existingIndex].count + 1,
      };
      this.cart.set(updated);
    }
  }

  decHandler = (productId: number) => {
    const current = this.cart();
    const existingIndex = current.findIndex(p => p.id === productId);

    if (existingIndex > -1) {
      const updated = [...current];
      const item = updated[existingIndex];

      if (item.count > 1) {
        updated[existingIndex] = { ...item, count: item.count -1 };
      } else {
        updated.splice(existingIndex, 1);
      }
      this.cart.set(updated);
    }
  }

  delHandler = (productId: number) => {
    const current = this.cart();
    const updated = current.filter(p => p.id !== productId)
    this.cart.set(updated);
  }
}
