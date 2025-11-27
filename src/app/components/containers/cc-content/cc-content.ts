import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-cc-content',
  imports: [NgClass], // ngClass comes from @angular/common, if we ever wanna use it
  template: `
    <div class="cc" [ngClass]="layout">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cc-content.scss'],
})
export class CcContent {
  @Input() layout: 'grid' | 'flex-col' = 'grid'; // indicates an input, whith options, and if none are passed it defaults to 'grid'
}

// what we did here is we chose to make a variable class using input
// it allowed us to bind the class to the input so as to make it variable based on where we're going to use this reusable container
// and we imported ngClass to bind the layout input to be a class
// we then took to the scss stylesheet and styled .cc.grid and .cc.flex-col to define the styles of the various instances
