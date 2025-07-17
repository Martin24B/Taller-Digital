import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidoresDistancia } from './medidores-distancia';

describe('MedidoresDistancia', () => {
  let component: MedidoresDistancia;
  let fixture: ComponentFixture<MedidoresDistancia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidoresDistancia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidoresDistancia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
