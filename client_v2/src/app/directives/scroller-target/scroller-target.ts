import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';
import { ScrollerTargetService } from './services/scroller-target';


@Directive({
  selector: '[appScroller]',
  standalone: true,
  providers: [ScrollerTargetService], // Сервис доступен только внутри этого DOM-поддерева
  exportAs: 'appScroller' // Позволяет получить доступ к методам в шаблоне
})
export class ScrollerDirective {
  public scrollerTargetService = inject(ScrollerTargetService);
}

@Directive({
  selector: '[appScrollerTarget]',
})
export class ScrollerTargetDirective implements OnInit, OnDestroy {
  id = input.required<string>({ alias: 'appScrollerTarget' });

  private elRef = inject(ElementRef);
  private scrollerTargetService = inject(ScrollerTargetService); // Находит сервис в родительских элементах

  ngOnInit() {
    console.log(this.id());
    
    this.scrollerTargetService.register(this.id(), this.elRef.nativeElement);
  }

  ngOnDestroy() {
    this.scrollerTargetService.unregister(this.id());
  }
}


