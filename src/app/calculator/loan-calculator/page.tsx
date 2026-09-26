import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import { LoanCalculatorClient } from "./LoanCalculatorClient";

const title = "Free Loan Calculator | Calculate Monthly Payments & Interest";
const description = "Calculate your estimated monthly payments, total interest paid, and total cost of a loan using our free online loan calculator. Ideal for mortgages, auto loans, and personal loans.";
const path = "/calculator/loan-calculator";

export const metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "What is an amortization schedule?",
    answer: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term."
  },
  {
    question: "Can I use this for a mortgage or a car loan?",
    answer: "Yes! The core mathematical formula for most consumer loans—including auto loans, personal loans, and standard fixed-rate mortgages—is the same. Just enter your total loan amount, your annual interest rate, and the duration in years."
  },
  {
    question: "How is the monthly payment calculated?",
    answer: "The monthly payment is calculated using the standard amortization formula. It factors in the principal amount, the monthly interest rate (annual rate divided by 12), and the total number of monthly payments to ensure the loan balance reaches exactly zero by the final payment."
  },
  {
    question: "Why does the interest cost so much?",
    answer: "Interest is essentially the 'rent' you pay to the lender for borrowing their money over time. Because it compounds on the remaining balance, loans with longer durations or higher interest rates will result in significantly more total interest paid over the life of the loan."
  },
  {
    question: "Does this calculator include taxes, insurance, or fees?",
    answer: "No, this calculator provides the 'P&I' (Principal and Interest) payment. If you are calculating a mortgage, remember that property taxes, homeowners insurance, and HOA fees will likely be added to your actual monthly bill by your lender."
  },
  {
    question: "How can I reduce the total interest paid?",
    answer: "There are three main ways to reduce the total interest you pay: secure a lower interest rate, choose a shorter loan duration (which increases your monthly payment but decreases the timeline), or make extra principal payments each month."
  }
];

const content = (
  <>
    <h2>Plan Your Financial Future with Our Free Loan Calculator</h2>
    <p>
      Whether you are looking to buy a new house, finance a car, or take out a personal loan, understanding the true cost of borrowing is critical. The sticker price of a home or vehicle is never the final amount you pay when financing is involved. Our <strong>Free Loan Calculator</strong> allows you to instantly determine your monthly payments and see exactly how much you will pay in interest over the life of your loan.
    </p>

    <h3>How to Use the Loan Calculator</h3>
    <p>
      Getting an accurate picture of your potential debt only takes a few seconds. Here is how to use the calculator effectively:
    </p>
    <ol>
      <li><strong>Loan Amount (Principal):</strong> Enter the total amount of money you plan to borrow. If you are buying a $30,000 car and putting $5,000 down, your principal is $25,000.</li>
      <li><strong>Interest Rate:</strong> Enter the Annual Percentage Rate (APR) offered by your bank or lender. Even a fraction of a percent can make a massive difference over time.</li>
      <li><strong>Loan Duration:</strong> Adjust the slider to reflect the length of your loan in years. Standard auto loans are typically 3 to 7 years, while mortgages usually span 15 to 30 years.</li>
    </ol>
    <p>
      As you input these numbers, the <em>Payment Summary</em> and visual breakdown chart will update in real time. You will immediately see your required monthly payment, the total amount of interest you will pay, and the grand total cost of the loan.
    </p>

    <h3>Understanding the Amortization Formula</h3>
    <p>
      How does a bank determine your monthly payment? Consumer loans typically use an amortization formula that ensures you pay off the principal and all accrued interest in equal monthly installments by the end of the term.
    </p>
    <p>
      The mathematical formula used by our calculator is:
      <br />
      <code>M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]</code>
    </p>
    <ul>
      <li><strong>M</strong> = Total monthly payment</li>
      <li><strong>P</strong> = The principal loan amount</li>
      <li><strong>i</strong> = Your monthly interest rate (your annual rate divided by 12)</li>
      <li><strong>n</strong> = Number of payments (the number of years multiplied by 12)</li>
    </ul>
    <p>
      Because calculating this by hand is tedious and prone to error, our online tool handles the heavy lifting, giving you instant financial clarity.
    </p>

    <h3>The Impact of Loan Duration</h3>
    <p>
      One of the most important decisions when taking out a loan is choosing the term length. It is tempting to choose a longer loan duration because it significantly lowers your required monthly payment. However, it is vital to look at the "Total Interest Paid" metric on our calculator.
    </p>
    <p>
      For example, a $300,000 mortgage at a 5% interest rate over 30 years results in a monthly payment of about $1,610, but you will pay over $279,000 in interest over three decades. If you switch to a 15-year term, your monthly payment jumps to $2,372, but your total interest paid drops to roughly $127,000. That is a savings of over $150,000 simply by changing the loan duration!
    </p>

    <h3>Visualizing Your Debt</h3>
    <p>
      Numbers alone can sometimes be difficult to grasp, which is why our calculator includes a dynamic payment breakdown chart. This visualization highlights the ratio of principal to interest. When interest rates are high or loan terms are long, you will notice the interest slice of the pie chart becoming alarmingly large. This visual aid is designed to help you make informed, responsible financial decisions before signing any paperwork.
    </p>

    <h3>Why Trust Our Calculator?</h3>
    <p>
      Our Loan Calculator is completely free, requires no sign-ups, and performs all calculations privately in your browser. Whether you are at a car dealership negotiating a price or sitting at your kitchen table planning a home purchase, this mobile-friendly tool is ready to provide fast, unbiased numbers you can trust.
    </p>
    <p>
      Bookmark this page and use it whenever you need to evaluate a financial offer. A few seconds of calculation today can save you thousands of dollars tomorrow.
    </p>
  </>
);

export default function LoanCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Loan Calculator",
        "url": `https://tasklora.com${path}`,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "description": description,
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
            "item": "https://tasklora.com"
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
            "name": "Loan Calculator",
            "item": `https://tasklora.com${path}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ToolLayout
        title={title}
        description={description}
        path={path}
        content={content}
        faqs={faqs}
      >
        <LoanCalculatorClient />
      </ToolLayout>
    </>
  );
}
