import { Component, inject } from '@angular/core';
import { CatalogCard } from '../../components/catalog-card/catalog-card';
import { Catalog } from '../../services/catalog';

@Component({
  selector: 'app-catalog-page',
  imports: [CatalogCard],
  template: `
    <h1>Explore</h1>
    <div class="catalog">
      @for (p of products(); track p.id ) {
        <app-catalog-card [product]='p' />
      }
      <ul class="navigate">
        <li>Prev</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>10</li>
        <li>Next</li>
      </ul>
    </div>
  `,
  styleUrls: ['./catalog-page.scss'],
})
export class CatalogPage {
  catalogService = inject(Catalog)

  products = this.catalogService.products
}
