import { Component, signal } from '@angular/core';
import { Slide } from "../slide/slide";
import { RevealSectionDirective } from "../../../../directives/reveal-section/reveal-section";
import { ScrollerTargetDirective } from "../../../../directives/scroller-target/scroller-target";

@Component({
  selector: 'app-testimonials-section',
  imports: [Slide, RevealSectionDirective, ScrollerTargetDirective],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.scss',
})
export class TestimonialsSection {

  sectionClasses = signal({
    'section': true,
    'section--hidden': false
  });

  slidesData = [
    {
      "header": "Best financial decision ever!",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      "author": {
        "name": "Aarav Lynn",
        "location": "San Francisco, USA",
        "photo": '/images/user-1.jpg'
      }
    },
    {
      "header": "The last step to becoming a complete minimalist",
      "text": "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
      "author": {
        "name": "Miyah Miles",
        "location": "London, UK",
        "photo": '/images/user-2.jpg'
      }
    },
    {
      "header": "Finally free from old-school banks",
      "text": "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
      "author": {
        "name": "Francisco Gomes",
        "location": "Lisbon, Portugal",
        "photo": '/images/user-3.jpg'
      }
    }
  ];

  maxSlides = this.slidesData.length;
  currentSlide = signal(0);



  nextSlide(): void {
    this.currentSlide.set(this.currentSlide() === this.maxSlides - 1 ? 0 : this.currentSlide() + 1);
  } 

  prevSlide(): void {
    this.currentSlide.set(this.currentSlide() === 0 ? this.maxSlides - 1 : this.currentSlide() - 1);
  }

  gotToSlide(slideIndex: number): void {
    this.currentSlide.set(slideIndex);
  }
}
