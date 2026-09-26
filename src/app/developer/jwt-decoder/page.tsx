import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JwtDecoderClient } from "./Client";
import Script from "next/script";

const title = "JWT Decoder - Decode JSON Web Tokens Online";
const description = "Free online JWT decoder. Securely decode, verify, and inspect JSON Web Token headers, payloads, and expiration dates instantly.";
const path = "/developer/jwt-decoder";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

export default function JwtDecoderPage() {
  const content = (
    <>
      <h2>What is a JSON Web Token (JWT)?</h2>
      <p>
        A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
      </p>
      
      <h2>Why Developers Use JWTs</h2>
      <p>
        Developers rely on JWTs heavily for authentication and information exchange in modern web and mobile applications. Once a user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign-On (SSO) is a feature that widely uses JWT today, because of its small overhead and its ability to be easily used across different domains.
      </p>
      
      <h3>Key Features of Our JWT Decoder</h3>
      <ul>
        <li><strong>Local Decoding:</strong> All processing is done securely within your browser. We never send your tokens to a backend server.</li>
        <li><strong>Detailed Breakdown:</strong> Instantly view the token's Header (containing the algorithm and token type) and Payload (the claims).</li>
        <li><strong>Time Formatting:</strong> Automatically converts confusing Unix timestamps (like <code>iat</code> and <code>exp</code>) into human-readable local dates.</li>
        <li><strong>Validation:</strong> Checks if the token conforms to the standard 3-part structure (Header, Payload, Signature) and catches encoding errors.</li>
      </ul>

      <h2>How To Use the JWT Decoder</h2>
      <p>
        To inspect your token, follow these steps:
      </p>
      <ol>
        <li>Locate your JWT. It should be a long string of characters separated by two periods (e.g., <code>xxxxx.yyyyy.zzzzz</code>).</li>
        <li>Paste the entire token into the "JWT Token" input field.</li>
        <li>The tool will automatically split the token and decode the Base64Url encoded segments.</li>
        <li>The Header and Payload will be displayed in beautifully formatted JSON in the respective panels.</li>
        <li>Below the panels, you will find a summary card highlighting critical information such as the Issued At date and Expiration date.</li>
      </ol>

      <h2>Best Practices for Handling JWTs</h2>
      <p>
        While JWTs are incredibly useful, they must be handled securely:
      </p>
      <ul>
        <li><strong>Do not store sensitive data in the payload:</strong> A JWT is digitally signed to prevent tampering, but the payload is merely Base64Url encoded, not encrypted. Anyone who intercepts the token can read its contents.</li>
        <li><strong>Keep tokens short-lived:</strong> Since JWTs are typically stateless, revoking them can be difficult. It's best practice to use short expiration times (<code>exp</code>) and utilize refresh tokens to maintain user sessions.</li>
        <li><strong>Always verify the signature on the server:</strong> Never trust the claims in a JWT without first verifying the signature on your backend server using your secret key or public key.</li>
      </ul>
    </>
  );

  const faqs = [
    {
      question: "What does JWT stand for?",
      answer: "JWT stands for JSON Web Token. It is an industry standard used to represent claims securely between two parties."
    },
    {
      question: "Is this JWT Decoder secure?",
      answer: "Yes. Our JWT decoder operates entirely on the client-side within your browser. Your token is never transmitted over the internet or logged on our servers."
    },
    {
      question: "Can this tool verify the signature of my JWT?",
      answer: "This tool is designed for decoding the header and payload. It does not verify the cryptographic signature since that would require your server's secret key, which should never be exposed to a client-side application."
    },
    {
      question: "Why can anyone read the payload of my JWT?",
      answer: "The header and payload of a JWT are only Base64Url encoded, not encrypted. They are designed to be easily read by any party that possesses the token. The security comes from the signature, which ensures the data hasn't been altered."
    },
    {
      question: "What are the three parts of a JWT?",
      answer: "A JWT consists of three parts separated by dots: the Header (describing the token type and signing algorithm), the Payload (containing the claims or data), and the Signature (used to verify the token's integrity)."
    },
    {
      question: "How do I know if my JWT has expired?",
      answer: "When you paste your token into our decoder, look at the Token Information section. We automatically parse the 'exp' (expiration) claim and convert the Unix timestamp into a readable date and time."
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
        id="schema-jwt-decoder"
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
        <JwtDecoderClient />
      </ToolLayout>
    </>
  );
}
