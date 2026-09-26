import React from "react";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JsonValidatorClient } from "./Client";

export const metadata = generateSEO({
  title: "JSON Validator - Check and Debug JSON Online",
  description: "Free online JSON Validator to instantly check if your JSON data is structurally sound. Highlights syntax errors and line numbers for easy debugging.",
  path: "/developer/json-validator",
});

export default function JsonValidatorPage() {
  const content = (
    <>
      <h2>Introduction to JSON Validator</h2>
      <p>
        JSON (JavaScript Object Notation) is the backbone of modern web communication. It powers RESTful APIs, configuration files, and data storage solutions across virtually all programming languages. However, its strict syntax rules mean that a single misplaced comma, missing quote, or unclosed bracket can break your entire application. 
      </p>
      <p>
        Our <strong>Online JSON Validator</strong> is a fast, accurate, and secure tool designed to parse your JSON string and confirm its validity instantly. If your data contains syntax errors, the tool pinpoints the exact location of the issue, providing detailed error messages and line numbers so you can debug with ease.
      </p>

      <h2>Why Developers Use a JSON Validator</h2>
      <p>
        Writing or modifying JSON by hand is notoriously prone to errors. Developers use our JSON Validator for several essential reasons:
      </p>
      <ul>
        <li><strong>Prevent Application Crashes:</strong> Feeding invalid JSON to an API or application can cause unhandled exceptions and system crashes. Validating data beforehand ensures stability.</li>
        <li><strong>Rapid Debugging:</strong> Sifting through thousands of lines of JSON to find a missing comma is tedious. A validator immediately identifies the line number causing the issue.</li>
        <li><strong>API Integration:</strong> When consuming third-party APIs, it's crucial to verify the integrity of the payload. Validating the response saves hours of troubleshooting.</li>
        <li><strong>Configuration Verification:</strong> Many tools (like ESLint, Prettier, and Webpack) rely on `.json` configuration files. Validating these files prevents build errors.</li>
      </ul>

      <h2>Key Features of Our JSON Validator</h2>
      <p>
        We built this tool with the developer experience in mind. Here is what makes our JSON Validator stand out:
      </p>
      <ul>
        <li><strong>Instant Validation:</strong> Click validate and get immediate feedback on the structural integrity of your JSON string.</li>
        <li><strong>Detailed Error Reporting:</strong> Instead of a generic "Invalid JSON" message, our tool extracts the exact error reason and attempts to determine the exact line number where the issue occurred.</li>
        <li><strong>Visual Cues:</strong> Clear success and error states (using color-coded borders and icons) help you quickly identify the status of your data.</li>
        <li><strong>Local Processing:</strong> Your data's security is our priority. All validation is performed client-side in your web browser. No JSON data is transmitted to our servers.</li>
        <li><strong>Large Payload Support:</strong> Whether you have a 10-line config file or a 10,000-line API response, our tool handles it smoothly.</li>
      </ul>

      <h2>How To Use the JSON Validator</h2>
      <ol>
        <li>Copy the JSON data you wish to check. This could be from an API endpoint, a file, or your IDE.</li>
        <li>Paste the data into the <strong>JSON to Validate</strong> text editor above.</li>
        <li>Click the <strong>Validate JSON</strong> button.</li>
        <li>If the JSON is valid, you will see a green success message confirming the structure is sound.</li>
        <li>If the JSON is invalid, a red alert will appear detailing the syntax error and highlighting the approximate line number of the mistake.</li>
        <li>Fix the error in your code and click validate again to confirm the fix!</li>
      </ol>

      <h2>Best Practices for Writing Valid JSON</h2>
      <p>
        Keep these strict JSON syntax rules in mind to avoid common validation errors:
      </p>
      <ul>
        <li><strong>Double Quotes Only:</strong> All keys and string values must be enclosed in double quotes (<code>"key": "value"</code>). Single quotes are not permitted.</li>
        <li><strong>No Trailing Commas:</strong> Do not place a comma after the final key-value pair in an object or the final item in an array.</li>
        <li><strong>Data Types:</strong> JSON only supports specific data types: string, number, object, array, boolean (<code>true</code>/<code>false</code>), and <code>null</code>. Functions or undefined are not allowed.</li>
        <li><strong>Root Element:</strong> The entire JSON text must be wrapped in either a single object <code>&#123;&#125;</code> or a single array <code>[]</code>.</li>
      </ul>
    </>
  );

  const faqs = [
    {
      question: "What is a JSON Validator?",
      answer: "A JSON Validator is a developer tool that analyzes a JSON string against strict structural rules to determine if it is properly formatted. It helps identify syntax errors before the data is used in production applications."
    },
    {
      question: "Why is my JSON invalid?",
      answer: "Common reasons for invalid JSON include using single quotes instead of double quotes, trailing commas, missing brackets or braces, and failing to escape special characters within strings."
    },
    {
      question: "Does this tool format my JSON?",
      answer: "No, this specific tool focuses purely on validation and error reporting. If you want to format or prettify your JSON, please use our JSON Formatter tool."
    },
    {
      question: "Is my JSON data sent to a server?",
      answer: "No. The JSON Validator processes all your data locally within your browser. None of your inputs are sent over the network, ensuring complete privacy."
    },
    {
      question: "How does the tool find the line number of an error?",
      answer: "When parsing fails, the browser throws an error containing the character position of the syntax issue. Our tool calculates the corresponding line number based on that position to help you locate the bug faster."
    },
    {
      question: "Can I validate large JSON files?",
      answer: "Yes, you can paste large JSON payloads into the editor. Since processing happens locally, the limit is largely determined by your browser's memory capacity."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "JSON Validator",
      "url": "https://tasklora.com/developer/json-validator",
      "description": "Free online JSON Validator to instantly check if your JSON data is structurally sound and debug syntax errors.",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tasklora.com/" },
        { "@type": "ListItem", "position": 2, "name": "Developer Tools", "item": "https://tasklora.com/developer" },
        { "@type": "ListItem", "position": 3, "name": "JSON Validator", "item": "https://tasklora.com/developer/json-validator" }
      ]
    },
    {
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
    }
  ];

  return (
    <ToolLayout 
      title="JSON Validator" 
      description="Validate and debug your JSON data online. Instantly find syntax errors and line numbers with our free tool." 
      path="/developer/json-validator" 
      content={content} 
      faqs={faqs}
    >
      <JsonValidatorClient />
      
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </ToolLayout>
  );
}
