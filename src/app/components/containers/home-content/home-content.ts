import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface HeroSlide {
  image: string;
  category: string;
  title?: string;
  subtitle?: string;
  link: string;
}

@Component({
  selector: 'app-home-content',
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('600ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div 
      class="hero-carousel"
      (mouseenter)="pauseAutoPlay()"
      (mouseleave)="resumeAutoPlay()"
    >
      <div class="carousel-container">
        <button
          class="arrow arrow--prev"
          type="button"
          aria-label="Previous image"
          (click)="prevImage()"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div class="slide-wrapper">
          <div class="slide-content" [@fadeAnimation]="currentIndex">
            <img
              [src]="currentSlide.image"
              [alt]="currentSlide.category"
              class="hero-image"
            />
            <div class="slide-overlay">
              <div class="overlay-content">
                <p class="category-label">{{ currentSlide.category }}</p>
                @if (currentSlide.title) {
                  <h2 class="slide-title">{{ currentSlide.title }}</h2>
                }
                @if (currentSlide.subtitle) {
                  <p class="slide-subtitle">{{ currentSlide.subtitle }}</p>
                }
                <a [routerLink]="currentSlide.link" class="view-all-btn">
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          class="arrow arrow--next"
          type="button"
          aria-label="Next image"
          (click)="nextImage()"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        
        <div class="page-indicators">
          @for (slide of slides; track $index) {
            <button
              class="indicator-dot"
              [class.active]="$index === currentIndex"
              (click)="goToImage($index)"
              [attr.aria-label]="'Go to slide ' + ($index + 1)"
              type="button"
            ></button>
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home-content.scss'],
})
export class HomeContent implements OnInit, OnDestroy {
  slides: HeroSlide[] = [
    {
      image: '/assets/background.png',
      category: 'NEW IN',
      link: '/catalog'
    },
    {
      image: '/assets/background.png',
      category: 'COLLECTION',
      title: 'Discover Your Style',
      link: '/catalog'
    },
    {
      image: '/assets/background.png',
      category: 'TRENDING NOW',
      subtitle: 'Shop the latest trends',
      link: '/catalog'
    },
  ];

  currentIndex = 0;
  private autoPlayInterval: any;
  private readonly AUTO_PLAY_DELAY = 5000; // 5 seconds

  get currentSlide(): HeroSlide {
    return this.slides[this.currentIndex];
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
    this.restartAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, this.AUTO_PLAY_DELAY);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  pauseAutoPlay(): void {
    this.stopAutoPlay();
  }

  resumeAutoPlay(): void {
    this.startAutoPlay();
  }

  restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
