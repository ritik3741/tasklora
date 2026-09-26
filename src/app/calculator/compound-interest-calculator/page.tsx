import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CompoundInterestClient } from "./CompoundInterestClient";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Compound Interest Calculator | Free Financial Tool",
  description: "Calculate your investment growth over time with our free compound interest calculator. Find out how your money can grow with daily, monthly, or yearly compounding.",
  path: "/calculator/compound-interest-calculator",
});

const faqs = [
  {
    question: "What is compound interest?",
    answer: "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. It essentially means earning 'interest on interest'."
  },
  {
    question: "How does the frequency of compounding affect returns?",
    answer: "The more frequently interest is compounded, the higher the overall returns will be. For example, interest compounded daily will yield a slightly higher return than interest compounded annually on the same principal and at the same interest rate."
  },
  {
    question: "What is the formula for compound interest?",
    answer: "The formula is A = P(1 + r/n)^(nt), where A is the future value of the investment, P is the principal amount, r is the annual interest rate (in decimal), n is the number of times interest is compounded per year, and t is the time in years."
  },
  {
    question: "Is this calculator free to use?",
    answer: "Yes, this compound interest calculator is completely free to use. You do not need to sign up or provide any personal information."
  },
  {
    question: "Can I use this to calculate loan interest?",
    answer: "While this calculator is primarily designed for investments, you can technically use it to estimate the future value of a compound interest loan. However, most loans use a different amortization schedule."
  },
  {
    question: "What is a good interest rate for an investment?",
    answer: "A 'good' interest rate depends on your financial goals, risk tolerance, and current market conditions. Generally, a higher interest rate yields better returns, but it often comes with higher risk."
  }
];

const content = (
  <div className="space-y-6">
    <h2>Understanding Compound Interest</h2>
    <p>
      Compound interest is one of the most powerful concepts in finance. It allows your money to grow exponentially over time by earning interest not only on your initial principal but also on the accumulated interest from previous periods. This compounding effect can turn a modest investment into a substantial sum if given enough time.
    </p>
    <p>
      Whether you are saving for retirement, a down payment on a house, or simply building your wealth, understanding how compound interest works is essential for making informed financial decisions.
    </p>

    <h3>The Compound Interest Formula Explained</h3>
    <p>
      The mathematics behind compound interest can be expressed with a standard formula: <strong>A = P(1 + r/n)<sup>nt</sup></strong>
    </p>
    <ul>
      <li><strong>A (Future Value):</strong> This is the total amount of money you will have at the end of the investment period, including both your principal and the interest earned.</li>
      <li><strong>P (Principal):</strong> This is your initial investment or starting amount.</li>
      <li><strong>r (Annual Interest Rate):</strong> The yearly interest rate expressed as a decimal (e.g., 5% becomes 0.05).</li>
      <li><strong>n (Compounding Frequency):</strong> The number of times interest is compounded per year (e.g., 12 for monthly compounding).</li>
      <li><strong>t (Time):</strong> The number of years the money is invested or borrowed for.</li>
    </ul>

    <h3>How to Use Our Calculator</h3>
    <p>
      Our compound interest calculator is designed to be intuitive and easy to use. Follow these step-by-step instructions to estimate your investment's future value:
    </p>
    <ol>
      <li><strong>Enter the Principal Amount:</strong> Start by entering the initial amount of money you plan to invest or save.</li>
      <li><strong>Set the Interest Rate:</strong> Use the slider or the input field to specify the annual interest rate you expect to earn.</li>
      <li><strong>Choose the Time Period:</strong> Adjust the slider to reflect the number of years you plan to keep your money invested.</li>
      <li><strong>Select Compounding Frequency:</strong> Choose how often the interest will be compounded (daily, monthly, quarterly, semi-annually, or annually).</li>
      <li><strong>Review the Results:</strong> The calculator will instantly update to show your estimated Future Value, the Total Interest Earned, and a breakdown of your Total Principal.</li>
    </ol>
    <p>
      Experiment with different values to see how varying the interest rate, time period, or compounding frequency impacts your potential returns.
    </p>
  </div>
);

export default function CompoundInterestCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Compound Interest Calculator",
        "url": "https://tasklora.com/calculator/compound-interest-calculator",
        "description": "Calculate your investment growth over time with our free compound interest calculator.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All"
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
            "name": "Compound Interest Calculator",
            "item": "https://tasklora.com/calculator/compound-interest-calculator"
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
        title="Compound Interest Calculator"
        description="Calculate how your investments will grow over time with the power of compound interest."
        path="/calculator/compound-interest-calculator"
        content={content}
        faqs={faqs}
      >
        <CompoundInterestClient />
      </ToolLayout>
    </>
  );
}
