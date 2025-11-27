import { Component } from '@angular/core';
import { ContentButton } from "../../buttons/content-button/content-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-content',
  imports: [ContentButton, RouterLink],
  template: `
    <div class="display">
      <div class="display_l">
        <h1>Discover</h1>
        <div class="the-buttons">
          <app-content-button label='Shop Now' routerLink="/by-cat" />
          <app-content-button label='New Collection' />
        </div>
      </div>
      <div class="display_r">
        <img src='https://thethousandknot.com/cdn/shop/files/ff467d7e-2f16-4e1c-b73c-89b101f70557.jpg?v=1744407786&width=990' />
      </div>
    </div>
  `,
  styleUrls: ['./home-content.scss'],
})
export class HomeContent {

}
