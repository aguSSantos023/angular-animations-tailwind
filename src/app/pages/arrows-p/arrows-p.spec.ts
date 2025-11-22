import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsP } from './arrows-p';

describe('ArrowsP', () => {
  let component: ArrowsP;
  let fixture: ComponentFixture<ArrowsP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowsP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowsP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
