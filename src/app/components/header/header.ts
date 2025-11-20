import { Component, ViewChild, ElementRef } from '@angular/core';
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
          <app-primary-button label='Profile' routerLink="/login"/>        
        </ul>
        @if (!showSearch) {
          <ul class="shovable-btnList" #shovableRef>
            <app-shovable-btn (btnClick)='clickHandler()'>
              <mat-icon #searchRef>search</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn>
              <mat-icon>bookmark</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn>
              <mat-icon>shopping_cart</mat-icon>
            </app-shovable-btn>
          </ul>
        }
        @if (showSearch) {
          <div id="search-bar" class="flex flex-row items-center h-[2rem]">
            <input type='search' placeholder="search" class="h-[100%] w-[80%] border-black border-2 rounded-lg text-lg" />
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

  showSearch = false;

  clickHandler() {
    this.showSearch = true;
  }

  closeHandler() {
    this.showSearch = false;
  }

}
