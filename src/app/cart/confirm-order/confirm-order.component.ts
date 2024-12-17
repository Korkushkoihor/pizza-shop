import { Component, effect, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CalculatedCartPizza } from '../../types/calculated-cart-pizza.interface';
import { PizzasService } from '../../services/pizzas.service';
import { Router } from '@angular/router';
import { Shop } from '../../types/shop.interface';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-confirm-order',
  imports: [MatButtonModule],
  templateUrl: './confirm-order.component.html',
})
export class ConfirmOrderComponent {
  private pizzaService = inject(PizzasService);
  private router = inject(Router);
  private historyService = inject(HistoryService);

  public selectedShop = input<Shop>();
  public cartPizzas = input<CalculatedCartPizza[]>();

  public confirmOrder() {
    this.historyService.saveNewOrder({
      pizzas: this.cartPizzas()!,
      shop: this.selectedShop()!,
    });

    this.pizzaService.clearCart();
    this.router.navigate(['/']);
  }
}
