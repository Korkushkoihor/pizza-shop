import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSelectionComponent } from './pizza-selection.component';

describe('PizzaSelectionComponent', () => {
  let component: PizzaSelectionComponent;
  let fixture: ComponentFixture<PizzaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
