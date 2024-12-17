import { Component, OnInit } from '@angular/core';
import pizzas from '../../../public/pizza_templates.json';
import { Pizza } from '../types/pizza.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-selection',
  imports: [CommonModule, RouterLink],
  templateUrl: './pizza-selection.component.html',
  styleUrl: './pizza-selection.component.scss',
})
export class PizzaSelectionComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPizzasForShop(+this.route.snapshot.params['shopId']);
  }

  private getPizzasForShop(shopId: number) {
    this.pizzas = (pizzas as Pizza[]).filter((_pizza: Pizza) =>
      _pizza.available_in_pizzerias.some(
        (_shopId: number) => _shopId === shopId
      )
    );
  }
}
