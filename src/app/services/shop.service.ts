import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Shop } from '../types/shop.interface';

import _shopList from '../../../public/pizzerias.json';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shopFromStorage = localStorage.getItem('selectedShop')
    ? JSON.parse(localStorage.getItem('selectedShop')!)
    : null;
  private _selectedShop: WritableSignal<Shop | null> = signal(
    this.shopFromStorage
  );
  public selectedShop: Signal<Shop | null> = computed(() =>
    this._selectedShop()
  );
  public shopList = signal(_shopList as Shop[]);

  public selectShop(shop: Shop) {
    this._selectedShop.set(shop);

    localStorage.setItem('selectedShop', JSON.stringify(shop));
  }

  public clearSelectedShop() {
    this._selectedShop.set(null);

    localStorage.removeItem('selectedShop');
  }
}
