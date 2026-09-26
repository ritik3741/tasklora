import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import ExtractPagesClient from "./Client";

const title = "Extract PDF Pages";
const description = "Extract specific pages from a PDF document to create a new PDF. Free, fast, and works offline in your browser.";
const path = "/pdf/extract-pages";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "How do I extract pages from a PDF?",
    answer: "Simply upload your PDF file, enter the page numbers or ranges you want to extract (for example, '1, 3, 5-8'), and click the extract button. A new PDF containing only those pages will be generated and downloaded instantly."
  },
  {
    question: "Are my PDF files uploaded to a server?",
    answer: "No, all PDF processing happens entirely in your web browser. Your files are never uploaded to any external servers, ensuring complete privacy and security for your sensitive documents."
  },
  {
    question: "Can I extract multiple page ranges at once?",
    answer: "Yes, you can enter multiple pages and ranges separated by commas. For example, '1, 3, 5-8' will extract page 1, page 3, and pages 5 through 8 into a single new PDF document."
  },
  {
    question: "Is there a limit to how many pages I can extract?",
    answer: "There are no strict limits on the number of pages you can extract. However, processing very large PDF files with thousands of pages might take longer depending on your device&apos;s processing power."
  },
  {
    question: "Does extracting pages reduce the quality of the PDF?",
    answer: "No, the extracted pages retain their original quality, including text, images, and formatting. The tool simply copies the pages into a new file without compressing or altering their contents."
  },
  {
    question: "Is this tool free to use?",
    answer: "Yes, our PDF extraction tool is 100% free to use. There are no hidden fees, subscriptions, or watermarks added to your documents."
  }
];

export default function ExtractPagesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "url": `https://tasklora.com${path}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tasklora.com" },
      { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://tasklora.com/pdf" },
      { "@type": "ListItem", "position": 3, "name": title, "item": `https://tasklora.com${path}` }
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

  const content = (
    <>
      <h2>What is the Extract PDF Pages Tool?</h2>
      <p>
        The <strong>Extract PDF Pages</strong> tool is a powerful, free online utility designed to help you pull specific pages from a larger PDF document and save them as a new, smaller PDF file. Whether you need to share just a single chapter of an e-book, a few pages of a lengthy report, or specific invoices from a monthly statement, this tool makes the process quick and effortless.
      </p>
      <p>
        Instead of downloading bulky desktop software or paying for premium subscriptions, you can extract pages directly in your web browser. This tool utilizes modern browser technologies to process your PDFs locally, ensuring maximum performance without the need to upload files to a cloud server.
      </p>

      <h2>Why Use Our PDF Extractor?</h2>
      <p>
        Managing large PDF files can be cumbersome. They take up significant storage space and can be difficult to share via email or messaging apps due to file size limits. By extracting only the necessary pages, you create streamlined documents that are easier to handle and read.
      </p>
      <ul>
        <li><strong>Share relevant information:</strong> Send only the pages that matter to your colleagues or clients, saving them time.</li>
        <li><strong>Reduce file size:</strong> Smaller PDFs are faster to upload, download, and email.</li>
        <li><strong>Organize documents:</strong> Break down massive manuals or reports into modular, bite-sized sections.</li>
      </ul>

      <h2>Key Features</h2>
      <p>
        Our Extract PDF Pages tool offers a robust set of features to handle all your document processing needs:
      </p>
      <ul>
        <li><strong>Custom Page Ranges:</strong> Easily select individual pages or specify ranges (e.g., 1, 3, 5-8).</li>
        <li><strong>100% Client-Side Processing:</strong> All processing is done locally on your device for absolute privacy.</li>
        <li><strong>High-Speed Extraction:</strong> Experience instantaneous results, even with large files.</li>
        <li><strong>No Watermarks:</strong> We never add branding or watermarks to your extracted PDFs.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Works seamlessly on Windows, macOS, Linux, and mobile devices.</li>
      </ul>

      <h2>Step-by-Step Guide: How to Extract Pages</h2>
      <p>
        Using our tool is incredibly simple and requires no technical expertise. Follow these easy steps:
      </p>
      <ol>
        <li><strong>Upload your PDF:</strong> Drag and drop your file into the designated area, or click to browse your device and select a file.</li>
        <li><strong>Specify the pages:</strong> In the input field, type the page numbers or ranges you wish to extract. Use commas to separate individual pages and hyphens for ranges (e.g., &quot;1, 3, 5-10&quot;).</li>
        <li><strong>Preview the selection:</strong> The tool will validate your input to ensure it falls within the document&apos;s total page count.</li>
        <li><strong>Extract and download:</strong> Click the "Extract Pages" button. Your new PDF will be generated instantly and downloaded to your device.</li>
      </ol>

      <h2>Privacy &amp; Security First</h2>
      <p>
        We understand that your documents often contain sensitive personal or business information. That&apos;s why our Extract PDF Pages tool is built with a privacy-first approach. Unlike many other online PDF tools that require you to upload files to their servers, our application processes everything directly in your browser. 
      </p>
      <p>
        This means your files never leave your device. There is no risk of your data being intercepted during transmission, stored on a third-party server, or accessed by unauthorized individuals. Your privacy and security are completely guaranteed.
      </p>

      <h2>Best Practices for PDF Extraction</h2>
      <p>
        To get the best results when extracting pages from your PDFs, keep these best practices in mind:
      </p>
      <ul>
        <li><strong>Double-check your ranges:</strong> Always verify the page numbers before extracting to ensure you don&apos;t miss important information or include unnecessary pages.</li>
        <li><strong>Keep original files:</strong> We recommend keeping a backup of your original, full-length PDF document just in case you need access to the other pages later.</li>
        <li><strong>Use descriptive names:</strong> When saving the extracted PDF, rename it to reflect its contents (e.g., &quot;Annual_Report_Financials_Pages_10-15.pdf&quot;) for better organization.</li>
      </ul>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <ToolLayout 
        title={title} 
        description={description} 
        path={path} 
        content={content} 
        faqs={faqs}
      >
        <ExtractPagesClient />
      </ToolLayout>
    </>
  );
}
