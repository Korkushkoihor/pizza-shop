import { Component, computed, input, output } from '@angular/core';
import { Shop } from '../../types/shop.interface';
import { CalculatedCartPizza } from '../../types/calculated-cart-pizza.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-table',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './cart-table.component.html',
})
export class CartTableComponent {
  public selectedShop = input<Shop>();
  public cartPizzas = input<CalculatedCartPizza[]>();
  public deletePizzasById = output<number>();

  protected finalPrice = computed(() => {
    let sum = 0;
    if (this.cartPizzas()) {
      this.cartPizzas()!.forEach(
        (cartPizza: CalculatedCartPizza) => (sum += +cartPizza?.totalPrice)
      );
    }
    return sum;
  });

  public deletePizza(pizza: CalculatedCartPizza) {
    this.deletePizzasById.emit(pizza.id);
  }
}
