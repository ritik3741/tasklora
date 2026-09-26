"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";

export function DiscountCalculatorClient() {
  const [originalPrice, setOriginalPrice] = useState<number>(100);
  const [discountPercent, setDiscountPercent] = useState<number>(20);
  const [additionalDiscount, setAdditionalDiscount] = useState<number>(0);
  const [taxPercent, setTaxPercent] = useState<number>(0);

  // Calculations
  const firstDiscountAmount = (originalPrice * discountPercent) / 100;
  const priceAfterFirstDiscount = originalPrice - firstDiscountAmount;
  const secondDiscountAmount = (priceAfterFirstDiscount * additionalDiscount) / 100;
  const totalDiscountAmount = firstDiscountAmount + secondDiscountAmount;
  const priceBeforeTax = originalPrice - totalDiscountAmount;
  const taxAmount = (priceBeforeTax * taxPercent) / 100;
  const finalPrice = priceBeforeTax + taxAmount;
  const savings = totalDiscountAmount;
  const effectiveDiscount = originalPrice > 0 ? (totalDiscountAmount / originalPrice) * 100 : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6 bg-surface p-6 rounded-2xl border border-border shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-text">Calculator Inputs</h3>
        
        <NumberInput
          label="Original Price"
          value={originalPrice || ""}
          onChange={(v) => setOriginalPrice(v)}
          prefix="$"
          min={0}
        />
        
        <RangeSlider
          label="Discount Percentage"
          value={discountPercent}
          min={0}
          max={100}
          onChange={(v) => setDiscountPercent(v)}
          suffix="%"
        />

        <RangeSlider
          label="Additional Discount (e.g. coupon)"
          value={additionalDiscount}
          min={0}
          max={100}
          onChange={(v) => setAdditionalDiscount(v)}
          suffix="%"
        />

        <NumberInput
          label="Tax Rate"
          value={taxPercent || ""}
          onChange={(v) => setTaxPercent(v)}
          suffix="%"
          min={0}
          max={100}
        />
      </div>

      <div className="space-y-6">
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-text">Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-text/70 font-medium">Original Price</span>
              <span className="text-lg text-text font-semibold">${originalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-green-600 font-medium">Total Savings</span>
              <span className="text-lg text-green-600 font-semibold">-${savings.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-text/70 font-medium">Tax</span>
              <span className="text-lg text-text font-semibold">+${taxAmount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <span className="text-xl font-bold text-text">Final Price</span>
              <span className="text-3xl font-bold text-primary">${finalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-text/70 mb-1">Effective Discount</h4>
            <p className="text-2xl font-bold text-primary">{effectiveDiscount.toFixed(2)}%</p>
          </div>
          <div className="h-12 w-px bg-border"></div>
          <div>
            <h4 className="text-sm font-medium text-text/70 mb-1">Price Before Tax</h4>
            <p className="text-2xl font-bold text-text">${priceBeforeTax.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
