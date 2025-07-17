import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suministros } from './suministros';

describe('Suministros', () => {
  let component: Suministros;
  let fixture: ComponentFixture<Suministros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suministros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suministros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
