import { Component, inject } from '@angular/core';
import { Pizza } from '../types/pizza.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'app-pizza-selection',
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pizza-selection.component.html',
})
export class PizzaSelectionComponent {
  private route = inject(ActivatedRoute);
  protected pizzasService = inject(PizzasService);
  protected readonly pizzas = this.pizzasService.getPizzasPerShop(
    +this.route.snapshot.params['shopId']
  );
}
