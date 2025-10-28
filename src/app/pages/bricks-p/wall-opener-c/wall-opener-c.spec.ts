import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WallOpenerC } from './wall-opener-c';
import { of } from 'rxjs';
import { ActivatedRoute, provideRouter } from '@angular/router';

const MOCK_WIDTH = 360;
const MOCK_HEIGHT = 640;

const HORIZONTAL_INCREMENT = 0.2;
const VERTICAL_INCREMENT = 0.05;

const MOCK_ACTIVATED_ROUTE = {
  snapshot: {}, // Propiedad mínima
  url: of([]),
  params: of({}),
  queryParams: of({})
};

describe('WallOpenerC', () => {
  let component: WallOpenerC;
  let fixture: ComponentFixture<WallOpenerC>;

  let mathRandomSpy: jest.SpyInstance;

  beforeEach(async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: MOCK_WIDTH });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: MOCK_HEIGHT });

    mathRandomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);

    await TestBed.configureTestingModule({
      imports: [WallOpenerC],
      providers: [
      { provide: ActivatedRoute, useValue: MOCK_ACTIVATED_ROUTE },
      provideRouter([])
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallOpenerC);
    component = fixture.componentInstance;
  });

  afterEach(() => {
      mathRandomSpy.mockRestore();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize isOpen signal to false', () => {
    expect(component.isOpen()).toBe(false);
  });

  it('should set isOpen to true after the initial delay', async () => {
    fixture.detectChanges();
    jest.useFakeTimers();
    jest.advanceTimersByTime(2000);
    fixture.detectChanges();
    expect(component.isOpen()).toBe(true);
    jest.useRealTimers();
  });

  it('should calculate rowSizes based on mock screen dimensions (360x640)', () => {
    const rowSizes = (component as any).generateRowSizes();

    expect(rowSizes.length).toBe(20);
    expect(rowSizes[0]).toBe(7);
    expect(rowSizes[1]).toBe(6);
    expect(rowSizes[19]).toBe(6);
  });

  it('should generate wall structure with correct total rows', () => {
    fixture.detectChanges();
    expect(component.wallStructure().length).toBe(20);
  });

  it('should assign correct direction and delay to center brick (r=10, i=3)', () => {
    fixture.detectChanges();
    const rows = component.wallStructure();

    const centralRow = rows[10].bricks;
    const centerBrick = centralRow[3];

    expect(centerBrick.direction).toBe('right');

    const expectedVerticalDelay = 0.5 * VERTICAL_INCREMENT;

    expect(centerBrick.delay).toBeCloseTo(expectedVerticalDelay, 3);
  });

  it('should assign correct direction and sequential delay to a corner brick', () => {
    fixture.detectChanges();
    const rows = component.wallStructure();

    const cornerRow = rows[0].bricks;
    const cornerBrick = cornerRow[6];

    expect(cornerBrick.direction).toBe('left');

    const expectedHorizontalDelay = 3 * HORIZONTAL_INCREMENT;
    const expectedVerticalDelay = 9.5 * VERTICAL_INCREMENT;
    const expectedTotalDelay = expectedHorizontalDelay + expectedVerticalDelay;

    expect(cornerBrick.delay).toBeCloseTo(expectedTotalDelay, 3);
  });

  it('should apply horizontal random delay when Math.random is low', () => {
    mathRandomSpy.mockReturnValue(0.1);

    fixture.detectChanges();
    const rows = component.wallStructure();

    const testBrick = rows[0].bricks[5];


    const expectedTotalDelay = 0.525;

    expect(testBrick.delay).toBeCloseTo(expectedTotalDelay, 3);
  });

});
