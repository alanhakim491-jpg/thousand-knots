import { Component, output, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-shovable-btn',
  imports: [NgClass],
  template: `
    <button (click)=btnClick.emit() [ngClass]="where">
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    button {
      height: 2vh;
      cursor: pointer;
    }
    button.header {
      width: 2vw;
      padding: 0.3vh 0.3vw;
    }
    button.catalog {
      padding: 0
    }
  `,
})
export class ShovableBtn {
  btnClick = output();
  @Input() where: 'catalog' | 'header' = 'header';
}
