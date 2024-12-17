import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaSelectionComponent } from './pizzeria-selection.component';

describe('PizzeriaSelectionComponent', () => {
  let component: PizzeriaSelectionComponent;
  let fixture: ComponentFixture<PizzeriaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzeriaSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeriaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
