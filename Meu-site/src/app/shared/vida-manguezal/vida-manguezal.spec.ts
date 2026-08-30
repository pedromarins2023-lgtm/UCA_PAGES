import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VidaManguezal } from './vida-manguezal';

describe('VidaManguezal', () => {
  let component: VidaManguezal;
  let fixture: ComponentFixture<VidaManguezal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidaManguezal],
    }).compileComponents();

    fixture = TestBed.createComponent(VidaManguezal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
