import { computed, inject, Injectable, signal } from '@angular/core';
import { ScrollerStore } from '../store/scroller.store';

@Injectable({
  providedIn: 'root',
})
export class ScrollerTargetService {
  private scrollerStore = inject(ScrollerStore);
  
  readonly elementsList = signal<Map<string, HTMLElement>>(new Map());

  register(id: string, element: HTMLElement) {
    this.scrollerStore.register(id, element);
  }

  unregister(id: string) {
    this.scrollerStore.unregister(id);
  }

  scrollTo(target: string) {
    const targetEl = this.scrollerStore.selectTarget(target);
    console.log(targetEl);
    if (!targetEl){
      console.warn(`Target element with id "${target}" not found in global list.`);
      return;
    } 
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }

}
