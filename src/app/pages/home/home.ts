import { Component } from '@angular/core';
import { HomeContent } from "../../components/containers/home-content/home-content";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [HomeContent, Footer],
  template: `
    <app-home-content />
    <app-footer />
  `,
  styles: `

  `,
})
export class Home {

}
