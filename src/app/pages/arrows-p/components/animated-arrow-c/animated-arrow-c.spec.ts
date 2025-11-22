import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArrowC } from './animated-arrow-c';

describe('AnimatedArrowC', () => {
  let component: AnimatedArrowC;
  let fixture: ComponentFixture<AnimatedArrowC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedArrowC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedArrowC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
