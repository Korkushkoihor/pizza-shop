import { Component, inject } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { CartTableComponent } from "../components/cart-table/cart-table.component";

@Component({
  selector: 'app-history',
  imports: [CartTableComponent],
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  private historyService = inject(HistoryService);
  protected history = this.historyService.getOrders();
}
