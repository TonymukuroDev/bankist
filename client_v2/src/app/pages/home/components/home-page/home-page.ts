import { Component } from '@angular/core';
import { Header } from "../../../../components/header/header";
import { FeaturesSection } from '../features-section/features-section';
import { OperationsSection } from '../operations-section/operations-section';
import { TestimonialsSection } from '../testimonials-section/testimonials-section';
import { SignupSection } from '../signup-section/signup-section';
import { ScrollerTargetService } from '../../../../directives/scroller-target/services/scroller-target';

@Component({
  selector: 'app-home-page',
  imports: [
    Header,
    FeaturesSection,
    OperationsSection,
    TestimonialsSection,
    SignupSection
  ],
  providers: [ScrollerTargetService],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
