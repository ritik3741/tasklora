import React from 'react';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { generateSEO } from '@/lib/seo';
import SIPCalculatorClient from './SIPCalculatorClient';

export const metadata = generateSEO({
  title: "SIP Calculator - Mutual Fund Returns Calculator",
  description: "Calculate the future value of your Systematic Investment Plan (SIP) investments with our free online SIP calculator. Plan your mutual fund investments accurately.",
  path: "/calculator/sip-calculator",
});

const faqs = [
  {
    question: "What is a SIP?",
    answer: "SIP stands for Systematic Investment Plan. It is a method of investing in mutual funds where you invest a fixed amount regularly (e.g., monthly) instead of making a single lump sum investment."
  },
  {
    question: "How is SIP return calculated?",
    answer: "SIP returns are typically calculated using the compound interest formula. The formula factors in the monthly investment amount, the expected rate of return (annualized), and the investment duration."
  },
  {
    question: "Can I stop my SIP anytime?",
    answer: "Yes, SIPs are highly flexible. You can pause, stop, or modify your SIP amount at any time without paying any penalty to the mutual fund house."
  },
  {
    question: "What is the best date for SIP?",
    answer: "There is no 'best' date to invest. Over a long period, the date of your SIP makes little to no difference in your returns. It's best to choose a date shortly after you receive your salary."
  },
  {
    question: "Is SIP better than lump sum?",
    answer: "SIPs help in rupee cost averaging, meaning you buy more units when markets are down and fewer when markets are up. It reduces market timing risk compared to lump sum investing."
  },
  {
    question: "How much minimum amount can I invest in SIP?",
    answer: "Most mutual fund houses allow you to start a SIP with an amount as low as ₹100 or ₹500 per month, making it accessible for almost everyone."
  }
];

export default function SIPCalculatorPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SIP Calculator",
      "url": "https://tasklora.com/calculator/sip-calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "description": "Calculate the future value of your Systematic Investment Plan (SIP) investments.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
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
          "name": "SIP Calculator",
          "item": "https://tasklora.com/calculator/sip-calculator"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ];

  const content = (
    <div className="space-y-6">
      <h2>Understanding the SIP Calculator</h2>
      <p>
        Investing in mutual funds through a Systematic Investment Plan (SIP) is one of the most effective ways to build wealth over time. Our <strong>SIP Calculator</strong> is designed to help you estimate the future value of your monthly investments. Whether you're planning for retirement, saving for a house, or simply looking to grow your wealth, knowing the potential returns can help you make informed financial decisions.
      </p>

      <h3>How Does the SIP Calculator Work?</h3>
      <p>
        The SIP Calculator uses the compound interest formula to project your potential wealth over a chosen time period. By inputting your monthly investment amount, expected rate of return, and the number of years you plan to invest, the calculator instantly computes your total invested amount, the estimated wealth gained, and the total maturity value.
      </p>

      <h3>The SIP Formula Explained</h3>
      <p>
        The mathematical formula used by the SIP Calculator is:
      </p>
      <div className="bg-surface p-4 rounded-lg my-4 text-center font-mono">
        M = P × [((1 + i)^n - 1) / i] × (1 + i)
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>M</strong> = Maturity amount or expected future value</li>
        <li><strong>P</strong> = Monthly SIP amount</li>
        <li><strong>i</strong> = Monthly interest rate (Annual rate of return / 12 / 100)</li>
        <li><strong>n</strong> = Total number of payments (Years × 12)</li>
      </ul>
      <p>
        Because mutual funds compound returns, the formula accounts for the fact that each monthly installment earns returns for a different duration. The first installment earns returns for the entire investment period, while the last installment earns returns for just one month.
      </p>

      <h3>Step-by-Step Guide to Using the Calculator</h3>
      <p>
        Using our SIP Calculator is incredibly simple. Follow these steps to estimate your mutual fund returns:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Enter your monthly investment amount:</strong> Use the input field or slider to select the amount you plan to invest each month.</li>
        <li><strong>Set the expected rate of return:</strong> Choose a realistic annual return rate based on historical mutual fund performance (typically between 10% to 15% for equity funds).</li>
        <li><strong>Select your investment tenure:</strong> Input the number of years you plan to continue your SIP.</li>
        <li><strong>View your results:</strong> The calculator will instantly display a detailed breakdown, including the total amount you will invest, the wealth you are expected to gain, and the final maturity value. A visual chart will also help you compare your investment against the returns generated.</li>
      </ol>

      <h3>Benefits of Investing via SIP</h3>
      <p>
        SIPs offer multiple advantages that make them a preferred choice for investors:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Rupee Cost Averaging:</strong> You buy more units when the market is low and fewer when it is high, which averages out your cost per unit over time.</li>
        <li><strong>Power of Compounding:</strong> By reinvesting your returns, you earn returns on your returns, accelerating wealth creation.</li>
        <li><strong>Financial Discipline:</strong> A fixed amount is automatically deducted from your account every month, ensuring regular savings.</li>
        <li><strong>Flexibility:</strong> You can start with a small amount, pause, or increase your SIP as your income grows.</li>
      </ul>

      <p>
        Start planning your financial future today with our highly accurate SIP Calculator. By simulating different scenarios, you can set realistic financial goals and find the perfect investment strategy that fits your budget.
      </p>
    </div>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ToolLayout
        title="SIP Calculator"
        description="Calculate the future value of your Systematic Investment Plan (SIP) investments with our free online SIP calculator."
        path="/calculator/sip-calculator"
        content={content}
        faqs={faqs}
      >
        <SIPCalculatorClient />
      </ToolLayout>
    </>
  );
}
