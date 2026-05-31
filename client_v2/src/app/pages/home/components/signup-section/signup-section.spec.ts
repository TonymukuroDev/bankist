import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSection } from './signup-section';

describe('SignupSection', () => {
  let component: SignupSection;
  let fixture: ComponentFixture<SignupSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSection],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
