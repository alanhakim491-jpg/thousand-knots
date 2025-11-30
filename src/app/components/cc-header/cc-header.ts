import { Component, input, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cc-header',
  imports: [NgClass],
  template: `
    <h1 [ngClass]='alignment'>{{ header() }}</h1>
  `,
  styleUrls: ['./cc-header.scss'],
})
export class CcHeader {
  header = input('');

  @Input() alignment: 'left' | 'center' = 'center'
}
