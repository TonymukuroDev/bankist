import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.html',
  styleUrl: './slide.scss',
})
export class Slide {
  slide = input.required<{
    header: string,
    text: string,
    author: {
      name: string,
      location: string,
      photo: string
    }
  }>();

  slideIndex = input.required<number>();
  currentSlide = input.required<number>()
  author = computed(() => this.slide().author);
}
