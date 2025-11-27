import { Component } from '@angular/core';
import { CcContent } from 'src/app/components/containers/cc-content/cc-content';
import { CcHeader } from 'src/app/components/cc-header/cc-header';

@Component({
  selector: 'app-by-collection',
  imports: [CcContent, CcHeader],
  template: `
    <app-cc-header [header]="'Shop By Category'" />
    <app-cc-content>
    </app-cc-content>
  `,
  styles: ``,
})
export class ByCollection {

}
