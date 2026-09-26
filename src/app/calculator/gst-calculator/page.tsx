import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import { GSTClient } from "./GSTClient";

export const metadata = generateSEO({
  title: "GST Calculator - Calculate Goods and Services Tax",
  description: "Free online GST calculator to quickly calculate exclusive or inclusive GST amounts based on standard or custom tax rates.",
  path: "/calculator/gst-calculator",
});

const content = (
  <>
    <h2>What is a GST Calculator?</h2>
    <p>
      Our GST (Goods and Services Tax) Calculator is an easy-to-use tool designed to help you quickly determine the exact amount of tax you need to pay or the original price of a product before tax. Whether you are a business owner invoicing clients, a freelancer determining the correct tax, or a consumer wanting to know the base price of a good, this calculator simplifies the process.
    </p>
    
    <h2>How to Use the GST Calculator</h2>
    <p>Using the GST Calculator is extremely straightforward. Follow these simple steps:</p>
    <ol>
      <li><strong>Enter the Amount:</strong> Start by inputting the base amount or the total amount (depending on the calculation mode you choose).</li>
      <li><strong>Select GST Mode:</strong> Choose between "Exclusive" (adds GST to the base price) and "Inclusive" (extracts the GST amount from the total price).</li>
      <li><strong>Choose GST Rate:</strong> Select from standard GST rates (such as 3%, 5%, 12%, 18%, or 28%) or enter a custom rate using the slider.</li>
      <li><strong>View Results:</strong> The tool instantly calculates and displays the Original Amount, the GST Amount, and the Final Total Amount.</li>
    </ol>
    
    <h2>Formulas Explained</h2>
    <p>Understanding the math behind the calculations can be helpful if you want to verify the results manually.</p>
    
    <h3>GST Exclusive Calculation (Adding GST)</h3>
    <p>If you have the net price of a product and want to find the gross price (including tax):</p>
    <ul>
      <li><strong>GST Amount</strong> = (Net Price &times; GST Rate) / 100</li>
      <li><strong>Final Total</strong> = Net Price + GST Amount</li>
    </ul>
    
    <h3>GST Inclusive Calculation (Removing GST)</h3>
    <p>If you already have the total price and want to figure out how much of it was tax and what the original price was:</p>
    <ul>
      <li><strong>GST Amount</strong> = Total Price - (Total Price &times; [100 / (100 + GST Rate)])</li>
      <li><strong>Original Amount</strong> = Total Price - GST Amount</li>
    </ul>

    <h2>Who Can Benefit from This Tool?</h2>
    <p>
      This tool is ideal for accountants, small business owners, retailers, and even general consumers. By automating the GST calculations, you avoid manual errors that can occur during accounting, invoicing, or tax filing. Best of all, it handles both adding tax to a net price and extracting tax from a gross price with a simple click.
    </p>
  </>
);

const faqs = [
  {
    question: "What is GST?",
    answer: "GST stands for Goods and Services Tax. It is an indirect tax used in many countries on the supply of goods and services. It is a comprehensive, multi-stage, destination-based tax."
  },
  {
    question: "What is the difference between GST inclusive and exclusive?",
    answer: "GST inclusive means the price of the product or service already includes the tax amount. GST exclusive means the tax is not yet added to the base price, and you will need to add it to find the final cost."
  },
  {
    question: "How do I calculate 18% GST?",
    answer: "To add 18% GST to an amount, multiply the original amount by 0.18 to get the GST amount, then add it to the original. For inclusive amounts, divide the total by 1.18 to find the original amount."
  },
  {
    question: "Can I use custom GST rates?",
    answer: "Yes, our calculator allows you to toggle to a 'Custom Rate' where you can use a slider to set any percentage you need, making it versatile for different regional tax rates."
  },
  {
    question: "Is this GST calculator free to use?",
    answer: "Absolutely! The Tasklora GST calculator is 100% free to use with no hidden fees or registration required."
  },
  {
    question: "Does this tool store my financial data?",
    answer: "No, all calculations are performed locally in your browser. We do not store or transmit any of the amounts you enter."
  }
];

export default function GSTCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "GST Calculator",
        "url": "https://tasklora.com/calculator/gst-calculator",
        "description": "Free online GST calculator to easily add or remove Goods and Services Tax.",
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
            "name": "GST Calculator",
            "item": "https://tasklora.com/calculator/gst-calculator"
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
        title="GST Calculator"
        description="Easily calculate GST (Goods and Services Tax) with our free online tool. Support for exclusive and inclusive calculations with standard and custom rates."
        path="/calculator/gst-calculator"
        content={content}
        faqs={faqs}
      >
        <GSTClient />
      </ToolLayout>
    </>
  );
}
