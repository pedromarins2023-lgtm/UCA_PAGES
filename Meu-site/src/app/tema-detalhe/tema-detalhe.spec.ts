import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemaDetalhe } from './tema-detalhe';

describe('TemaDetalhe', () => {
  let component: TemaDetalhe;
  let fixture: ComponentFixture<TemaDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(TemaDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
