import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proteccion } from './proteccion';

describe('Proteccion', () => {
  let component: Proteccion;
  let fixture: ComponentFixture<Proteccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proteccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proteccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
