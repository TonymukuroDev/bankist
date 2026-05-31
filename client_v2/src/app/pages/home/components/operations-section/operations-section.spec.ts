import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsSection } from './operations-section';

describe('OperationsSection', () => {
  let component: OperationsSection;
  let fixture: ComponentFixture<OperationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
