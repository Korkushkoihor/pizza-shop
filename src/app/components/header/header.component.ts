import { Component, computed, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PizzasService } from '../../services/pizzas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private pizzasService = inject(PizzasService);
  protected selectedCount: Signal<number> = computed(
    () => this.pizzasService.getSelectedPizzas()().length
  );
}
