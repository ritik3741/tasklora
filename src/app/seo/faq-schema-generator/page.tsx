import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import FaqClient from "./FaqClient";

export const metadata = generateSEO({
  title: "FAQ Schema Generator | Free JSON-LD Builder | Tasklora",
  description: "Create perfectly structured FAQ schema in JSON-LD format. Boost your SEO and get rich snippets in Google search results with our free generator.",
  path: "/seo/faq-schema-generator",
});

const faqs = [
  {
    question: "What is FAQ Schema?",
    answer: "FAQ Schema is a type of structured data that you can add to a webpage to explicitly indicate that the page contains a Frequently Asked Questions list. By doing this, search engines like Google can display these questions and answers directly in the search results as rich snippets.",
  },
  {
    question: "Does FAQ schema improve SEO?",
    answer: "Yes, FAQ schema can significantly improve your SEO performance. While it doesn't directly influence your search rankings as a direct ranking factor, it can dramatically increase your click-through rate (CTR). Rich snippets make your search listing much larger and more prominent on the results page, capturing more user attention.",
  },
  {
    question: "How do I implement JSON-LD FAQ schema?",
    answer: "Once you generate your schema using our tool, simply copy the output code. Then, insert this code into the `<head>` or `<body>` section of the specific HTML webpage that contains the actual FAQ content. If you are using a CMS like WordPress, there are often plugins available that allow you to easily inject header scripts on specific pages.",
  },
  {
    question: "Is it required to display the questions on the page?",
    answer: "Absolutely. Google's strict guidelines require that the exact questions and answers included in your FAQ schema must be visible to users on the webpage. If you use schema for hidden content, Google may penalize your site for spammy structured data.",
  },
  {
    question: "Can I include links in my FAQ answers?",
    answer: "Yes, you can include HTML links in your FAQ schema answers. In fact, providing links to related pages or resources can be highly beneficial for users. However, ensure that any links in the schema match the links visible in the actual on-page content.",
  },
  {
    question: "How long does it take for Google to show my FAQ snippets?",
    answer: "Once you implement the schema, you can use Google Search Console to request indexing for that specific page. Depending on Google's crawl rate for your site, the rich snippets can appear in search results anywhere from a few hours to several days. There is no absolute guarantee that Google will display them, even with perfect schema.",
  }
];

const content = (
  <div className="space-y-6 text-gray-700 leading-relaxed">
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is FAQ Schema Generator?</h2>
    <p>
      An FAQ Schema Generator is a specialized SEO tool designed to create structured data code (specifically in JSON-LD format) for Frequently Asked Questions. By implementing this code on your website, you provide clear, machine-readable information to search engines like Google, Bing, and Yahoo about the questions and answers present on your page.
    </p>
    <p>
      Structured data is a standardized format for providing information about a page and classifying the page content. For FAQs, this means search engines can easily extract your Q&A pairs and potentially display them directly in the search results as "Rich Snippets." These rich snippets expand your search listing, pushing competitors further down the page and offering users immediate answers.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use Our FAQ Schema Generator?</h2>
    <p>
      Writing JSON-LD code from scratch can be tedious and prone to syntax errors. A single misplaced comma or missing bracket can render the entire schema invalid, causing search engines to ignore it completely. Our FAQ Schema Generator solves this problem by automating the coding process. 
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Error-Free Code:</strong> Guarantees perfectly formatted JSON-LD code that complies with schema.org standards.</li>
      <li><strong>Time-Saving:</strong> Instantly generates schema as you type. No more wrestling with syntax.</li>
      <li><strong>Live Preview:</strong> See your code update in real-time, allowing you to easily spot typos in your content.</li>
      <li><strong>Unlimited Q&As:</strong> Add as many questions and answers as your page requires without any limitations.</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use the Generator</h2>
    <p>
      Using our tool is incredibly straightforward, even if you have no coding experience. Follow these simple steps to generate and implement your FAQ schema:
    </p>
    <ol className="list-decimal pl-6 space-y-2">
      <li><strong>Input Your Content:</strong> Enter your first question into the "Question" field and the corresponding answer into the "Answer" field. Ensure the text matches exactly what is displayed on your webpage.</li>
      <li><strong>Add More Questions:</strong> Click the "Add Another Question" button to generate additional input fields. You can add as many Q&A pairs as you need.</li>
      <li><strong>Review the Code:</strong> As you type, the tool automatically generates the JSON-LD schema in the right-hand panel. Review the code to ensure all your text has been captured correctly.</li>
      <li><strong>Copy the Schema:</strong> Click the "Copy Code" button to copy the generated JSON-LD script to your clipboard.</li>
      <li><strong>Implement on Your Site:</strong> Paste the copied script into the HTML of your webpage. It's generally best practice to place it within the <code>&lt;head&gt;</code> section, but placing it in the <code>&lt;body&gt;</code> will also work perfectly fine.</li>
      <li><strong>Test Your Schema:</strong> Always test your implementation using Google's Rich Results Test tool to ensure there are no errors and that Google can properly read your structured data.</li>
    </ol>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices for FAQ Schema</h2>
    <p>
      To maximize your chances of securing FAQ rich snippets and avoiding penalties, it's crucial to follow search engine guidelines:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Content Must Be Visible:</strong> This is the golden rule. Every single question and answer in your schema code MUST be visible to users reading the webpage. Do not hide schema content.</li>
      <li><strong>No Advertising:</strong> Do not use FAQ schema for promotional purposes or to display advertisements. The content should be strictly informational and directly answer the user's query.</li>
      <li><strong>Accurate Representation:</strong> The text in the schema should accurately reflect the text on the page. While slight variations might be technically acceptable, exact matching is the safest and recommended approach.</li>
      <li><strong>Appropriate Use Cases:</strong> Use FAQ schema for pages that are genuinely structured as a list of questions and answers. Do not use it for forums or pages where users can submit their own answers (use QAPage schema for that instead).</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
    <p>
      Even with a generator, there are pitfalls to avoid when implementing FAQ schema. One common mistake is using the schema on multiple pages for the identical set of questions. If you have a global FAQ section that appears on every page of your site, only markup the primary FAQ page itself. Redundant schema across your entire site can look spammy to search engines.
    </p>
    <p>
      Another frequent error is writing overly brief or unhelpful answers just to get the schema snippet. Search engines aim to provide the best user experience. If your answers are low quality, they may choose not to display your rich snippet, regardless of how perfectly your code is formatted. Always prioritize high-quality, comprehensive content that genuinely serves the user's intent.
    </p>
  </div>
);

export default function FaqSchemaGeneratorPage() {
  const toolUrl = "https://tasklora.com/seo/faq-schema-generator";

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FAQ Schema Generator",
    url: toolUrl,
    description: "Free tool to generate FAQ JSON-LD structured data for websites.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tasklora.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Tools",
        item: "https://tasklora.com/seo"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "FAQ Schema Generator",
        item: toolUrl
      }
    ]
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <ToolLayout
        title="FAQ Schema Generator"
        description="Easily build JSON-LD FAQ structured data for your webpages. Add unlimited questions and answers, preview the schema in real-time, and boost your SEO with rich snippets."
        path="/seo/faq-schema-generator"
        content={content}
        faqs={faqs}
      >
        <div className="my-8">
          <FaqClient />
        </div>
      </ToolLayout>
    </>
  );
}
