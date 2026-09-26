"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { ConversionResult, CurrencyOption } from "@/types/api";

interface UseCurrencyReturn {
  result: ConversionResult | null;
  currencies: CurrencyOption[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  convert: (amount: number, from: string, to: string, date?: string) => void;
  retry: () => void;
}

export function useCurrency(): UseCurrencyReturn {
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [currencies, setCurrencies] = useState<CurrencyOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const lastRequest = useRef<{ amount: number; from: string; to: string; date?: string } | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Load currencies once on mount via our own API route
  useEffect(() => {
    let cancelled = false;
    async function fetchCurrencies() {
      try {
        const res = await fetch("/api/currency/currencies");
        if (!res.ok) return;
        const data: Record<string, string> = await res.json();
        if (!cancelled) {
          setCurrencies(
            Object.entries(data).map(([code, name]) => ({ code, name }))
          );
        }
      } catch {
        // Silently fail — the dropdown will just show the popular currencies
      }
    }
    fetchCurrencies();
    return () => { cancelled = true; };
  }, []);

  const convert = useCallback(
    (amount: number, from: string, to: string, date?: string) => {
      if (!from || !to || from === to || amount <= 0) {
        setResult({
          convertedAmount: from === to ? amount : 0,
          rate: from === to ? 1 : 0,
          fromCurrency: from,
          toCurrency: to,
          amount,
          date: date || new Date().toISOString().slice(0, 10),
        });
        setError(null);
        return;
      }

      lastRequest.current = { amount, from, to, date };

      // Abort previous in-flight request
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      setError(null);

      const endpoint = date || "latest";
      const url = `/api/currency?endpoint=${encodeURIComponent(endpoint)}&amount=${amount}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

      fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((body) => {
              throw new Error(body.error || `API error: ${res.status}`);
            });
          }
          return res.json();
        })
        .then((data) => {
          if (controller.signal.aborted) return;
          const rate = data.rates[to];
          if (rate === undefined) {
            throw new Error(`Currency "${to}" is not supported.`);
          }
          setResult({
            convertedAmount: rate,
            rate: rate / amount,
            fromCurrency: from,
            toCurrency: to,
            amount,
            date: data.date,
          });
          setLastUpdated(new Date());
          setLoading(false);
          import("@/lib/analytics").then(({ trackCurrencyConversion }) => {
            trackCurrencyConversion(from, to);
          });
        })
        .catch((err) => {
          if (err instanceof DOMException && err.name === "AbortError") return;
          if (controller.signal.aborted) return;
          
          import("@/lib/logger").then((m) => {
            if (err.message?.includes("timeout") || err.name === "TimeoutError") {
              m.logger.timeoutError("Frankfurter Currency API");
            } else {
              m.logger.apiError(url, err);
            }
          });

          setError(err.message || "Failed to convert currency. Please try again.");
          setLoading(false);
        });
    },
    []
  );

  const retry = useCallback(() => {
    if (lastRequest.current) {
      const { amount, from, to, date } = lastRequest.current;
      convert(amount, from, to, date);
    }
  }, [convert]);

  return { result, currencies, loading, error, lastUpdated, convert, retry };
}
