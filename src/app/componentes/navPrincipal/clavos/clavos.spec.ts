import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clavos } from './clavos';

describe('Clavos', () => {
  let component: Clavos;
  let fixture: ComponentFixture<Clavos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clavos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clavos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
