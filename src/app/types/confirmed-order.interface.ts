import { CalculatedCartPizza } from './calculated-cart-pizza.interface';
import { Shop } from './shop.interface';

export interface ConfirmedOrder {
  pizzas: CalculatedCartPizza[];
  shop: Shop;
}
