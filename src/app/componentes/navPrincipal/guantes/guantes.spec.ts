import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guantes } from './guantes';

describe('Guantes', () => {
  let component: Guantes;
  let fixture: ComponentFixture<Guantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
