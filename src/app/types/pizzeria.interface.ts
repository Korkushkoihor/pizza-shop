import { Country } from './country.type';

export interface Pizzeria {
  id: number;
  name: string;
  address: string;
  country: Country;
}
