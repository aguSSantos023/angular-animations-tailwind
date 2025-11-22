import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStyleCreateGeminProC } from './btn-style-create-gemin-pro-c';

describe('BtnStyleCreateGeminProC', () => {
  let component: BtnStyleCreateGeminProC;
  let fixture: ComponentFixture<BtnStyleCreateGeminProC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnStyleCreateGeminProC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnStyleCreateGeminProC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
