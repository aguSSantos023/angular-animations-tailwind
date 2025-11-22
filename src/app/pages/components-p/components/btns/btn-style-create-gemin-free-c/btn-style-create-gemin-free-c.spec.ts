import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStyleCreateGeminFreeC } from './btn-style-create-gemin-free-c';

describe('BtnStyleCreateGeminFreeC', () => {
  let component: BtnStyleCreateGeminFreeC;
  let fixture: ComponentFixture<BtnStyleCreateGeminFreeC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnStyleCreateGeminFreeC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnStyleCreateGeminFreeC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
