/** Types for the Frankfurter currency exchange API */

export interface CurrencyRatesResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface ConversionResult {
  convertedAmount: number;
  rate: number;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  date: string;
}

export interface CurrencyOption {
  code: string;
  name: string;
}
