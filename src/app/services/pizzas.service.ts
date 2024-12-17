import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Pizza } from '../types/pizza.interface';

import pizzas from '../../../public/pizza_templates.json';
import { CalculatedCartPizza } from '../types/calculated-cart-pizza.interface';
import { Shop } from '../types/shop.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  private pizzasFromStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')!)
    : [];
  private _selectedPizzas: WritableSignal<Pizza[]> = signal(
    this.pizzasFromStorage
  );
  public selectedPizzas: Signal<Pizza[]> = computed(() =>
    this._selectedPizzas()
  );

  public addPizzaToCart(pizza: Pizza) {
    const currentPizzas: Pizza[] = this.selectedPizzas();

    const latestPizzas = [...currentPizzas, pizza];

    localStorage.setItem('cart', JSON.stringify(latestPizzas));

    this._selectedPizzas.set(latestPizzas);
  }

  public clearCart() {
    this._selectedPizzas.set([]);

    localStorage.removeItem('cart');
  }

  public getPizzasPerShop(shopId: number): Signal<Pizza[]> {
    const pizzaList: Pizza[] = (pizzas as Pizza[]).filter((_pizza: Pizza) =>
      _pizza.available_in_pizzerias.some(
        (_shopId: number) => _shopId === shopId
      )
    );

    return signal(pizzaList);
  }

  public calculateCartPizzas(
    pizzaList: Pizza[],
    selectedShop: Shop
  ): CalculatedCartPizza[] {
    const pizzaSet = new Map();
    const finalArray: CalculatedCartPizza[] = [];

    pizzaList.forEach((pizza: Pizza) => {
      let amount = pizzaSet.get(pizza.id);
      if (amount) {
        pizzaSet.set(pizza.id, ++amount);
      } else {
        pizzaSet.set(pizza.id, 1);
      }
    });

    for (const [key, value] of pizzaSet) {
      const onePizza = pizzaList.find((pizza: Pizza) => pizza.id === key);
      if (!onePizza) break;

      const subTotalPrice = +onePizza?.price! * +value;

      let taxPercentage = null;

      switch (selectedShop.country) {
        case 'UA':
          taxPercentage = onePizza['ua_tax_rate'];
          break;
        case 'US':
          taxPercentage = onePizza['us_tax_rate'];
          break;
        case 'NZ':
          taxPercentage = onePizza['nz_tax_rate'];
          break;
        case 'AU':
          taxPercentage = onePizza['au_tax_rate'];
          break;
      }

      let haveTax = !!taxPercentage;
      let taxPrice = haveTax ? (+taxPercentage! * subTotalPrice) / 100 : 0;

      finalArray.push({
        amount: value,
        id: onePizza?.id!,
        pizzaName: onePizza?.name!,
        subTotalPrice: subTotalPrice,
        totalPrice: haveTax ? taxPrice + subTotalPrice : subTotalPrice,
        haveTax: haveTax,
        taxPrice: taxPrice,
      });
    }

    return finalArray;
  }
}
