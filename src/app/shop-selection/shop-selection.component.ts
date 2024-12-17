import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShopService } from '../services/shop.service';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'app-shop-selection',
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  templateUrl: './shop-selection.component.html',
})
export class ShopSelectionComponent {
  private pizzaService = inject(PizzasService);
  private shopService = inject(ShopService);
  protected shopList = this.shopService.getShopList();

  constructor() {
    this.pizzaService.clearCart();
  }
}
