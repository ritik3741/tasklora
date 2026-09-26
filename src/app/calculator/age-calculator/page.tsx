import React from 'react';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { generateSEO } from '@/lib/seo';
import AgeCalculatorClient from './AgeCalculatorClient';

export const metadata = generateSEO({
  title: "Age Calculator - Calculate Exact Age in Years, Months, and Days",
  description: "Free online age calculator to find your exact chronological age in years, months, days, weeks, and hours. Also tells your next birthday and zodiac sign.",
  path: "/calculator/age-calculator",
});

const faqs = [
  {
    question: "How does the age calculator calculate my exact age?",
    answer: "The calculator takes your date of birth and subtracts it from the current date (or a specific 'Calculate Until' date). It accounts for leap years and varying days in months to give an exact breakdown in years, months, and days."
  },
  {
    question: "Does the calculator account for leap years?",
    answer: "Yes, our age calculator uses standard chronological calendar logic, meaning it automatically factors in leap years (like February having 29 days every four years) when determining total days."
  },
  {
    question: "Can I calculate a past or future age?",
    answer: "Absolutely. By changing the 'Calculate Until' date to a past or future date, you can determine how old you were on a historical event, or how old you will be in a future year."
  },
  {
    question: "Is my date of birth stored anywhere?",
    answer: "No, all calculations are performed entirely locally in your web browser. We do not store, send, or track any date of birth information entered into this tool."
  },
  {
    question: "Why do my total days and weeks differ from simple math?",
    answer: "Simple math (like multiplying years by 365) ignores leap years and specific month lengths. Our calculator counts the exact number of days between two calendar dates, making it significantly more accurate."
  },
  {
    question: "Can this determine my Zodiac sign?",
    answer: "Yes, once you enter your date of birth, the calculator automatically checks the month and day against standard astrological dates to display your Western Zodiac sign."
  }
];

export default function AgeCalculatorPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Age Calculator",
      "url": "https://tasklora.com/calculator/age-calculator",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "All",
      "description": "Calculate your exact age down to the day, week, and hour.",
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
          "name": "Age Calculator",
          "item": "https://tasklora.com/calculator/age-calculator"
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
      <h2>How to Use the Online Age Calculator</h2>
      <p>
        Ever wondered exactly how old you are in days, weeks, or even hours? Our free online <strong>Age Calculator</strong> provides a highly accurate breakdown of your chronological age. Whether you are filling out an official document that requires your exact age in years and months, or you're just curious about your upcoming birthday countdown, this tool gives you instant answers.
      </p>

      <h3>Understanding Chronological Age</h3>
      <p>
        Chronological age is simply the amount of time that has passed from your birth to a given date. While it is easy to say you are 25 or 30 years old, breaking that down into months and days requires complex calendar math because months have varying numbers of days (28, 29, 30, or 31) and every four years brings a leap year.
      </p>

      <h3>Step-by-Step Guide to Calculating Your Age</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Enter your Date of Birth:</strong> Select your birth year, month, and day using the calendar input.</li>
        <li><strong>Select a Target Date:</strong> By default, the tool sets this to today's date to calculate your current age. If you want to know how old you were on a past date or will be on a future date, simply change this field.</li>
        <li><strong>View your Results:</strong> The tool instantly calculates your exact age in the format of Years, Months, and Days.</li>
      </ol>

      <h3>What Information Does This Tool Provide?</h3>
      <p>
        Beyond standard age, our tool provides a comprehensive set of fun and useful statistics:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Total Months and Weeks:</strong> See exactly how many months and weeks you have been alive.</li>
        <li><strong>Total Days and Hours:</strong> Have you lived for 10,000 days yet? Find out instantly.</li>
        <li><strong>Next Birthday Countdown:</strong> Know exactly how many days are left until you get to celebrate your next birthday.</li>
        <li><strong>Weekday of Birth:</strong> Find out if you were born on a Monday, a Friday, or the weekend.</li>
        <li><strong>Zodiac Sign:</strong> Based on standard Western astrology, the calculator determines your sun sign.</li>
      </ul>

      <h3>Why Use an Age Calculator?</h3>
      <p>
        Many government forms, insurance applications, and medical documents require your exact age in years and months. Instead of trying to count backward and potentially messing up the math due to a leap year, using an automated calculator guarantees absolute precision. It is also an excellent tool for parents wanting to know their infant's exact age in weeks and months for developmental tracking.
      </p>

      <p>
        Try it out today and discover fascinating details about your lifespan! Your data is completely secure and never leaves your browser.
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
        title="Age Calculator"
        description="Calculate your exact age in years, months, days, weeks, and hours. Discover your Zodiac sign and next birthday."
        path="/calculator/age-calculator"
        content={content}
        faqs={faqs}
      >
        <AgeCalculatorClient />
      </ToolLayout>
    </>
  );
}
