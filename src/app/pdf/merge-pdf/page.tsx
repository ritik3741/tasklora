import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { MergePDFClient } from "./Client";

const title = "Merge PDF Online - Combine PDFs Free";
const description = "Combine multiple PDF files into one easily and securely. Our free online PDF merger works in your browser with no upload required.";
const path = "/pdf/merge-pdf";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

export default function MergePDFPage() {
  const faqs = [
    {
      question: "How do I merge PDF files?",
      answer: "Simply drag and drop or select multiple PDF files using the upload area above. Once added, you can use the up and down arrows to arrange them in your preferred order, then click 'Merge PDFs' to combine them into a single file.",
    },
    {
      question: "Is there a limit to how many files I can merge?",
      answer: "You can select up to 50 files at a time. Because the processing is done locally in your browser, the practical limit depends on your device's memory. Merging a few dozen files should be effortless on modern computers.",
    },
    {
      question: "Are my PDF files safe?",
      answer: "Absolutely. All merging operations are performed locally on your device via WebAssembly and JavaScript. We do not upload, store, or transmit your files to our servers. Your private data remains private.",
    },
    {
      question: "Can I change the order of the PDFs before merging?",
      answer: "Yes! After selecting your files, they will appear in a list. You can use the provided 'Up' and 'Down' arrow buttons to reorder them exactly how you want them to appear in the final merged document.",
    },
    {
      question: "Will the formatting of my PDFs change?",
      answer: "No, the merging process simply stitches the pages together. Your original formatting, text, images, and page dimensions will be preserved exactly as they are in the source documents.",
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation is required. The tool runs completely in your web browser and works on any operating system, including Windows, Mac, Linux, and even mobile devices.",
    },
  ];

  const content = (
    <>
      <h2>What is the Merge PDF Tool?</h2>
      <p>The Merge PDF Tool is a free, powerful online utility that allows you to combine multiple separate PDF documents into a single, unified file. Whether you are compiling a report, merging invoices for accounting, or organizing study materials, this tool simplifies document management directly within your web browser.</p>

      <h2>Why Use a PDF Merger?</h2>
      <p>Dealing with multiple PDF files can be chaotic and difficult to manage. Here is why you should consider merging them:</p>
      <ul>
        <li><strong>Better Organization:</strong> Keep related documents together. Instead of searching through dozens of separate files, you can have a single, neatly organized document.</li>
        <li><strong>Easier Sharing:</strong> When sharing files with colleagues or clients, sending one consolidated PDF is much more professional and convenient than attaching multiple files to an email.</li>
        <li><strong>Streamlined Printing:</strong> If you need hard copies, sending one file to the printer is much faster than opening and printing each file individually.</li>
        <li><strong>Simplified Archiving:</strong> Combined files are easier to store, catalog, and back up for long-term archiving.</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li><strong>100% Secure and Private:</strong> No server uploads are required. All file processing occurs locally on your device.</li>
        <li><strong>Drag-and-Drop Reordering:</strong> Easily organize your files in the exact sequence you want them to appear.</li>
        <li><strong>High Speed:</strong> Since the files aren't uploaded over the internet, merging happens almost instantly.</li>
        <li><strong>Cross-Device Support:</strong> Works on desktop and mobile browsers alike without needing an app installation.</li>
        <li><strong>Unlimited Usage:</strong> Merge as many documents as you need without hitting a paywall or daily limit.</li>
      </ul>

      <h2>Step-by-Step Guide</h2>
      <ol>
        <li><strong>Upload Files:</strong> Click the upload box or drag multiple PDF files into the designated area. You can also add more files later.</li>
        <li><strong>Arrange the Order:</strong> Review the list of added files. Use the up and down arrow buttons next to each file to arrange them in the correct sequence. The top file will become the first pages of the merged document.</li>
        <li><strong>Merge:</strong> Click the "Merge PDFs" button. The tool will stitch the files together.</li>
        <li><strong>Download:</strong> Once the process is complete, click "Download Merged PDF" to save the new document to your computer.</li>
      </ol>

      <h2>Privacy and Security</h2>
      <p>When dealing with sensitive business data, personal records, or legal documents, privacy is paramount. Traditional online PDF tools upload your files to a remote server, process them, and send them back, exposing your data to potential interception or retention. Our tool fundamentally shifts this paradigm by bringing the processing logic to your browser. By utilizing the <code>pdf-lib</code> library directly in the client, your files never leave your computer's memory. This guarantees total data confidentiality.</p>

      <h2>Best Practices for Merging PDFs</h2>
      <p>To get the best results when combining documents:</p>
      <ul>
        <li>Double-check the order of your files before hitting merge to save time.</li>
        <li>Ensure all source documents are not password-protected, as encrypted files cannot be merged without first entering the password (a feature not currently supported in this client-side tool).</li>
        <li>If your resulting file is too large for email, consider running it through our PDF Compressor tool afterward to reduce the file size.</li>
      </ul>
    </>
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "applicationCategory": "Utility",
    "operatingSystem": "All",
    "url": `https://tasklora.com${path}`,
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
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tasklora.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "PDF Tools",
        "item": "https://tasklora.com/pdf"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://tasklora.com${path}`
      }
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

  return (
    <ToolLayout 
      title={title} 
      description={description} 
      path={path} 
      content={content} 
      faqs={faqs}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <MergePDFClient />
    </ToolLayout>
  );
}
