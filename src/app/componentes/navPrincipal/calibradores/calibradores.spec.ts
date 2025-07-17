import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calibradores } from './calibradores';

describe('Calibradores', () => {
  let component: Calibradores;
  let fixture: ComponentFixture<Calibradores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calibradores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calibradores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
