import { Component, effect, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CalculatedCartPizza } from '../../types/calculated-cart-pizza.interface';
import { PizzasService } from '../../services/pizzas.service';
import { Router } from '@angular/router';
import { Shop } from '../../types/shop.interface';

@Component({
  selector: 'app-confirm-order',
  imports: [MatButtonModule],
  templateUrl: './confirm-order.component.html',
})
export class ConfirmOrderComponent {
  private pizzaService = inject(PizzasService);
  private router = inject(Router);

  public selectedShop = input<Shop>();
  public cartPizzas = input<CalculatedCartPizza[]>();

  public confirmOrder() {
    const confirmedOrdersRaw = localStorage.getItem('confirmedOrders');

    if (confirmedOrdersRaw) {
      const confirmedOrders = JSON.parse(confirmedOrdersRaw);

      localStorage.setItem(
        'confirmedOrders',
        JSON.stringify([
          ...confirmedOrders,
          { pizzas: this.cartPizzas(), shop: this.selectedShop() },
        ])
      );
    } else {
      localStorage.setItem(
        'confirmedOrders',
        JSON.stringify([
          { pizzas: this.cartPizzas(), shop: this.selectedShop() },
        ])
      );
    }

    this.pizzaService.clearCart();
    this.router.navigate(['/']);
  }
}
