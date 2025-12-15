import { Injectable, signal, computed, inject } from '@angular/core';
import { Catalogs } from '../models/catalog.types';
import { Catalog } from './catalog';

interface theItem extends Catalogs {
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class Item {
  // CHANGE: Injected Catalog service to access catalog data
  private catalogService = inject(Catalog);

  // Signal holding the current item being displayed on the item page
  // Includes all catalog properties plus a 'count' property for cart quantity
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

  /**
   * CHANGE: New method to fetch item from catalog based on ID
   * 
   * Purpose: When user clicks a catalog item, this method is called with the item's ID
   * to load the corresponding item data from the catalog service into the itemSignal.
   * 
   * How it works:
   * 1. Converts string ID to number
   * 2. Validates the ID is a valid number
   * 3. Searches the catalog for the matching item by ID
   * 4. If found, updates itemSignal with the catalog item data
   * 5. Resets count to 0 when loading a different item (preserves count for same item)
   * 
   * Performance optimization: Only updates signal if loading a different item
   * (prevents unnecessary re-renders when same item is already loaded)
   */
  fetchAndLoadItem = (itemId: string) => {
    // Convert route parameter (string) to number for comparison
    const id = parseInt(itemId, 10);
    
    // Validation: Ensure ID is a valid number
    if (isNaN(id)) {
      console.warn(`Invalid item id: ${itemId}`);
      return;
    }

    // Get all catalog items from the catalog service
    const catalogItems = this.catalogService.catalogSignal();
    // Find the specific item matching the requested ID
    const catalogItem = catalogItems.find(item => item.id === id);
    
    if (catalogItem) {
      const currentItem = this.itemSignal();
      
      // Performance optimization: Only update if loading a different item
      // This prevents unnecessary re-renders and preserves user's count selection
      if (currentItem.id !== id) {
        // Different item - create new item object with count reset to 0
        const itemWithCount: theItem = {
          ...catalogItem, // Copy all catalog item properties (id, title, price, etc.)
          count: 0        // Initialize count for new item
        };
        // Update the signal with the new item (triggers UI update)
        this.itemSignal.set(itemWithCount);
        console.log('Item loaded from catalog:', this.itemSignal());
      }
      // If same item is already loaded, don't update to preserve count and avoid unnecessary re-renders
    } else {
      console.warn(`Item with id ${itemId} not found in catalog`);
    }
  }

  updateItem = (item: Catalogs) => {
    this.itemSignal.update(current => ({
      ...current,
      ...item,
      count: current.count + 1
    }));
    console.log(this.itemSignal());
    console.log('Updated');
  }

  decrementItem = () => {
    this.itemSignal.update(current => {
      if (current.count <= 0) {
        return current; // guard: prevent count from going below zero
      }
      return { ...current, count: current.count - 1 };
    });
    console.log(this.itemSignal());
    console.log('Decremented');
  }
  
  incrementItem = () => {
    this.itemSignal.update(current => ({
      ...current,
      count: current.count + 1
    }));
    console.log(this.itemSignal());
    console.log('Incremented');
  }
}
