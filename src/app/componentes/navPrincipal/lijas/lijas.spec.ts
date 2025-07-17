import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lijas } from './lijas';

describe('Lijas', () => {
  let component: Lijas;
  let fixture: ComponentFixture<Lijas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lijas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lijas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
