import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedBrickC } from './animated-brick-c';

const MOCK_BRICK_DATA = {
  delay: 0,
  direction: 'none',
  width: 50,
  height: 50
};

const MOCK_IS_OPENING = false;

describe('AnimatedBrickC', () => {
  let fixture: ComponentFixture<AnimatedBrickC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedBrickC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBrickC);

    fixture.componentRef.setInput('brickData', MOCK_BRICK_DATA);
    fixture.componentRef.setInput('isOpening', MOCK_IS_OPENING);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
