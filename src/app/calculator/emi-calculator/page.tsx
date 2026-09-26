import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import { EMIClient } from "./EMIClient";

export const metadata = generateSEO({
  title: "EMI Calculator - Calculate Loan Equated Monthly Installments",
  description: "Free online EMI Calculator to quickly find your Equated Monthly Installment for home loans, car loans, and personal loans.",
  path: "/calculator/emi-calculator",
});

const content = (
  <>
    <h2>What is an EMI Calculator?</h2>
    <p>
      Our EMI (Equated Monthly Installment) Calculator is a vital financial tool that helps you calculate the monthly amount payable to a lender (bank or financial institution) towards repayment of your loan. Whether you are planning to take a home loan, car loan, personal loan, or an education loan, knowing your EMI in advance empowers you to plan your monthly budget efficiently.
    </p>
    
    <h2>How to Use the EMI Calculator</h2>
    <p>Using our EMI calculator is simple and intuitive. You just need to follow these steps to get an accurate breakdown of your loan repayment:</p>
    <ol>
      <li><strong>Enter the Loan Amount:</strong> Input the total principal amount you intend to borrow.</li>
      <li><strong>Set the Interest Rate:</strong> Use the slider or type in the annual interest rate offered by your bank or lender.</li>
      <li><strong>Select the Tenure:</strong> Choose whether you want to specify your loan tenure in Years or Months, then set the duration of the loan.</li>
      <li><strong>Analyze the Results:</strong> The calculator instantly generates your Monthly EMI, Total Interest Payable, and Total Payment (Principal + Interest). It also provides a clear visual breakdown using a pie chart to help you understand the ratio of principal to interest.</li>
    </ol>
    
    <h2>The EMI Formula Explained</h2>
    <p>While the tool does all the heavy lifting, it is good to know the mathematical formula used to calculate EMIs. The standard formula is:</p>
    
    <p className="text-center font-mono bg-surface p-4 rounded-lg my-4 text-primary">
      E = P &times; r &times; (1 + r)^n / [(1 + r)^n - 1]
    </p>
    
    <p>Where:</p>
    <ul>
      <li><strong>E</strong> is the EMI (Equated Monthly Installment)</li>
      <li><strong>P</strong> is the Principal Loan Amount</li>
      <li><strong>r</strong> is the rate of interest calculated on a monthly basis (i.e., r = Annual interest rate / 12 / 100)</li>
      <li><strong>n</strong> is the loan tenure in months</li>
    </ul>

    <h2>Why is Calculating EMI Important?</h2>
    <p>
      Calculating your EMI before applying for a loan is crucial for several reasons. Firstly, it helps you assess your affordability; you can adjust the loan amount and tenure until you find an EMI that comfortably fits your monthly income and expenses. Secondly, it helps you compare different loan offers from various lenders to secure the lowest interest burden. Finally, it gives you a clear picture of the total interest outgo, allowing you to make informed decisions about whether a shorter or longer tenure is better for your financial health.
    </p>

    <h2>Common Use Cases for an EMI Calculator</h2>
    <ul>
      <li><strong>Home Loans:</strong> Buying a house is a long-term commitment. Use the calculator to see how different interest rates affect your 15 or 20-year payment plan.</li>
      <li><strong>Car Loans:</strong> Test out different vehicle prices and down payments to find a car loan EMI you can manage comfortably.</li>
      <li><strong>Personal Loans:</strong> Personal loans usually carry higher interest rates. The EMI calculator helps you understand exactly how much extra you are paying in interest.</li>
    </ul>
  </>
);

const faqs = [
  {
    question: "What is an Equated Monthly Installment (EMI)?",
    answer: "An EMI is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month, so that over a specified number of years, the loan is paid off in full."
  },
  {
    question: "How does the loan tenure affect my EMI?",
    answer: "A longer loan tenure means lower monthly EMIs, making it easier on your monthly budget, but it increases the total interest you will pay over the life of the loan. A shorter tenure increases the monthly EMI but significantly reduces the total interest paid."
  },
  {
    question: "Is the EMI calculator accurate for all types of loans?",
    answer: "Yes, this standard EMI calculator works accurately for most fixed-rate amortizing loans, including home loans, auto loans, and personal loans. However, if your loan has a variable interest rate, your actual EMI may fluctuate over time."
  },
  {
    question: "Does the EMI remain constant throughout the loan tenure?",
    answer: "For fixed-rate loans, the EMI remains constant throughout the entire tenure. However, the proportion of the EMI that goes towards the principal and interest changes over time. Initially, a larger portion goes to interest, but towards the end of the loan, a larger portion pays off the principal."
  },
  {
    question: "Can I use this calculator for reducing balance loans?",
    answer: "Yes! The formula used in this calculator automatically assumes a reducing balance method, which is the standard calculation method used by banks worldwide for EMIs."
  },
  {
    question: "Does this EMI calculator include processing fees?",
    answer: "No, this calculator strictly calculates the EMI based on the principal amount, interest rate, and tenure. Processing fees, insurance, or other lender charges are not included in this calculation."
  }
];

export default function EMICalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "EMI Calculator",
        "url": "https://tasklora.com/calculator/emi-calculator",
        "description": "Free online EMI calculator to quickly calculate your monthly loan installments.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any"
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
            "name": "EMI Calculator",
            "item": "https://tasklora.com/calculator/emi-calculator"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="EMI Calculator"
        description="Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans easily. Find out your total interest and payment schedule."
        path="/calculator/emi-calculator"
        content={content}
        faqs={faqs}
      >
        <EMIClient />
      </ToolLayout>
    </>
  );
}
