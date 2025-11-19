import { Component } from '@angular/core';
import { PrimaryButton } from "../buttons/primary-button/primary-button";
import { ShovableBtn } from '../buttons/shovable-btn/shovable-btn';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, ShovableBtn, MatIconModule, RouterLink],
  template: `
    <div id="header" class="bg-[#f0f0f0] rounded-lg flex flex-row items-center justify-between">
      <img routerLink='/' src="../../assets/tk-logo-removebg-preview.png" alt="TK-Logo"/>
      <div class="by-btns flex flex-row items-center">
        <ul class="primary-btnList">
          <app-primary-button label='Catalog' />
          <app-primary-button label='Contact' />
          <app-primary-button label='Profile' />        
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
