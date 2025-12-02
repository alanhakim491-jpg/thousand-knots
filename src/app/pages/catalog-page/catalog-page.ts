import { Component, inject, signal } from '@angular/core';
import { CatalogCard } from 'src/app/components/cards/catalog-card/catalog-card';
import { CcHeader } from 'src/app/components/cc-header/cc-header';
import { CcContent } from 'src/app/components/containers/cc-content/cc-content';
import { Catalog } from '../../services/catalog';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-catalog-page',
  imports: [CatalogCard, CcHeader, CcContent, MatIconModule, Footer],
  template: `
    <app-cc-header header="Catalog" />
    <div class="heading">
      <ul class="filter">
        <li (click)="setCategory('all')" [class.active]="catalogService.selectedCategory() === 'all'">View All</li>
        <li (click)="setCategory('pajamas')" [class.active]="catalogService.selectedCategory() === 'pajamas'">Pajamas</li>
        <li (click)="setCategory('slippers')" [class.active]="catalogService.selectedCategory() === 'slippers'">Slippers</li>
        <li (click)="setCategory('shirt dresses')" [class.active]="catalogService.selectedCategory() === 'shirt dresses'">Shirt Dresses</li>
      </ul>
      <ul class="view">
        <li id="title">View<li>
        <div class="view-icons">
          <li class="cursor-pointer" (click)="oneHandler()"><mat-icon>square</mat-icon></li>
          <li class="cursor-pointer" (click)="twoHandler()"><mat-icon>grid_view</mat-icon></li>
          <li class="cursor-pointer" (click)="fourHandler()"><mat-icon>view_module</mat-icon></li>
        </div>
      </ul>
    </div>
    <app-cc-content [layout]='layout()'>
      @for (p of products(); track p.id ) {
        <app-catalog-card [product]='p' [size]='size()' />
      }
    </app-cc-content>
    <app-footer />
  `,
  styleUrls: ['./catalog-page.scss'],
})
export class CatalogPage {
  catalogService = inject(Catalog);

  products = this.catalogService.products;

  setCategory(category: string) {
    this.catalogService.selectedCategory.set(category);
  }

  layout = signal<'flex-one' | 'grid-two' | 'grid'>('grid');
  size = signal<'four-size' | 'two-size' | 'one-size'>('four-size');

  oneHandler() {
    this.layout.set('flex-one');
    this.size.set('one-size');
  }
  twoHandler() {
    this.layout.set('grid-two');
    this.size.set('two-size');
  }
  fourHandler() {
    this.layout.set('grid');
    this.size.set('four-size');
  }
}
