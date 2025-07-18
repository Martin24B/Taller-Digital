import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasIndustriales } from './herramientas-industriales.component';

describe('HerramientasIndustriales', () => {
  let component: HerramientasIndustriales;
  let fixture: ComponentFixture<HerramientasIndustriales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientasIndustriales],
    }).compileComponents();

    fixture = TestBed.createComponent(HerramientasIndustriales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
