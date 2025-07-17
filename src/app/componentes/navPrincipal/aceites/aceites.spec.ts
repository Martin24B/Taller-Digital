import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aceites } from './aceites';

describe('Aceites', () => {
  let component: Aceites;
  let fixture: ComponentFixture<Aceites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aceites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aceites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
