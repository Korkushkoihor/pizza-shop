import { Component, inject, input, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PizzasService } from '../../services/pizzas.service';
import { Pizza } from '../../types/pizza.interface';

@Component({
  selector: 'app-pizza-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pizza-item.component.html',
})
export class PizzaItemComponent {
  public pizza = input<Pizza>();
  protected pizzasService = inject(PizzasService);
}
