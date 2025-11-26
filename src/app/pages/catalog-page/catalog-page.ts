import { Component, inject } from '@angular/core';
import { CatalogCard } from '../../components/catalog-card/catalog-card';
import { CcContent } from 'src/app/components/cc-content/cc-content';
import { CcHeader } from 'src/app/components/cc-header/cc-header';
import { Catalog } from '../../services/catalog';

@Component({
  selector: 'app-catalog-page',
  imports: [CatalogCard, CcContent, CcHeader],
  template: `
    <app-cc-header [header]="'Explore'" />
    <app-cc-content layout="grid">
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
    </app-cc-content>
  `,
  styleUrls: ['./catalog-page.scss'],
})
export class CatalogPage {
  catalogService = inject(Catalog)

  products = this.catalogService.products
}
