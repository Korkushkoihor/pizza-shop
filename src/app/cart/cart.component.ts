import { Component, computed, inject, Signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Shop } from '../types/shop.interface';
import { ShopService } from '../services/shop.service';
import { CartTableComponent } from '../components/cart-table/cart-table.component';
import { CalculatedCartPizza } from '../types/calculated-cart-pizza.interface';
import { PizzasService } from '../services/pizzas.service';
import { ConfirmOrderComponent } from "./confirm-order/confirm-order.component";

@Component({
  selector: 'app-cart',
  imports: [MatIconModule, RouterModule, MatButtonModule, CartTableComponent, ConfirmOrderComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  private shopService = inject(ShopService);
  private pizzaService = inject(PizzasService);
  private router = inject(Router);
  protected selectedShop: Signal<Shop> = this.shopService
    .selectedShop as Signal<Shop>;

  protected cartPizzas: Signal<CalculatedCartPizza[]> = computed(() =>
    this.pizzaService.calculateCartPizzas(
      this.pizzaService.selectedPizzas(),
      this.selectedShop()
    )
  );

  constructor() {
    if (!this.cartPizzas().length) {
      this.router.navigate(['/']);
    }
  }

  public deletePizzasById(id: number) {
    this.pizzaService.deletePizzasById(id);
  }
}
