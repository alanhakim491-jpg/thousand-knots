import { Component, inject, signal } from '@angular/core';
import { CatalogCard } from 'src/app/components/cards/catalog-card/catalog-card';
import { CcHeader } from 'src/app/components/cc-header/cc-header';
import { CcContent } from 'src/app/components/containers/cc-content/cc-content';
import { Catalog } from '../../services/catalog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-catalog-page',
  imports: [CatalogCard, CcHeader, CcContent, MatIconModule],
  template: `
    <app-cc-header header="Catalog" />
    <div class="heading">
      <ul class="filter">
        <li>View All</li>
        <li>Pajamas</li>
        <li>Slippers</li>
        <li>Shirt Dresses</li>
      </ul>
      <ul class="view">
        <li id="title">View<li>
        <li class="cursor-pointer" (click)="oneHandler()"><mat-icon>square</mat-icon></li>
        <li class="cursor-pointer" (click)="twoHandler()"><mat-icon>grid_view</mat-icon></li>
        <li #fourRef class="cursor-pointer" (click)="fourHandler()"><mat-icon>view_module</mat-icon></li>
      </ul>
    </div>
    <app-cc-content [layout]='layout()'>
      @for (p of products(); track p.id ) {
        <app-catalog-card [product]='p' [size]='size()' />
      }
    </app-cc-content>
  `,
  styleUrls: ['./catalog-page.scss'],
})
export class CatalogPage {
  catalogService = inject(Catalog)

  products = this.catalogService.products

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
