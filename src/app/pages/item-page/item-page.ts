import { Component, inject, computed, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Item } from '../../services/item';
import { Cart } from 'src/app/services/cart';
import { CartButton } from 'src/app/components/buttons/cart-button/cart-button';
import { ShovableBtn } from 'src/app/components/buttons/shovable-btn/shovable-btn';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item-page',
  imports: [CartButton, ShovableBtn, MatIconModule],
  template: `
    <div class="the-item">
      <img />
      <div class="the-details">
        <div class="the-images">
          <div class="carousel-wrapper" #carouselWrapper>
            <div class="carousel-track">
              @for (img of images(); track $index) {
                <img [src]="img" />
              }
            </div>
          </div>
        </div>
        <div class="the-left">
          <div class="the-important">
            <div class="the-title">
              <div class="title-and-sku">
              <h1>{{ theItem().title }}</h1>
                @if (theItem().sku) {
                  <h3>{{ theItem().sku }} items left</h3>
                } @else {
                  <h3>Out of Stock</h3>
                }
              </div>
              <h2>{{ theItem().description }}</h2>
            </div>
            <div class="details">
              <div class="above-cart">
                <h3 class="font-bold">$ {{ theItem().price }}</h3>
                <div class="cart-stuff">
                  <div class="count">
                    <app-shovable-btn (btnClick)="itemService.decrementItem()"><mat-icon>remove</mat-icon></app-shovable-btn>
                    <h2>{{ theItem().count }}</h2>
                    <app-shovable-btn (btnClick)="itemService.incrementItem()"><mat-icon>add</mat-icon></app-shovable-btn>
                  </div>
                </div>
              </div>
              <app-cart-button width='item' label='Add to Cart' (btnClicked)="cartService.addToCart(theItem())" />
            </div>
          </div>
          <div class="the-descriptors">
            <h2>Material</h2>
            <h2>Care</h2>
            <h2>Shipping</h2>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./item-page.scss'],
})
export class ItemPage implements AfterViewInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef<HTMLDivElement>;

  itemService = inject(Item);
  cartService = inject(Cart);
  theItem = this.itemService.itemSignal;
  
  images = computed(() => {
    const item = this.theItem();
    return [
      item.imageURL,
      item.imageURL,
      item.imageURL,
      item.imageURL,
      item.imageURL
    ];
  });

  ngAfterViewInit() {
    // Ensure carousel is properly initialized
  }

  scrollLeft() {
    if (this.carouselWrapper) {
      const scrollAmount = this.carouselWrapper.nativeElement.clientWidth * 0.8;
      this.carouselWrapper.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  scrollRight() {
    if (this.carouselWrapper) {
      const scrollAmount = this.carouselWrapper.nativeElement.clientWidth * 0.8;
      this.carouselWrapper.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
