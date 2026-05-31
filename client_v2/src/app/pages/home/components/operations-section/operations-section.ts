import { Component, signal } from '@angular/core';
import { RevealSectionDirective } from '../../../../directives/reveal-section/reveal-section';
import { ScrollerTargetDirective } from "../../../../directives/scroller-target/scroller-target";

@Component({
  selector: 'app-operations-section',
  imports: [RevealSectionDirective, ScrollerTargetDirective],
  templateUrl: './operations-section.html',
  styleUrl: './operations-section.scss',
})
export class OperationsSection {
  sectionClasses = signal({
    'section': true,
    'section--hidden': false
  });

  operation = signal<'transfers' | 'loans' | 'closing'>('transfers');

  handleOperationContent(content: 'transfers' | 'loans' | 'closing'): void {
    switch (content) {
      case 'transfers':
        this.operation.set('transfers');
        break;
    
      case 'loans':
        this.operation.set('loans');
        break;
    
      case 'closing':
        this.operation.set('closing');
        break;
    }
  }
}
