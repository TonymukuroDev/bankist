import { TestBed } from '@angular/core/testing';

import { ScrollerTargetService } from './scroller-target';

describe('ScrollerTarget', () => {
  let service: ScrollerTargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollerTargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
