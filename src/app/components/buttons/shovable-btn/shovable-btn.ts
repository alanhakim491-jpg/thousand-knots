import { Component, output } from '@angular/core';

@Component({
  selector: 'app-shovable-btn',
  imports: [],
  template: `
    <button (click)=btnClick.emit()>
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    button {
      height: 100%;
      width: 100%;
      padding: 1.3vh 0.3vw;
      cursor: pointer;
    }
  `,
})
export class ShovableBtn {
  btnClick = output();
}
