import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricksP } from './bricks-p';

describe('BricksP', () => {
  let component: BricksP;
  let fixture: ComponentFixture<BricksP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BricksP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricksP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
