import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Pizza } from '../types/pizza.interface';
import { Pizzeria } from '../types/pizzeria.interface';

import pizzas from '../../../public/pizza_templates.json';
import pizzerias from '../../../public/pizzerias.json';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  private selectedPizzas: WritableSignal<Pizza[]> = signal([]);

  public addPizzaToCart(pizza: Pizza) {
    const currentPizzas: Pizza[] = this.selectedPizzas();

    this.selectedPizzas.set([...currentPizzas, pizza]);
  }

  public clearCart() {
    this.selectedPizzas.set([]);
  }

  public getSelectedPizzas(): Signal<Pizza[]> {
    return this.selectedPizzas;
  }

  public getPizzasPerShop(shopId: number): Signal<Pizza[]> {
    const pizzaList: Pizza[] = (pizzas as Pizza[]).filter((_pizza: Pizza) =>
      _pizza.available_in_pizzerias.some(
        (_shopId: number) => _shopId === shopId
      )
    );

    return signal(pizzaList);
  }
}
