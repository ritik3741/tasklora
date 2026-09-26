import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UrlDecoderClient } from "./Client";
import Script from "next/script";

const title = "URL Decoder Tool - Online URL Decoding Utility";
const description = "Free online URL decoder. Decode URL-encoded text and query parameters back into their readable format instantly and securely.";
const path = "/developer/url-decoder";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

export default function UrlDecoderPage() {
  const content = (
    <>
      <h2>What is URL Decoding?</h2>
      <p>
        URL Decoding (or Percent-decoding) is the inverse operation of URL encoding. When data is transmitted over the internet via URLs, special characters and spaces are converted into percent-encoded formats (like <code>%20</code> for a space). URL decoding reverses this process, taking a string filled with percent signs and hexadecimal digits and converting it back into a standard, readable string.
      </p>
      
      <h2>Why Developers Use It</h2>
      <p>
        Developers often encounter URL-encoded strings when parsing incoming HTTP requests, analyzing web server logs, or debugging API payloads. Often, these strings are deeply nested or heavily encoded, making them impossible to read at a glance. A URL decoder quickly translates the encoded gibberish back into JSON, readable text, or standard query parameters, allowing developers to effectively troubleshoot and verify the data being passed within applications.
      </p>
      
      <h3>Features of Our URL Decoder</h3>
      <ul>
        <li><strong>Instant Decoding:</strong> See the unencoded output in real-time as you paste or type your encoded string.</li>
        <li><strong>Error Handling:</strong> The tool automatically detects invalid or malformed percent-encoded sequences and alerts you to the error.</li>
        <li><strong>100% Client-Side:</strong> Decoding is done entirely within your browser. We respect your privacy, meaning no data is ever transmitted to remote servers.</li>
      </ul>

      <h2>How To Use the URL Decoder</h2>
      <p>
        Using the URL Decoder is fast and intuitive:
      </p>
      <ol>
        <li>Paste your URL-encoded string (e.g., <code>hello%20world%21</code>) into the "URL Encoded String" input box on the left.</li>
        <li>The decoder will instantly parse the string using standard decoding algorithms and display the plain text result on the right.</li>
        <li>If the input contains invalid encoding sequences, an error message will guide you.</li>
        <li>Use the one-click copy button to copy the decoded payload to your clipboard for further analysis.</li>
      </ol>

      <h2>Best Practices for URL Decoding</h2>
      <p>
        When decoding data, keep in mind that a string might be multi-encoded (encoded more than once). If the output still contains <code>%</code> signs and hex codes, you may need to run the decoded output through the tool a second time. Additionally, always sanitize and validate decoded data on the server side, as decoding arbitrary user input can sometimes expose applications to injection vulnerabilities if the resulting data is not properly handled before database insertion or HTML rendering.
      </p>
    </>
  );

  const faqs = [
    {
      question: "What is URL Decoding?",
      answer: "URL decoding is the process of reversing URL encoding. It converts percent-encoded strings (like %20) back into their original characters (like a space)."
    },
    {
      question: "Why do I see %20 or %22 in my URLs?",
      answer: "These are encoded representations of characters that are not allowed directly in URLs. %20 represents a space, and %22 represents a double quote mark."
    },
    {
      question: "Is this URL Decoder secure?",
      answer: "Absolutely. The decoding happens directly in your browser using JavaScript. No data is transmitted to our servers or stored externally, making it safe for sensitive data."
    },
    {
      question: "What happens if I enter an invalid encoded string?",
      answer: "Our tool will catch the error (often a URIError) and display a user-friendly error message indicating that the string is not validly encoded."
    },
    {
      question: "Can I decode a full URL?",
      answer: "Yes, you can decode full URLs. However, be aware that decoding a full URL might decode necessary structural components like '?' and '&', depending on how it was originally encoded."
    },
    {
      question: "Do I need to decode twice?",
      answer: "Sometimes applications encode data multiple times by mistake or by design (double encoding). If your decoded result still looks encoded, you can copy it and decode it again."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": title,
        "description": description,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
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
            "item": "https://tasklora.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Developer Tools",
            "item": "https://tasklora.com/developer"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": `https://tasklora.com${path}`
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
      <Script
        id="schema-url-decoder"
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
        <UrlDecoderClient />
      </ToolLayout>
    </>
  );
}
