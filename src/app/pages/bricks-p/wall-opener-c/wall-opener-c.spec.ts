import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallOpenerC } from './wall-opener-c';

describe('WallOpenerC', () => {
  let component: WallOpenerC;
  let fixture: ComponentFixture<WallOpenerC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallOpenerC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallOpenerC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
