import React from "react";
import { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import { RegexTesterClient } from "./Client";
import Script from "next/script";

const toolTitle = "Regex Tester & Debugger";
const toolDescription = "Test, debug, and learn regular expressions in real-time. A powerful and easy-to-use Regex tester with match highlighting and capture group extraction.";
const toolPath = "/developer/regex-tester";

export const metadata: Metadata = generateSEO({
  title: toolTitle,
  description: toolDescription,
  path: toolPath,
});

export default function RegexTesterPage() {
  const content = (
    <>
      <h2>Introduction to Regular Expressions</h2>
      <p>
        Regular expressions (often shortened to regex or regexp) are incredibly powerful sequences of characters that define search patterns. They are primarily used in string-searching algorithms for "find" or "find and replace" operations on text, or for input validation. Whether you are parsing logs, validating user input, or refactoring code, understanding and mastering regex is an essential skill for any software developer.
      </p>
      <p>
        Despite their power, writing accurate regular expressions can be challenging. The syntax is dense and can easily become difficult to read or debug. That is where a dedicated Regex Tester comes in handy, providing instant feedback and clarity on what your pattern is actually matching.
      </p>

      <h2>Why Developers Use a Regex Tester</h2>
      <p>
        Writing complex regular expressions without a visual tool often leads to trial and error. A Regex Tester eliminates this guesswork by offering real-time testing against sample text. Developers use it to:
      </p>
      <ul>
        <li><strong>Verify Accuracy:</strong> Instantly see if a regex accurately matches the intended strings and ignores what it shouldn't.</li>
        <li><strong>Debug Patterns:</strong> Break down complex patterns and identify why a regex is failing to match or matching too much (e.g., greedy vs. lazy matching).</li>
        <li><strong>Inspect Capture Groups:</strong> Easily extract and verify the specific substrings captured by parentheses in your regex, which is crucial for data extraction and text replacement.</li>
        <li><strong>Learn and Experiment:</strong> Safely experiment with new regex tokens, flags, and assertions in a sandboxed environment without affecting production code.</li>
      </ul>

      <h2>Key Features of This Tool</h2>
      <p>
        Our Regex Tester provides a streamlined, distraction-free environment for evaluating regular expressions directly in your browser. Key features include:
      </p>
      <ul>
        <li><strong>Real-time Matching:</strong> See results instantly as you type your regex or test string.</li>
        <li><strong>Flag Controls:</strong> Easily toggle common regex flags like <code>g</code> (global), <code>i</code> (case-insensitive), and <code>m</code> (multi-line) with a single click.</li>
        <li><strong>Capture Group Extraction:</strong> Automatically extracts and displays all capture groups for each match, making data extraction debugging a breeze.</li>
        <li><strong>Error Handling:</strong> Gracefully catches and displays syntax errors in your regular expression, helping you fix mistakes faster.</li>
        <li><strong>Client-Side Processing:</strong> All regex evaluation happens locally in your browser. Your test text and patterns are never sent to a server, ensuring your data remains private and secure.</li>
      </ul>

      <h2>How To Use the Regex Tester</h2>
      <ol>
        <li><strong>Enter your Regex:</strong> Type your regular expression pattern into the input field at the top. Do not include the leading or trailing slashes (<code>/</code>), as the tool handles those for you.</li>
        <li><strong>Select Flags:</strong> Click the <code>g</code>, <code>i</code>, or <code>m</code> buttons to toggle global, case-insensitive, or multi-line matching behavior respectively.</li>
        <li><strong>Provide Test String:</strong> Paste or type the text you want to search into the "Test String" text area.</li>
        <li><strong>View Results:</strong> The tool will instantly evaluate the regex against your text. The results section will display the total number of matches and provide a detailed breakdown of each match, including its index and any associated capture groups.</li>
      </ol>

      <h2>Best Practices for Writing Regex</h2>
      <p>
        To get the most out of regular expressions and ensure they are maintainable, consider the following best practices:
      </p>
      <ul>
        <li><strong>Keep it Simple:</strong> Avoid overly complex or "clever" regex. If a pattern becomes too difficult to read, consider breaking it into multiple simpler expressions or using standard string manipulation functions if applicable.</li>
        <li><strong>Comment Your Code:</strong> Since regex can be cryptic, always leave comments in your code explaining what the regex is intended to match and how it works. Some languages even support extended regex modes that allow comments inline.</li>
        <li><strong>Be Wary of Catastrophic Backtracking:</strong> Poorly written regexes (especially those with nested quantifiers like <code>(a+)+</code>) can cause performance issues or even crash your application due to catastrophic backtracking. Test against edge cases.</li>
        <li><strong>Use Capture Groups Wisely:</strong> Use non-capturing groups <code>(?:...)</code> when you need to group tokens but don't need to extract the matched substring, as this saves memory and processing time.</li>
        <li><strong>Test Extensively:</strong> Always use a tool like this Regex Tester to validate your patterns against a wide variety of inputs, including positive matches, negative cases, and edge cases.</li>
      </ul>
    </>
  );

  const faqs = [
    {
      question: "What is a regular expression (regex)?",
      answer: "A regular expression is a sequence of characters that forms a search pattern. It is used for string matching, search and replace operations, and data validation across many programming languages and tools."
    },
    {
      question: "What do the 'g', 'i', and 'm' flags mean?",
      answer: "The 'g' (global) flag tells the engine to find all matches rather than stopping after the first one. The 'i' (ignore case) flag makes the search case-insensitive. The 'm' (multi-line) flag changes the behavior of '^' and '$' to match the start and end of each line, rather than the entire string."
    },
    {
      question: "What is a capture group in regex?",
      answer: "A capture group is a part of a regex enclosed in parentheses `(...)`. It groups multiple tokens together and 'captures' the text matched by that specific part of the pattern, allowing you to extract or reference it later."
    },
    {
      question: "Is this Regex Tester secure for sensitive data?",
      answer: "Yes, this Regex Tester processes everything entirely on the client-side (in your browser). Your regular expressions and test strings are never transmitted to our servers or any third party."
    },
    {
      question: "Why is my regex not matching anything?",
      answer: "Common reasons include: missing the 'i' flag for case-insensitive searches, forgetting the 'g' flag if you expect multiple results, incorrect escaping of special characters (like '.' or '*'), or having trailing whitespace in your regex."
    },
    {
      question: "How do I match a literal dot (.) or asterisk (*)?",
      answer: "Because characters like '.', '*', '?', '+', '[', '(', etc., have special meanings in regex, you must 'escape' them with a backslash if you want to match the literal character. For example, use `\\.` to match a period and `\\*` to match an asterisk."
    }
  ];

  // Schema generation
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: toolTitle,
    description: toolDescription,
    url: `https://tasklora.com${toolPath}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tasklora.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Developer Tools",
        item: "https://tasklora.com/developer",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: toolTitle,
        item: `https://tasklora.com${toolPath}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script id="schema-webapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <ToolLayout
        title={toolTitle}
        description={toolDescription}
        path={toolPath}
        content={content}
        faqs={faqs}
      >
        <RegexTesterClient />
      </ToolLayout>
    </>
  );
}
