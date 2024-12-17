import { Country } from './country.type';

export interface Shop {
  id: number;
  name: string;
  address: string;
  country: Country;
}
