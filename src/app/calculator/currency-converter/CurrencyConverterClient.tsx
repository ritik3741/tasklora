"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useCurrency } from "@/hooks/useCurrency";
import { CopyButton } from "@/components/tools/CopyButton";
import {
  ArrowRightLeft, Clock, Wifi, WifiOff, RefreshCw, CalendarDays, Zap
} from "lucide-react";

const POPULAR_CURRENCIES = [
  { code: "USD", flag: "🇺🇸" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "GBP", flag: "🇬🇧" },
  { code: "INR", flag: "🇮🇳" },
  { code: "JPY", flag: "🇯🇵" },
  { code: "AUD", flag: "🇦🇺" },
  { code: "CAD", flag: "🇨🇦" },
  { code: "CHF", flag: "🇨🇭" },
];

export function CurrencyConverterClient() {
  const { result, currencies, loading, error, lastUpdated, convert, retry } = useCurrency();

  const [amount, setAmount] = useState(1000);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [date, setDate] = useState("");
  const [swapping, setSwapping] = useState(false);

  // Debounced conversion
  useEffect(() => {
    const timer = setTimeout(() => {
      convert(amount, from, to, date || undefined);
    }, 300);
    return () => clearTimeout(timer);
  }, [amount, from, to, date, convert]);

  const handleSwap = useCallback(() => {
    setSwapping(true);
    setFrom(to);
    setTo(from);
    setTimeout(() => setSwapping(false), 400);
  }, [from, to]);

  const handlePopularPair = useCallback((fromCode: string, toCode: string) => {
    setFrom(fromCode);
    setTo(toCode);
  }, []);

  const currencyOptions = useMemo(() => {
    if (currencies.length > 0) return currencies;
    return POPULAR_CURRENCIES.map(c => ({ code: c.code, name: c.code }));
  }, [currencies]);

  const rateDisplay = result
    ? `1 ${from} = ${result.rate.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 6 })} ${to}`
    : "";

  const convertedDisplay = result
    ? result.convertedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : "—";

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <div className="space-y-8">
      {/* LIVE Badge */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live Rates
        </span>
        {lastUpdated && (
          <span className="text-xs text-text/50 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Updated {lastUpdated.toLocaleTimeString()}
          </span>
        )}
      </div>

      {/* Main converter card */}
      <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
        {/* Amount input */}
        <div className="space-y-2">
          <label htmlFor="amount" className="block text-sm font-medium text-text">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            min={0}
            className="w-full h-14 rounded-xl border border-border bg-background text-text text-2xl font-bold px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
            aria-label="Amount to convert"
          />
        </div>

        {/* From / Swap / To row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
          {/* From */}
          <div className="flex-1 space-y-2">
            <label htmlFor="from-currency" className="block text-sm font-medium text-text">From</label>
            <select
              id="from-currency"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full h-12 rounded-xl border border-border bg-background text-text px-4 font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              aria-label="Source currency"
            >
              {currencyOptions.map(c => (
                <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
              ))}
            </select>
          </div>

          {/* Swap */}
          <button
            onClick={handleSwap}
            className={`self-center sm:self-end p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all shrink-0 ${swapping ? "rotate-180" : ""}`}
            style={{ transition: "transform 0.4s ease, background 0.2s ease" }}
            aria-label="Swap currencies"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>

          {/* To */}
          <div className="flex-1 space-y-2">
            <label htmlFor="to-currency" className="block text-sm font-medium text-text">To</label>
            <select
              id="to-currency"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full h-12 rounded-xl border border-border bg-background text-text px-4 font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              aria-label="Target currency"
            >
              {currencyOptions.map(c => (
                <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Historical date picker */}
        <div className="space-y-2">
          <label htmlFor="date-picker" className="block text-sm font-medium text-text flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-text/50" />
            Historical Date <span className="text-text/40 font-normal">(optional)</span>
          </label>
          <div className="flex gap-2">
            <input
              id="date-picker"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={todayStr}
              min="1999-01-04"
              className="flex-1 h-12 rounded-xl border border-border bg-background text-text px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              aria-label="Date for historical conversion"
            />
            {date && (
              <button
                onClick={() => setDate("")}
                className="px-4 h-12 rounded-xl border border-border bg-background text-text/60 hover:text-text hover:border-primary/50 transition-colors text-sm font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Result card */}
      <div
        className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm"
        aria-live="polite"
        aria-atomic="true"
      >
        {error ? (
          <div className="text-center py-4 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-2">
              <WifiOff className="w-6 h-6" />
            </div>
            <p className="text-red-500 font-medium">{error}</p>
            <button
              onClick={retry}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        ) : loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-10 bg-border/50 rounded-lg w-3/4"></div>
            <div className="h-6 bg-border/50 rounded-lg w-1/2"></div>
            <div className="h-4 bg-border/50 rounded-lg w-1/3"></div>
          </div>
        ) : result ? (
          <div className="space-y-4">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl md:text-5xl font-black text-text tracking-tight">
                {convertedDisplay}
              </span>
              <span className="text-2xl font-bold text-primary">{to}</span>
            </div>

            <div className="flex items-center gap-2 text-text/60 text-sm">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="font-mono">{rateDisplay}</span>
            </div>

            {result.date && (
              <div className="text-xs text-text/40">
                Rate date: {result.date}
                {date ? " (historical)" : " (latest)"}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <CopyButton text={`${convertedDisplay} ${to}`} label="Copy Result" />
              <CopyButton text={rateDisplay} label="Copy Rate" variant="ghost" />
            </div>
          </div>
        ) : (
          <div className="text-center text-text/50 py-4 flex items-center justify-center gap-2">
            <Wifi className="w-5 h-5" />
            Enter an amount to see live conversion.
          </div>
        )}
      </div>

      {/* Popular currency shortcuts */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-text/60 uppercase tracking-wider">Popular Conversions</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { f: "USD", t: "INR" }, { f: "USD", t: "EUR" }, { f: "GBP", t: "USD" },
            { f: "EUR", t: "GBP" }, { f: "USD", t: "JPY" }, { f: "AUD", t: "USD" },
            { f: "USD", t: "CAD" }, { f: "EUR", t: "INR" },
          ].map(pair => (
            <button
              key={`${pair.f}-${pair.t}`}
              onClick={() => handlePopularPair(pair.f, pair.t)}
              className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                from === pair.f && to === pair.t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-text/70 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {pair.f} → {pair.t}
            </button>
          ))}
        </div>
      </div>

      {/* Exchange rate info card */}
      {result && !error && (
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 text-sm text-text/70 flex items-start gap-3">
          <Wifi className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-text">Powered by Frankfurter API</strong>
            <p className="mt-1">
              Exchange rates are sourced from the European Central Bank and updated daily on business days.
              Rates are cached for 10 minutes for optimal performance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
