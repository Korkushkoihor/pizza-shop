import { Injectable, signal, Signal } from '@angular/core';
import { Pizzeria } from '../types/pizzeria.interface';

import pizzerias from '../../../public/pizzerias.json';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public getShopList(): Signal<Pizzeria[]> {
    const shopList = pizzerias as Pizzeria[];

    return signal(shopList);
  }
}
