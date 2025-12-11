import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home-content',
  imports: [CommonModule],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div class="display">
      <div class="img-wrap">
        <button
          class="arrow arrow--prev"
          type="button"
          aria-label="Previous image"
          (click)="prevImage()"
        >
          🡐
        </button>

        <img
          [src]="currentImage"
          [alt]="'Home banner ' + (currentIndex + 1)"
          [@fadeAnimation]="currentIndex"
        />

        <button
          class="arrow arrow--next"
          type="button"
          aria-label="Next image"
          (click)="nextImage()"
        >
          🡒
        </button>
      </div>
      <div class="page-indicators">
        <div
          *ngFor="let image of images; let i = index"
          class="indicator-bar"
          [class.active]="i === currentIndex"
          (click)="goToImage(i)"
          [attr.aria-label]="'Go to image ' + (i + 1)"
        ></div>
      </div>
    </div>
  `,
  styleUrls: ['./home-content.scss'],
})
export class HomeContent {
  images = [
    '/assets/background.png',
    '/assets/background.png',
    '/assets/background.png',
  ];

  currentIndex = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  get isFullscreen(): boolean {
    return this.currentIndex === 1;
  }

  get isSecondImage(): boolean {
    return this.currentIndex === 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }
}
