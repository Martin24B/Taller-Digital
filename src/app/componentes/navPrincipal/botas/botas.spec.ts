import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botas } from './botas';

describe('Botas', () => {
  let component: Botas;
  let fixture: ComponentFixture<Botas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
