import { Component } from '@angular/core';

@Component({
  selector: 'app-shovable-btn',
  imports: [],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    button {
      height: 100%;
      width: 100%;
      padding: 10px 5px;
    }
  `,
})
export class ShovableBtn {

}
