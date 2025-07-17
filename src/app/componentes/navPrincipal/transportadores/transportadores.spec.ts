import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transportadores } from './transportadores';

describe('Transportadores', () => {
  let component: Transportadores;
  let fixture: ComponentFixture<Transportadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transportadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
