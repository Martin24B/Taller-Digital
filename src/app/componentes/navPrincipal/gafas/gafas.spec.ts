import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gafas } from './gafas';

describe('Gafas', () => {
  let component: Gafas;
  let fixture: ComponentFixture<Gafas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gafas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gafas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
