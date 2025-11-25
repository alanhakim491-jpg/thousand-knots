import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cc-header',
  imports: [],
  template: `
    <h1>{{ header() }}</h1>
  `,
  styleUrls: ['./cc-header.scss'],
})
export class CcHeader {
  header = input('');
}
