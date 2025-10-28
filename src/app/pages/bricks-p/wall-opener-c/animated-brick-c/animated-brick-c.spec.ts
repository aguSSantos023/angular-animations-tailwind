import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBrickC } from './animated-brick-c';

describe('AnimatedBrickC', () => {
  let component: AnimatedBrickC;
  let fixture: ComponentFixture<AnimatedBrickC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedBrickC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBrickC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
