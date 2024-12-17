import { Component, computed, inject, Signal } from '@angular/core';
import { PizzasService } from '../services/pizzas.service';
import { Pizza } from '../types/pizza.interface';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ShopService } from '../services/shop.service';
import { Shop } from '../types/shop.interface';
import { CalculatedCartPizza } from '../types/calculated-cart-pizza.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  private pizzaService = inject(PizzasService);
  private shopService = inject(ShopService);
  private router = inject(Router);
  protected selectedShop: Signal<Shop> = this.shopService
    .selectedShop as Signal<Shop>;
  protected cartPizzas: Signal<CalculatedCartPizza[]> = computed(() =>
    this.pizzaService.calculateCartPizzas(
      this.pizzaService.selectedPizzas(),
      this.selectedShop()
    )
  );
  protected finalPrice = computed(() => {
    let sum = 0;
    this.cartPizzas().forEach(
      (cartPizza: CalculatedCartPizza) => (sum += +cartPizza?.totalPrice)
    );
    return sum;
  });

  constructor() {
    if (!this.cartPizzas().length) {
      this.router.navigate(['/']);
    }
  }
}
