import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PercentageClient } from "./PercentageClient";

const title = "Percentage Calculator | Calculate Percentages Instantly";
const description = "Free online percentage calculator. Calculate X% of Y, what percentage X is of Y, and percentage increase or decrease easily with live updates.";
const path = "/calculator/percentage-calculator";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "How do I calculate what percentage one number is of another?",
    answer: "To calculate what percentage one number (X) is of another (Y), you simply divide X by Y and then multiply the result by 100. Our calculator does this instantly using the 'X is what % of Y?' mode."
  },
  {
    question: "How do I find the percentage of a number?",
    answer: "Finding the percentage of a number is easy. For example, to find 20% of 50, convert the percentage to a decimal (0.20) and multiply it by the number (50). The answer is 10. You can use the 'What is X% of Y?' tab in our tool."
  },
  {
    question: "What is percentage increase and decrease?",
    answer: "Percentage increase and decrease measures how much a value has changed compared to its original amount, expressed as a percentage. It is calculated by taking the difference between the new and old values, dividing by the old value, and multiplying by 100."
  },
  {
    question: "Can this calculator handle decimal numbers?",
    answer: "Yes, our percentage calculator fully supports decimal numbers. Whether your inputs have one decimal place or several, the calculator will process them accurately and give you precise results."
  },
  {
    question: "Is my data secure when using this tool?",
    answer: "Absolutely. This calculator runs entirely in your web browser using client-side scripts. No data is sent to our servers, ensuring your calculations remain completely private and secure."
  },
  {
    question: "Why are percentages important in daily life?",
    answer: "Percentages are widely used in daily life for things like calculating tips at restaurants, figuring out discounts during sales, determining tax amounts, and understanding interest rates on loans or savings accounts."
  }
];

export default function PercentageCalculatorPage() {
  const content = (
    <div className="space-y-6">
      <h2>Welcome to the Percentage Calculator</h2>
      <p>
        Navigating numbers can sometimes be tricky, especially when it comes to percentages. Whether you are a student working on math homework, a professional calculating business margins, or simply a shopper trying to figure out a store discount, our versatile <strong>Percentage Calculator</strong> is designed to make your life easier. With real-time updates and an intuitive interface, you can get instant results without breaking out a pen and paper.
      </p>
      
      <h3>Three Essential Modes for Every Scenario</h3>
      <p>
        We understand that percentage problems come in different forms. That is why our tool provides three distinct modes tailored to the most common types of percentage queries:
      </p>
      <ul>
        <li><strong>What is X% of Y?</strong> - Ideal for finding a specific portion of a total. For example, calculating a 15% tip on a $40 restaurant bill.</li>
        <li><strong>X is what % of Y?</strong> - Perfect for determining a score or a fraction. For example, if you scored 45 out of 60 on a test, you can quickly find out your percentage grade.</li>
        <li><strong>Percentage Change</strong> - Crucial for tracking growth or decline. It helps you see the percentage increase or decrease between an original value and a new value, like comparing last year's sales to this year's.</li>
      </ul>

      <h3>Understanding the Formulas Behind the Calculations</h3>
      <p>
        While our calculator does the heavy lifting for you, it is always empowering to understand the math behind the magic. Here are the core formulas we use:
      </p>
      <p>
        <strong>1. Finding X% of Y:</strong><br />
        Formula: <code>(X / 100) × Y</code><br />
        By dividing the percentage by 100, you convert it into a decimal. Multiplying that decimal by the total value gives you the portion.
      </p>
      <p>
        <strong>2. Finding what percentage X is of Y:</strong><br />
        Formula: <code>(X / Y) × 100</code><br />
        This formula creates a fraction of the two numbers and converts that fraction into a percentage by multiplying by 100.
      </p>
      <p>
        <strong>3. Finding Percentage Increase or Decrease:</strong><br />
        Formula: <code>((New Value - Original Value) / Original Value) × 100</code><br />
        A positive result indicates a percentage increase, while a negative result points to a percentage decrease.
      </p>

      <h3>Step-by-Step Guide on How to Use the Tool</h3>
      <p>
        Using our percentage calculator is straightforward and fast. Follow these simple steps to get your answers in seconds:
      </p>
      <ol>
        <li><strong>Select the Mode:</strong> Look at the top of the calculator and choose the tab that matches your problem. You can choose "What is X% of Y?", "X is what % of Y?", or "% Change".</li>
        <li><strong>Enter Value X:</strong> In the first input field, type in your first number. Depending on your mode, this could be the percentage, the part, or the original value.</li>
        <li><strong>Enter Value Y:</strong> In the second input field, type in your second number. This might be the total value or the new value.</li>
        <li><strong>View Instant Results:</strong> As soon as you enter the numbers, the calculator will automatically process them and display the final result in the highlighted box below. There is no need to click a "Calculate" button!</li>
      </ol>

      <h3>Real-World Applications</h3>
      <p>
        Percentages are not just abstract mathematical concepts; they are deeply ingrained in our everyday lives. Here are just a few scenarios where this calculator proves invaluable:
      </p>
      <ul>
        <li><strong>Finance and Investing:</strong> Calculate return on investment (ROI), interest rates, and profit margins quickly to make informed financial decisions.</li>
        <li><strong>Shopping and Discounts:</strong> Ever stood in a store wondering how much an item costs after a 30% discount? Or figuring out sales tax? This tool gives you the exact price instantly.</li>
        <li><strong>Health and Fitness:</strong> Track your progress by calculating the percentage of weight lost or muscle gained over a specific period.</li>
        <li><strong>Education:</strong> Students and teachers can use it to calculate test scores, attendance rates, and grading curves.</li>
      </ul>

      <h3>Why Choose Our Percentage Calculator?</h3>
      <p>
        Our tool is built with user experience in mind. It is 100% free, requires no downloads or sign-ups, and operates entirely within your browser. Because the logic is executed client-side, your data never leaves your device, ensuring complete privacy. Furthermore, its responsive design means it works flawlessly on desktops, tablets, and mobile phones, making it the perfect pocket companion for math on the go.
      </p>
      <p>
        Whether you are analyzing complex data sets or just trying to split a bill, having a reliable percentage calculator at your fingertips saves time and reduces errors. Bookmark this page and simplify your math today!
      </p>
    </div>
  );

  const breadcrumbSchema = {
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
        "name": "Percentage Calculator",
        "item": `https://tasklora.com${path}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Percentage Calculator",
    "url": `https://tasklora.com${path}`,
    "description": description,
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      <ToolLayout
        title="Percentage Calculator"
        description={description}
        path={path}
        content={content}
        faqs={faqs}
      >
        <PercentageClient />
      </ToolLayout>
    </>
  );
}
