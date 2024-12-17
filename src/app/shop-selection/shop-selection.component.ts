import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShopService } from '../services/shop.service';
import { PizzasService } from '../services/pizzas.service';
import { Shop } from '../types/shop.interface';

@Component({
  selector: 'app-shop-selection',
  imports: [RouterModule, MatButtonModule, MatCardModule],
  templateUrl: './shop-selection.component.html',
})
export class ShopSelectionComponent {
  private pizzaService = inject(PizzasService);
  private shopService = inject(ShopService);
  private router = inject(Router);
  protected shopList = this.shopService.shopList;

  constructor() {
    this.pizzaService.clearCart();
    this.shopService.clearSelectedShop();
  }

  public handleClickOrder(shop: Shop) {
    this.shopService.selectShop(shop);
    this.router.navigate(['shop-list', shop.id]);
  }
}
