import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import { DiscountCalculatorClient } from "./DiscountCalculatorClient";

const title = "Free Discount Calculator | Calculate Savings & Final Price Online";
const description = "Easily calculate the final price after discounts, including multiple discounts and taxes. Find out your exact savings and effective discount rate instantly.";
const path = "/calculator/discount-calculator";

export const metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "How do you calculate a discount?",
    answer: "To calculate a discount, multiply the original price by the discount percentage (in decimal form). Then subtract that amount from the original price to get the final price."
  },
  {
    question: "What is an additional discount or 'double discount'?",
    answer: "An additional discount occurs when a second discount is applied to the already discounted price, not the original price. Our calculator handles this automatically by applying the second percentage to the new subtotal."
  },
  {
    question: "How does tax affect the final discounted price?",
    answer: "Sales tax is usually applied to the price after all discounts have been deducted. Our calculator subtracts all discounts first, then calculates the tax based on that reduced amount to give you the true final price."
  },
  {
    question: "What is an effective discount rate?",
    answer: "The effective discount rate is the actual percentage you save on the original price after multiple discounts are applied. Since additional discounts are taken from a lower subtotal, the effective rate is always lower than simply adding the percentages together."
  },
  {
    question: "Is this discount calculator free to use?",
    answer: "Yes, our discount calculator is 100% free to use. It works directly in your browser with no registration or downloads required."
  },
  {
    question: "Can I use this calculator for retail markdowns?",
    answer: "Absolutely. Whether you are a shopper trying to figure out a sale price, or a retailer calculating markdowns for your inventory, this tool provides quick and accurate pricing data."
  }
];

const content = (
  <>
    <h2>Calculate Your Savings Instantly with Our Free Discount Calculator</h2>
    <p>
      Whether you are shopping for the holidays, looking at Black Friday deals, or managing retail inventory, knowing exactly how much you will pay—and save—is essential. Our <strong>Free Discount Calculator</strong> is a versatile online tool designed to make complex price calculations simple, fast, and completely free.
    </p>

    <h3>How to Use the Discount Calculator</h3>
    <p>
      Using our calculator is incredibly straightforward. Follow these simple steps to find your final price and total savings:
    </p>
    <ol>
      <li><strong>Enter the Original Price:</strong> Start by typing in the base price of the item before any discounts or taxes are applied.</li>
      <li><strong>Set the Discount Percentage:</strong> Use the slider or type the first discount percentage. The tool will instantly calculate the initial savings.</li>
      <li><strong>Apply Additional Discounts:</strong> If you have a coupon code or an extra store discount, enter it in the "Additional Discount" field. The calculator automatically applies this to the newly reduced price, not the original price.</li>
      <li><strong>Include Sales Tax (Optional):</strong> Enter your local sales tax rate to see the final, out-the-door price you'll pay at the register.</li>
    </ol>
    <p>
      As you adjust any of these values, the summary panel updates in real-time, displaying your total savings, the effective discount rate, the tax amount, and the absolute final price.
    </p>

    <h3>Understanding the Discount Formula</h3>
    <p>
      Calculating a single discount is easy, but what happens when you stack discounts or add taxes? Here is a breakdown of the math our tool handles behind the scenes:
    </p>
    <ul>
      <li><strong>First Discount:</strong> <code>Original Price × (Discount % ÷ 100)</code></li>
      <li><strong>Price After First Discount:</strong> <code>Original Price - First Discount Amount</code></li>
      <li><strong>Additional Discount:</strong> <code>Price After First Discount × (Additional Discount % ÷ 100)</code></li>
      <li><strong>Total Savings:</strong> <code>First Discount Amount + Additional Discount Amount</code></li>
      <li><strong>Final Price Before Tax:</strong> <code>Original Price - Total Savings</code></li>
      <li><strong>Tax Amount:</strong> <code>Final Price Before Tax × (Tax Rate % ÷ 100)</code></li>
      <li><strong>Final Price:</strong> <code>Final Price Before Tax + Tax Amount</code></li>
    </ul>

    <h3>The Trap of "Double Discounts"</h3>
    <p>
      A common misconception in retail is that a 20% off sale plus an extra 10% off coupon equals 30% off. In reality, the second discount applies to the <em>already reduced price</em>. 
    </p>
    <p>
      For example, a $100 item at 20% off becomes $80. An extra 10% off takes $8 off the $80, bringing the final price to $72. Your total savings are $28, meaning your <strong>effective discount rate</strong> is 28%, not 30%. Our calculator includes an "Effective Discount" metric so you never get tricked by retail math again.
    </p>

    <h3>Why Use Our Online Discount Calculator?</h3>
    <p>
      There are plenty of ways to calculate discounts, including mental math or a basic phone calculator. However, our specialized web tool offers several advantages:
    </p>
    <ul>
      <li><strong>Speed and Convenience:</strong> Real-time updates mean you don't have to keep pressing the equals button. Just move the sliders and see the results.</li>
      <li><strong>Accuracy:</strong> Avoid mistakes with stacked percentages and tax calculations.</li>
      <li><strong>Privacy-Focused:</strong> All calculations happen directly in your browser. No data is sent to our servers.</li>
      <li><strong>Mobile-Friendly:</strong> The responsive design works flawlessly on your smartphone while you're standing in the store aisle.</li>
    </ul>
    
    <p>
      Start maximizing your savings today by bookmarking this page. Whether you're calculating a quick 15% off or dealing with complex retail pricing structures involving taxes and multiple coupons, this tool provides the accurate answers you need in seconds.
    </p>
  </>
);

export default function DiscountCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Discount Calculator",
        "url": `https://tasklora.com${path}`,
        "applicationCategory": "UtilityApplication",
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
            "name": "Discount Calculator",
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
        <DiscountCalculatorClient />
      </ToolLayout>
    </>
  );
}
