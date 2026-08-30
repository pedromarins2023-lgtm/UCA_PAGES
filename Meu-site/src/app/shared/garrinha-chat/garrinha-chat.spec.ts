import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarrinhaChat } from './garrinha-chat';

describe('GarrinhaChat', () => {
  let component: GarrinhaChat;
  let fixture: ComponentFixture<GarrinhaChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarrinhaChat],
    }).compileComponents();

    fixture = TestBed.createComponent(GarrinhaChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
