import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionYNivelacion } from './medicion-y-nivelacion';

describe('MedicionYNivelacion', () => {
  let component: MedicionYNivelacion;
  let fixture: ComponentFixture<MedicionYNivelacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicionYNivelacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicionYNivelacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
