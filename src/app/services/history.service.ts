import { Injectable } from '@angular/core';
import { ConfirmedOrder } from '../types/confirmed-order.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  public saveNewOrder(newOrder: ConfirmedOrder) {
    const confirmedOrdersRaw = localStorage.getItem('confirmedOrders');

    if (confirmedOrdersRaw) {
      const confirmedOrders = JSON.parse(confirmedOrdersRaw);

      localStorage.setItem(
        'confirmedOrders',
        JSON.stringify([...confirmedOrders, newOrder])
      );
    } else {
      localStorage.setItem('confirmedOrders', JSON.stringify([newOrder]));
    }
  }

  public getOrders(): ConfirmedOrder[] {
    const confirmedOrders = localStorage.getItem('confirmedOrders');
    if (confirmedOrders) {
      return JSON.parse(localStorage.getItem('confirmedOrders')!);
    } else {
      return [];
    }
  }
}
