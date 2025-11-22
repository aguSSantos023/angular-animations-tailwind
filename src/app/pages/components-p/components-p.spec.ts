import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsP } from './components-p';

describe('ComponentsP', () => {
  let component: ComponentsP;
  let fixture: ComponentFixture<ComponentsP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
