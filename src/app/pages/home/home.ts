import { Component } from '@angular/core';
import { HomeContent } from "../../components/containers/home-content/home-content";

@Component({
  selector: 'app-home',
  imports: [HomeContent],
  template: `
    <app-home-content />
  `,
  styles: `

  `,
})
export class Home {

}
