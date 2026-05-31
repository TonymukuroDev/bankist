import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { ModalStore } from '../modal/store/modal.store';
import { ScrollerTargetService } from '../../directives/scroller-target/services/scroller-target';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  readonly store = inject(ModalStore);
  protected scroller = inject(ScrollerTargetService);
  protected readonly isSticky = signal(false);
  private navRef = viewChild<ElementRef<HTMLElement>>('nav');

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.navRef()) {
      this.isSticky.set(window.scrollY > this.navRef()!.nativeElement.getBoundingClientRect().height);
    }
  }
}
