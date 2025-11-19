import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="home-content"></div>
  `,
  styles: `
    :host {
      display: block;
      height: screen;
      background-image: url("/assets/floral-bcg.png");
      background-position: center;
    }
  `,
})
export class Home {

}
