import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasElectricas } from './herramientas-electricas';

describe('HerramientasElectricas', () => {
  let component: HerramientasElectricas;
  let fixture: ComponentFixture<HerramientasElectricas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientasElectricas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientasElectricas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
