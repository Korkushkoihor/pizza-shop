import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PizzasService } from '../services/pizzas.service';
import { MatIconModule } from '@angular/material/icon';
import { PizzaItemComponent } from '../components/pizza-item/pizza-item.component';

@Component({
  selector: 'app-pizza-selection',
  imports: [RouterLink, MatIconModule, PizzaItemComponent],
  templateUrl: './pizza-selection.component.html',
})
export class PizzaSelectionComponent {
  private route = inject(ActivatedRoute);
  protected pizzasService = inject(PizzasService);
  protected readonly pizzas = this.pizzasService.getPizzasPerShop(
    +this.route.snapshot.params['shopId']
  );
}
