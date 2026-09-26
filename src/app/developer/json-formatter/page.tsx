import React from "react";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JsonFormatterClient } from "./Client";

export const metadata = generateSEO({
  title: "JSON Formatter - Prettify, Format and Minify JSON",
  description: "Free online JSON Formatter to prettify, validate, format, and minify JSON data instantly. Make your JSON readable with ease.",
  path: "/developer/json-formatter",
});

export default function JsonFormatterPage() {
  const content = (
    <>
      <h2>Introduction to JSON Formatter</h2>
      <p>
        JSON (JavaScript Object Notation) has become the de facto standard for data exchange on the web. It is lightweight, text-based, and heavily utilized in APIs, configuration files, and data storage. However, when JSON is transmitted over the web, it is often minified—compressed into a single line to save bandwidth. While this is great for machines, it makes the data nearly impossible for humans to read and understand.
      </p>
      <p>
        Our <strong>Online JSON Formatter</strong> is a powerful, developer-friendly tool designed to parse your unreadable JSON strings and convert them into beautifully structured, properly indented formats. Whether you are debugging a complex API response, writing configuration files, or simply analyzing data structures, our JSON Formatter saves you time by instantly organizing your data.
      </p>

      <h2>Why Developers Use a JSON Formatter</h2>
      <p>
        Working with raw, unformatted JSON can be a frustrating and error-prone experience. Developers rely on formatting tools for several critical reasons:
      </p>
      <ul>
        <li><strong>Readability:</strong> Proper indentation and line breaks make it infinitely easier to distinguish nested objects and arrays.</li>
        <li><strong>Debugging:</strong> When an API returns a massive payload, finding a specific key-value pair or diagnosing a syntax error is much simpler when the data is structured.</li>
        <li><strong>Data Validation:</strong> A side effect of formatting JSON is validation. If your JSON is malformed, our tool will highlight the error, helping you fix missing commas, trailing quotes, or unclosed brackets.</li>
        <li><strong>Collaboration:</strong> When sharing JSON snippets with teammates or posting in forums like Stack Overflow, formatted JSON is essential for clear communication.</li>
      </ul>

      <h2>Key Features of Our JSON Formatter</h2>
      <p>
        Our tool isn't just a basic prettifier; it comes packed with features designed specifically for the modern developer workflow:
      </p>
      <ul>
        <li><strong>Instant Prettification:</strong> Paste your minified JSON and format it with a single click.</li>
        <li><strong>Custom Indentation:</strong> Choose between 2 spaces, 4 spaces, or tab indentation to match your team's coding standards.</li>
        <li><strong>JSON Minification:</strong> Need to compress your JSON for production? Quickly toggle from formatted to minified to strip out unnecessary whitespace.</li>
        <li><strong>Error Highlighting:</strong> If your input is invalid, the tool immediately informs you with a clear error message, preventing faulty data from moving forward.</li>
        <li><strong>Export Options:</strong> Easily copy the formatted result to your clipboard or download it directly as a <code>.json</code> file for local use.</li>
        <li><strong>Privacy First:</strong> All parsing and formatting happen entirely on the client-side (in your browser). No data is sent to our servers, ensuring your sensitive API keys or personal data remain secure.</li>
      </ul>

      <h2>How To Use the JSON Formatter</h2>
      <ol>
        <li>Copy the JSON string you want to format from your API response, log file, or code editor.</li>
        <li>Paste the JSON into the <strong>Input JSON</strong> text area above.</li>
        <li>Select your preferred indentation level from the dropdown menu (2 Spaces, 4 Spaces, or Tabs).</li>
        <li>Click the <strong>Format / Prettify</strong> button to instantly structure your data.</li>
        <li>If you need to compress the data instead, click the <strong>Minify</strong> button.</li>
        <li>Use the <strong>Copy</strong> button to send the result to your clipboard, or click <strong>Download</strong> to save it as a file.</li>
      </ol>

      <h2>Best Practices for Working with JSON</h2>
      <p>
        To get the most out of your data interchange, follow these standard JSON best practices:
      </p>
      <ul>
        <li><strong>Use Double Quotes:</strong> JSON requires double quotes for strings and keys. Single quotes are invalid and will cause parsing errors.</li>
        <li><strong>Avoid Trailing Commas:</strong> Unlike JavaScript objects, JSON strictly forbids trailing commas after the last element in an array or object.</li>
        <li><strong>Validate Before Use:</strong> Always run external JSON data through a validator or formatter to ensure it is structurally sound before feeding it into your application logic.</li>
        <li><strong>Keep It Flat:</strong> While JSON supports deep nesting, keeping your structures as flat as possible improves both readability and parsing performance.</li>
      </ul>
    </>
  );

  const faqs = [
    {
      question: "What is a JSON Formatter?",
      answer: "A JSON Formatter is a tool that takes raw, often minified JSON data and converts it into a readable structure by adding appropriate spaces, tabs, and line breaks. It is also known as a JSON prettifier."
    },
    {
      question: "Is this JSON Formatter safe and private?",
      answer: "Yes, completely. Our JSON Formatter runs entirely in your web browser using client-side JavaScript. Your JSON data is never sent to our servers, making it 100% secure for sensitive information."
    },
    {
      question: "Why am I getting an 'Invalid JSON' error?",
      answer: "This error occurs when the input text violates JSON syntax rules. Common culprits include missing double quotes around keys, trailing commas, unescaped characters, or missing brackets/braces."
    },
    {
      question: "Can I minify JSON using this tool?",
      answer: "Yes! By clicking the 'Minify' button, you can instantly strip all unnecessary whitespace, line breaks, and indentation from your JSON, making it compact and ready for production use."
    },
    {
      question: "What indentation options are supported?",
      answer: "You can customize your formatting by choosing between 2 spaces, 4 spaces, or tab character indentation using the dropdown menu provided."
    },
    {
      question: "Can I download the formatted JSON?",
      answer: "Absolutely. Once your JSON is formatted, you can click the 'Download' button to save the output directly to your device as a standard .json file."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "JSON Formatter",
      "url": "https://tasklora.com/developer/json-formatter",
      "description": "Free online JSON Formatter to prettify, validate, format, and minify JSON data instantly.",
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
        { "@type": "ListItem", "position": 3, "name": "JSON Formatter", "item": "https://tasklora.com/developer/json-formatter" }
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
      title="JSON Formatter & Prettifier" 
      description="Format, prettify, and minify your JSON data instantly. Secure client-side processing." 
      path="/developer/json-formatter" 
      content={content} 
      faqs={faqs}
    >
      <JsonFormatterClient />
      
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
