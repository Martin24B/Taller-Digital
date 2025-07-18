import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasManuales } from './herramientas-manuales.component';

describe('HerramientasManuales', () => {
  let component: HerramientasManuales;
  let fixture: ComponentFixture<HerramientasManuales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientasManuales],
    }).compileComponents();

    fixture = TestBed.createComponent(HerramientasManuales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
