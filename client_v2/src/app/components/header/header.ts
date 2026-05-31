import { Component, inject } from '@angular/core';
import { ScrollerTargetService } from '../../directives/scroller-target/services/scroller-target';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected scroller = inject(ScrollerTargetService);
}
