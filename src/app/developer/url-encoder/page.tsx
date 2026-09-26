import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UrlEncoderClient } from "./Client";
import Script from "next/script";

const title = "URL Encoder Tool - Online URL Encoding Utility";
const description = "Free online URL encoder. Encode text, query parameters, and URLs instantly to ensure safe transmission over the internet.";
const path = "/developer/url-encoder";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

export default function UrlEncoderPage() {
  const content = (
    <>
      <h2>What is URL Encoding?</h2>
      <p>
        URL Encoding (also known as Percent-encoding) is a mechanism for encoding information in a Uniform Resource Identifier (URI). When transmitting data over the internet, URLs can only be sent using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL must be converted. URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.
      </p>
      
      <h2>Why Developers Use It</h2>
      <p>
        Developers frequently use URL encoding when passing data via URL query parameters, REST APIs, and form submissions. For instance, spaces are encoded as <code>%20</code> or <code>+</code>, and special characters like <code>&amp;</code>, <code>=</code>, and <code>?</code> (which have special meanings in URLs) are safely escaped. This prevents data corruption and ensures web servers correctly interpret incoming requests.
      </p>
      
      <h3>Key Features of Our URL Encoder</h3>
      <ul>
        <li><strong>Real-time Encoding:</strong> Your text is encoded instantly as you type.</li>
        <li><strong>Privacy First:</strong> All encoding is performed locally in your browser. No data is sent to our servers, ensuring your sensitive API keys and parameters remain secure.</li>
        <li><strong>Developer Friendly:</strong> One-click copy capabilities and clean interface tailored for developer workflows.</li>
      </ul>

      <h2>How To Use the URL Encoder</h2>
      <p>
        Using the URL Encoder is extremely straightforward:
      </p>
      <ol>
        <li>Paste your unencoded text, string, or URL parameters into the "Input String" editor on the left.</li>
        <li>The tool will automatically detect changes and apply the standard <code>encodeURIComponent</code> algorithm to your input.</li>
        <li>The result will immediately appear in the "URL Encoded Output" pane on the right.</li>
        <li>Click the "Copy" button to place the encoded string into your clipboard for use in your application, cURL command, or browser.</li>
      </ol>

      <h2>Best Practices for URL Encoding</h2>
      <p>
        When working with URLs, it is essential to distinguish between encoding a full URL and encoding just a specific query parameter. Our tool acts as an encoder for specific parameters or data strings (similar to JavaScript's <code>encodeURIComponent</code>). If you need to encode a full URL without breaking the <code>http://</code> scheme, make sure to only encode the dynamic query string portions.
      </p>
      <p>
        Always encode user input before appending it to a URL to prevent URL injection attacks and ensure the request routes properly.
      </p>
    </>
  );

  const faqs = [
    {
      question: "What is URL Encoding?",
      answer: "URL encoding is the process of converting characters into a format that can be safely transmitted over the Internet. It replaces unsafe characters with a '%' followed by two hexadecimal digits."
    },
    {
      question: "Which characters are URL encoded?",
      answer: "Characters like spaces, punctuation, and special symbols (e.g., ?, &, =, #) are encoded. Alphanumeric characters (A-Z, a-z, 0-9) and a few special characters (-, _, ., ~) remain unencoded."
    },
    {
      question: "What is the difference between encodeURI and encodeURIComponent?",
      answer: "encodeURI is meant for encoding a full URL and leaves characters like '?', '&', and '/' intact. encodeURIComponent encodes all special characters and is intended for encoding individual query string parameters."
    },
    {
      question: "Is this URL Encoder safe to use with sensitive data?",
      answer: "Yes! Our URL Encoder processes all data entirely within your browser on the client side. No data is ever transmitted or stored on our servers, ensuring absolute privacy."
    },
    {
      question: "Why do spaces become %20 in URLs?",
      answer: "A space is not a valid character in a standard URL. According to the URI specification, spaces must be encoded using their hexadecimal value in ASCII, which translates to '%20'."
    },
    {
      question: "Can I use this tool to decode URLs?",
      answer: "This specific tool is designed for encoding. However, we offer a dedicated URL Decoder tool which performs the exact opposite operation, turning encoded strings back into readable text."
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
        id="schema-url-encoder"
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
        <UrlEncoderClient />
      </ToolLayout>
    </>
  );
}
