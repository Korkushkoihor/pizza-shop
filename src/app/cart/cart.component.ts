import { Component, inject, Signal } from '@angular/core';
import { PizzasService } from '../services/pizzas.service';
import { Pizza } from '../types/pizza.interface';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private pizzaService = inject(PizzasService);
  protected pizzas: Signal<Pizza[]> = this.pizzaService.getSelectedPizzas();
}
