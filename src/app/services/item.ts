import { Injectable, signal, computed } from '@angular/core';
import { Catalogs } from '../models/catalog.types';

interface theItem extends Catalogs {
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class Item {

  itemSignal = signal<theItem>(
    {
      id: 1,
      title: 'Heartspot Shorts PJ Set',
      price: 45,
      description: 'Short sleeves with matching shorts heart patterned muslin cotton pj set',
      imageURL: 'https://thethousandknot.com/cdn/shop/files/c749a523-d423-4224-8f35-b0ffce225e2b.jpg?v=1744407786&width=360',
      sku: 12,
      category: 'pajamas',
      count: 0,
    },
  )

  updateItem = (item: Catalogs) => {
    const current = this.itemSignal();
    const updated = { ...current, ...item, count: current.count + 1 };
    this.itemSignal.set(updated);
    console.log(this.itemSignal());
    console.log('Updated');
  }

  decrementItem = () => {
    const current = this.itemSignal();
    if (current.count <= 0) {
      return; // guard: prevent count from going below zero
    }
    const updated = { ...current, count: current.count - 1 };
    this.itemSignal.set(updated);
    console.log(this.itemSignal());
    console.log('Decremented');
  }
  incrementItem = () => {
    const current = this.itemSignal();
    const updated = { ...current, count: current.count + 1 };
    this.itemSignal.set(updated);
    console.log(this.itemSignal());
    console.log('Incremented');
  }
}
