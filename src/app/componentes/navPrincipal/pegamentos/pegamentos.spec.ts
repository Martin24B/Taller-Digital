import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pegamentos } from './pegamentos';

describe('Pegamentos', () => {
  let component: Pegamentos;
  let fixture: ComponentFixture<Pegamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pegamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pegamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
