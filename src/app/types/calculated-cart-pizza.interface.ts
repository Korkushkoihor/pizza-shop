export interface CalculatedCartPizza {
  id: number;
  pizzaName: string;
  amount: number;
  haveTax: boolean;
  taxPrice?: number;
  subTotalPrice: number;
  totalPrice: number;
}
