import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <p>
      © Thousand Knots 2025
    </p>
  `,
  styles: `
    p {
      display: block;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 300;
      color: #666;
      padding: 2vh 0;
      margin: 0;
    }
  `,
})
export class Footer {

}
