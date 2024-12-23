import { Routes } from '@angular/router';

import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { ShopSelectionComponent } from './shop-selection/shop-selection.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
  {
    path: 'shop-list',
    component: ShopSelectionComponent,
  },
  {
    path: 'shop-list/:shopId',
    component: PizzaSelectionComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  { path: '', redirectTo: '/shop-list', pathMatch: 'full' },
];
