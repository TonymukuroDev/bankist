import { Component, signal } from '@angular/core';
import { RevealSectionDirective } from '../../../../directives/reveal-section/reveal-section';
import { ScrollerTargetDirective } from "../../../../directives/scroller-target/scroller-target";

@Component({
  selector: 'app-features-section',
  imports: [RevealSectionDirective, ScrollerTargetDirective],
  templateUrl: './features-section.html',
  styleUrl: './features-section.scss',
})
export class FeaturesSection {

  sectionClasses = signal({
    'section': true,
    'section--hidden': false
  })
}
