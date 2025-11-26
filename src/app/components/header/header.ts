import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../buttons/primary-button/primary-button";
import { ShovableBtn } from '../buttons/shovable-btn/shovable-btn';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, ShovableBtn, MatIconModule, RouterLink],
  template: `
    <div id="header" class="bg-[#f5f5f4] rounded-lg flex flex-row items-center justify-between">
      <img routerLink='/' src="../../assets/tk-logo-removebg-preview.png" alt="TK-Logo"/>
      <div class="by-btns flex flex-row items-center">
        <ul class="primary-btnList">
          <app-primary-button label='Catalog' routerLink="/catalog" effect="header" />
          <app-primary-button label='Contact' routerLink="/contact" effect="header" />
          <app-primary-button label='Profile' routerLink="/login" effect="header" />        
        </ul>
        @if (!showSearch()) {
          <ul class="shovable-btnList" #shovableRef>
            <app-shovable-btn (btnClick)='clickHandler()'>
              <mat-icon #searchRef>search</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn>
              <mat-icon>bookmark</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn routerLink="/cart">
              <mat-icon>shopping_cart</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn class="lg:hidden">
              <mat-icon>menu</mat-icon>
            </app-shovable-btn>
          </ul>
        }
        @if (showSearch()) {
          <div id="search-bar" class="flex flex-row items-center h-[2rem]">
            <input type='search' placeholder="search" class="h-[100%] w-[80%] border-black border-2 rounded-lg text-lg px-2" />
            <app-shovable-btn (btnClick)='closeHandler()' class="hover:cursor-pointer hover:opacity-50 ease-in-out">
              <mat-icon>close</mat-icon>
            </app-shovable-btn>
          </div>  
        }
      </div>
    </div>
  `,
  styleUrls: ['./header.scss'],
})
export class Header {

  showSearch = signal(false);

  clickHandler() {
    this.showSearch.set(true);
  }

  closeHandler() {
    this.showSearch.set(false);
  }

}
