import { Routes } from '@angular/router';

import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { PizzeriaSelectionComponent } from './pizzeria-selection/pizzeria-selection.component';

export const routes: Routes = [
  {
    path: 'shop-list',
    component: PizzeriaSelectionComponent,
  },
  {
    path: 'shop-list/:shopId',
    component: PizzaSelectionComponent,
  },
  { path: '', redirectTo: '/shop-list', pathMatch: 'full' },
];
