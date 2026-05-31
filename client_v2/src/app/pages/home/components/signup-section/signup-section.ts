import { Component, inject, signal } from '@angular/core';
import { RevealSectionDirective } from "../../../../directives/reveal-section/reveal-section";
import { ModalStore } from '../../../../components/modal/store/modal.store';

@Component({
  selector: 'app-signup-section',
  imports: [RevealSectionDirective],
  templateUrl: './signup-section.html',
  styleUrl: './signup-section.scss',
})
export class SignupSection {
  readonly modalStore = inject(ModalStore);
  sectionClasses = signal({
    'section': true,
    'section--sign-up': true,
    'section--hidden': false
  });
}
