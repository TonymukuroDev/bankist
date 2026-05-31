import { Directive, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealSection]',
  standalone: true
})
export class RevealSectionDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private readonly element = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'section--hidden');

    const revealSection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        this.renderer.removeClass(entry.target, 'section--hidden');
        observer.unobserve(entry.target);
      });
    };

    this.observer = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
