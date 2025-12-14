import { Component, signal, computed, ViewChild, ElementRef, HostListener, inject, Input } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { PrimaryButton } from "../buttons/primary-button/primary-button";
import { ShovableBtn } from '../buttons/shovable-btn/shovable-btn';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, ShovableBtn, MatIconModule, RouterLink, CommonModule],
  template: `
    <div id="header" [ngClass]="{'header-not-fixed': isHomePage() || headerClass}" class="bg-[#f5f5f4] flex flex-row items-center justify-between">
      <div class="left">
        <app-shovable-btn (btnClick)="menuHandler()" where="header">
          <mat-icon id="menu-btn">menu</mat-icon>
        </app-shovable-btn>
        <img routerLink='/' src="../../assets/tk-logo-removebg-preview.png" alt="TK-Logo"/> 
      </div>
      <ul class="menu text-left" #menuRef [class.open]="menuOpen()">
        <app-primary-button label='Catalog' routerLink="/catalog" effect="header" />
        <app-primary-button label='Contact' routerLink="/contact" effect="header" />
        <app-primary-button label='New Collection' effect="header" />
        <app-primary-button label='Matching Sets' effect="header" />
      </ul> 
      <div class="by-btns flex flex-row items-center">
          <ul class="shovable-btnList" #shovableRef>
            <div class="search flex flex-row gap-1 items-center mr-3">
              <input type="search" placeholder="search" />
              <mat-icon>search</mat-icon>
            </div>
            <app-shovable-btn>
              <mat-icon>bookmark</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn routerLink="/cart">
              <mat-icon>shopping_cart</mat-icon>
            </app-shovable-btn>
            <app-shovable-btn routerLink="/profile/login">
              <mat-icon>person</mat-icon>
            </app-shovable-btn>
          </ul> 
      </div>
    </div>
  `,
  styleUrls: ['./header.scss'],
})
export class Header {

  router = inject(Router);

  @Input() headerClass: string | boolean = false;

  @ViewChild('menuRef') menuRef!: ElementRef<HTMLUListElement>

  menuOpen = signal(false);
  isHomePage = signal(false);

  constructor() {
    // Check initial route
    this.checkIfHomePage();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.url)
      )
      .subscribe(() => {
        this.menuOpen.set(false);
        document.body.classList.remove('no-scroll');
        this.checkIfHomePage();
      })
  }

  private checkIfHomePage(): void {
    this.isHomePage.set(this.router.url === '/' || this.router.url === '/home');
  }

  menuHandler() {
    this.menuOpen.set(!this.menuOpen());
    document.body.classList.toggle('no-scroll', this.menuOpen());
  }

  @HostListener('document:click', ['$event'])
  outsideHandler(event: Event) {
    const target = event.target as HTMLElement;
    const mElement = this.menuRef.nativeElement;

    if (this.menuOpen() && !mElement.contains(target) && !target.closest('#menu-btn')) {
      this.menuOpen.set(false);
      document.body.classList.remove('no-scroll');
    }
  }

}
