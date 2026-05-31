import { Component, HostListener, inject } from '@angular/core';
import { ModalStore } from './store/modal.store';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  readonly store = inject(ModalStore);

  @HostListener('document:keydown.escape', [])
  onCloseModal():void {
    if (this.store.isOpen()) {
      this.store.onClose();
    }
  }
}
