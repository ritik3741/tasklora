import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CurrencyConverterClient } from "./CurrencyConverterClient";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Live Currency Converter – Real-Time Exchange Rates",
  description: "Convert currencies using real-time exchange rates. Supports 170+ currencies, historical conversion, live rates, and instant calculations for free.",
  path: "/calculator/currency-converter",
});

const faqs = [
  {
    question: "Is the exchange rate live?",
    answer: "Yes. Our converter fetches real-time exchange rates from the Frankfurter API, which sources its data from the European Central Bank (ECB). Rates are updated every business day around 16:00 CET."
  },
  {
    question: "Which API is used?",
    answer: "We use the Frankfurter API (api.frankfurter.app), a free, open-source service that provides current and historical exchange rate data published by the European Central Bank."
  },
  {
    question: "How often are rates updated?",
    answer: "The European Central Bank publishes new reference rates every working day at around 16:00 CET. Our tool caches rates for 10 minutes to balance freshness with performance."
  },
  {
    question: "Can I convert historical currencies?",
    answer: "Yes! Use the optional date picker to select any date back to January 4, 1999. The converter will fetch the exact exchange rate from that specific date."
  },
  {
    question: "Does this require an API key?",
    answer: "No. The Frankfurter API is completely free and does not require any API key or authentication. There are no usage limits for normal usage."
  },
  {
    question: "Is my data stored?",
    answer: "No. Your conversion inputs are sent directly from your browser to the Frankfurter API. Tasklora does not store, log, or track any of your currency conversion data."
  }
];

const content = (
  <div className="space-y-6">
    <h2>Live Currency Converter</h2>
    <p>
      Our <strong>Live Currency Converter</strong> provides real-time exchange rates for over 170 world currencies. Powered by the Frankfurter API and sourced from the European Central Bank, you can trust the accuracy and reliability of every conversion.
    </p>
    <p>
      Whether you are a business owner calculating international invoices, a traveler planning your budget abroad, an investor monitoring foreign exchange movements, or a student studying global economics, this tool gives you instant, accurate results with zero sign-ups or fees.
    </p>

    <h3>How Exchange Rates Work</h3>
    <p>
      An exchange rate represents the value of one currency expressed in terms of another. For example, if the USD/EUR rate is 0.92, it means 1 US Dollar equals 0.92 Euros. Exchange rates fluctuate based on macroeconomic factors like interest rates, inflation, trade balances, and geopolitical events.
    </p>
    <p>
      The European Central Bank publishes reference rates every business day at approximately 16:00 CET. These rates serve as a trusted benchmark used by banks, financial institutions, and businesses across the globe.
    </p>

    <h3>The Conversion Formula</h3>
    <p>
      Currency conversion uses a straightforward formula:
    </p>
    <p>
      <strong>Converted Amount = Amount × Exchange Rate</strong>
    </p>
    <p>
      For example, to convert 1,000 USD to Indian Rupees at a rate of 83.50:<br/>
      1,000 × 83.50 = ₹83,500
    </p>

    <h3>How to Use This Converter</h3>
    <ol>
      <li><strong>Enter Amount:</strong> Type the amount you want to convert in the amount field.</li>
      <li><strong>Select Currencies:</strong> Choose your source and target currencies from the dropdown menus. Over 170 currencies are available.</li>
      <li><strong>View Results:</strong> The converted amount appears instantly with the current exchange rate and formula.</li>
      <li><strong>Historical Rates:</strong> Optionally, pick a date to see what the rate was on that specific day — useful for accounting and financial analysis.</li>
      <li><strong>Swap:</strong> Click the swap button to reverse the conversion direction instantly.</li>
    </ol>

    <h3>Features That Set Us Apart</h3>
    <ul>
      <li><strong>170+ Currencies:</strong> Convert between all major and many minor world currencies.</li>
      <li><strong>Historical Data:</strong> Access exchange rates dating back to January 1999.</li>
      <li><strong>Real-Time Updates:</strong> Rates sourced from the European Central Bank and cached intelligently.</li>
      <li><strong>No API Key Required:</strong> Completely free with no registration or authentication.</li>
      <li><strong>Privacy First:</strong> Your data is never stored or tracked by Tasklora.</li>
      <li><strong>Mobile Optimized:</strong> Full-featured experience on phones and tablets.</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li><strong>Confusing bid/ask rates:</strong> Our rates are ECB reference rates (mid-market). Banks and exchange bureaus add a margin on top.</li>
      <li><strong>Ignoring fees:</strong> When exchanging money in practice, always account for transaction fees and commissions.</li>
      <li><strong>Using weekend rates:</strong> ECB rates are only published on business days. Weekend and holiday rates reflect the last available business day.</li>
    </ul>
  </div>
);

export default function CurrencyConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Live Currency Converter",
        "url": "https://tasklora.com/calculator/currency-converter",
        "description": "Convert currencies using real-time exchange rates. Supports 170+ currencies, historical conversion, live rates, and instant calculations for free.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tasklora.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Calculator Tools",
            "item": "https://tasklora.com/calculator"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Live Currency Converter",
            "item": "https://tasklora.com/calculator/currency-converter"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="Live Currency Converter"
        description="Convert currencies using real-time exchange rates from the European Central Bank. Supports 170+ currencies and historical rates."
        path="/calculator/currency-converter"
        content={content}
        faqs={faqs}
      >
        <CurrencyConverterClient />
      </ToolLayout>
    </>
  );
}
