import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mascaras } from './mascaras';

describe('Mascaras', () => {
  let component: Mascaras;
  let fixture: ComponentFixture<Mascaras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mascaras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mascaras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
