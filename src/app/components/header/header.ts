import { Component } from '@angular/core';
import { PrimaryButton } from "../buttons/primary-button/primary-button";
import { ShovableBtn } from '../buttons/shovable-btn/shovable-btn';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, ShovableBtn, MatIconModule],
  template: `
    <div id="header" class="bg-[#f0f0f0] rounded-lg flex flex-row items-center justify-between">
      <img src="https://thethousandknot.com/cdn/shop/files/TheThousandKnot-logo_110x@2x.png?v=1648111716" alt="TK-Logo"/>
      <div class="by-btns flex flex-row items-center">
        <ul class="primary-btnList">
          <app-primary-button label='Catalog' />
          <app-primary-button label='Contact' />
        </ul>
        <ul class="shovable-btnList">
        <app-shovable-btn><mat-icon>search</mat-icon></app-shovable-btn>
          <app-shovable-btn><mat-icon>bookmark</mat-icon></app-shovable-btn>
          <app-shovable-btn><mat-icon>shopping_cart</mat-icon></app-shovable-btn>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./header.scss'],
})
export class Header {

}
