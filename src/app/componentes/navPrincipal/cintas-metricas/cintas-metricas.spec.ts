import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CintasMetricas } from './cintas-metricas';

describe('CintasMetricas', () => {
  let component: CintasMetricas;
  let fixture: ComponentFixture<CintasMetricas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CintasMetricas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CintasMetricas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
