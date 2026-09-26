import type { CurrencyRatesResponse, CurrencyOption } from "@/types/api";

const BASE_URL = "https://api.frankfurter.app";

/**
 * Fetch latest exchange rates from a base currency.
 * Server-side only — uses Next.js fetch caching (10 min).
 */
export async function getLatestRates(base: string): Promise<CurrencyRatesResponse> {
  const res = await fetch(`${BASE_URL}/latest?base=${encodeURIComponent(base)}`, {
    next: { revalidate: 600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch rates: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

/**
 * Convert a specific amount between two currencies using latest rates.
 * Server-side only — uses Next.js fetch caching (10 min).
 */
export async function convertCurrency(
  amount: number,
  from: string,
  to: string
): Promise<CurrencyRatesResponse> {
  const res = await fetch(
    `${BASE_URL}/latest?amount=${amount}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error(`Failed to convert: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

/**
 * Fetch historical exchange rates for a specific date.
 * Server-side only — historical data is cached for 24h.
 */
export async function getHistoricalRate(
  date: string,
  from: string,
  to: string,
  amount: number = 1
): Promise<CurrencyRatesResponse> {
  const res = await fetch(
    `${BASE_URL}/${date}?amount=${amount}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch historical rate: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

/**
 * Fetch all available currencies from the API.
 * Server-side only — cached for 24h.
 */
export async function getCurrencies(): Promise<CurrencyOption[]> {
  const res = await fetch(`${BASE_URL}/currencies`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch currencies: ${res.status} ${res.statusText}`);
  }
  const data: Record<string, string> = await res.json();
  return Object.entries(data).map(([code, name]) => ({ code, name }));
}
