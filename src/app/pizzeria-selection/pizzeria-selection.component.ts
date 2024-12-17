import { Component } from '@angular/core';
import pizzerias from '../../../public/pizzerias.json';
import { Pizzeria } from '../types/pizzeria.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pizzeria-selection',
  imports: [CommonModule, RouterModule],
  templateUrl: './pizzeria-selection.component.html',
  styleUrl: './pizzeria-selection.component.scss',
  standalone: true,
})
export class PizzeriaSelectionComponent {
  pizzerias: Pizzeria[] = pizzerias as Pizzeria[];
}
