import { Component } from '@angular/core';

@Component({
  selector: 'app-cc-content',
  imports: [],
  template: `
    <div class="cc">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cc-content.scss'],
})
export class CcContent {

}
