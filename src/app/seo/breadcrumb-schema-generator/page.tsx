import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import BreadcrumbClient from "./BreadcrumbClient";

export const metadata = generateSEO({
  title: "Breadcrumb Schema Generator | Free JSON-LD Builder | Tasklora",
  description: "Easily generate BreadcrumbList structured data for your website. Improve your site navigation in search results with our free Breadcrumb Schema tool.",
  path: "/seo/breadcrumb-schema-generator",
});

const faqs = [
  {
    question: "What is Breadcrumb Schema?",
    answer: "Breadcrumb Schema is a form of structured data (usually written in JSON-LD) that tells search engines about the structural hierarchy of a webpage within your website. It maps out the path a user takes from the homepage down to the specific page they are viewing.",
  },
  {
    question: "Why should I use breadcrumb structured data?",
    answer: "Using breadcrumb structured data helps search engines understand the architecture of your site. More importantly, it allows search engines like Google to display a clean, readable breadcrumb trail in the search results instead of a long, confusing URL. This can make your listing look more professional and improve click-through rates.",
  },
  {
    question: "Do I need breadcrumbs on my actual webpage to use this schema?",
    answer: "Yes. Google's guidelines require that structured data accurately reflects the actual content visible on the webpage. If you use breadcrumb schema, you should have a visible, functioning breadcrumb navigation trail on that same page for users to interact with.",
  },
  {
    question: "Should the last item in the breadcrumb list link to the current page?",
    answer: "While it is common practice for the last item in the schema to represent the current page, you do not necessarily need to include a URL for it. However, many SEO professionals choose to include the URL for the final item as well, which perfectly aligns with the standard BreadcrumbList structure.",
  },
  {
    question: "Where should I place the generated JSON-LD code?",
    answer: "The generated JSON-LD code can be placed anywhere in the HTML of your webpage. The most common and recommended location is within the `<head>` tag, but placing it at the bottom of the `<body>` tag is also perfectly valid and will be parsed correctly by search engine crawlers.",
  },
  {
    question: "Is JSON-LD the only way to add breadcrumb schema?",
    answer: "No, you can also use Microdata or RDFa formats to mark up your existing HTML breadcrumbs. However, Google officially recommends using JSON-LD. JSON-LD is significantly easier to implement, maintain, and troubleshoot because it separates the schema logic from your HTML layout.",
  }
];

const content = (
  <div className="space-y-6 text-gray-700 leading-relaxed">
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Breadcrumb Schema</h2>
    <p>
      Breadcrumbs are a navigational aid used in user interfaces to help users keep track of their locations within websites. When applied to SEO, Breadcrumb Schema (specifically the <code>BreadcrumbList</code> structured data type) translates this visual navigation into a machine-readable format that search engines like Google can easily understand. 
    </p>
    <p>
      By clearly defining the hierarchy of your website through structured data, you provide search engine bots with a distinct map of how your content is categorized. This is particularly vital for e-commerce sites, large blogs, or any website with a deep, multi-tiered architecture. Our Breadcrumb Schema Generator is designed to make creating this technical JSON-LD code effortless.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SEO Benefits of Breadcrumb Structured Data</h2>
    <p>
      Implementing breadcrumb schema offers several significant advantages for your search engine optimization strategy:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Enhanced Search Appearance:</strong> Instead of displaying a raw, potentially messy URL in the search results (e.g., <code>site.com/category/sub-category/product-name</code>), Google will display a clean, easily readable breadcrumb trail (e.g., <code>Site &gt; Category &gt; Sub-Category &gt; Product</code>).</li>
      <li><strong>Improved Click-Through Rate (CTR):</strong> A cleaner, more professional search snippet builds trust and provides context, which has been shown to positively impact the percentage of users who click on your link.</li>
      <li><strong>Better Site Crawlability:</strong> Structured data helps search engine crawlers discover the relationships between different pages on your site, ensuring all your important categories and parent pages are properly indexed and associated.</li>
      <li><strong>Reduced Bounce Rate:</strong> When users can clearly see the category of the page in the search results before they click, they are more likely to find what they are looking for, reducing the chances they immediately bounce back to Google.</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Our Generator Works</h2>
    <p>
      Our free tool automates the process of writing complex JSON-LD code. You don't need to understand programming or schema.org vocabulary to use it. Here is how you can generate your schema in seconds:
    </p>
    <ol className="list-decimal pl-6 space-y-2">
      <li><strong>Start at the Root:</strong> Begin with your homepage. In "Level 1", enter the name (e.g., "Home") and the absolute URL of your website's home page.</li>
      <li><strong>Map the Hierarchy:</strong> Click "Add Next Level" to represent the next step in the navigation path. For example, if you are generating schema for a product page, Level 2 might be the broad Category, and Level 3 might be the Sub-Category.</li>
      <li><strong>End on the Current Page:</strong> The final level in your breadcrumb list should represent the page the user is currently viewing. Enter the page's name and its specific URL.</li>
      <li><strong>Copy and Paste:</strong> As you fill out the fields, valid JSON-LD code is generated instantly. Once complete, copy the code and inject it into the HTML (preferably the <code>&lt;head&gt;</code>) of the target webpage.</li>
    </ol>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices for Implementing Breadcrumbs</h2>
    <p>
      To ensure Google processes your schema correctly and awards you with rich snippets, adhere to the following best practices:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Reflect the Visual UI:</strong> Your JSON-LD structured data must match the visible breadcrumb navigation on your webpage. Do not construct a schema hierarchy that a human user cannot see and click on.</li>
      <li><strong>Use Absolute URLs:</strong> Always use full, absolute URLs (including <code>https://</code> and your domain name) rather than relative URLs (like <code>/category/page</code>).</li>
      <li><strong>Keep it Logical:</strong> Ensure the progression from Level 1 onwards makes logical sense. It should move from the broadest category down to the most specific page.</li>
      <li><strong>Don't Skip Levels:</strong> Avoid jumping from the Homepage straight to a deeply buried sub-page while skipping the intermediate categories. The breadcrumb must accurately reflect the site's true architecture.</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Breadcrumb Schema</h2>
    <p>
      After you have implemented the code on your site, it is highly recommended that you test it. Use the official Google Rich Results Test tool. Simply paste your URL or the raw code into the tool, and Google will inform you if the BreadcrumbList schema is valid or if there are syntax errors. 
    </p>
    <p>
      Common errors include missing URLs, incorrect position numbering (our tool handles the numbering automatically!), or unescaped characters in the page names. If you encounter errors, double-check your inputs in the generator and try again. Remember, even with perfect code, Google ultimately decides whether or not to display the rich snippets based on their own complex algorithms and quality checks.
    </p>
  </div>
);

export default function BreadcrumbSchemaGeneratorPage() {
  const toolUrl = "https://tasklora.com/seo/breadcrumb-schema-generator";

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Breadcrumb Schema Generator",
    url: toolUrl,
    description: "Free tool to generate BreadcrumbList JSON-LD structured data for websites.",
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
        name: "Breadcrumb Schema Generator",
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
        title="Breadcrumb Schema Generator"
        description="Easily map out your site's hierarchy and generate perfect BreadcrumbList JSON-LD structured data. Help search engines understand your structure and enhance your search results appearance."
        path="/seo/breadcrumb-schema-generator"
        content={content}
        faqs={faqs}
      >
        <div className="my-8">
          <BreadcrumbClient />
        </div>
      </ToolLayout>
    </>
  );
}
