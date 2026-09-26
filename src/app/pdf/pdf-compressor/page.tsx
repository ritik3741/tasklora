import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PDFCompressorClient } from "./Client";

const title = "Free Online PDF Compressor";
const description = "Compress and reduce PDF file size online for free without losing quality. Optimize PDFs for email, web, and faster sharing.";
const path = "/pdf/pdf-compressor";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

export default function PDFCompressorPage() {
  const faqs = [
    {
      question: "How does the PDF compressor work?",
      answer: "Our tool analyzes your PDF file and re-saves it using optimized data structures. While it doesn't perform aggressive image downsampling natively in the browser, removing unnecessary metadata and object streams often results in a smaller file size.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes! Everything happens entirely within your web browser. We never upload your PDF files to our servers, ensuring complete privacy and security for your sensitive documents.",
    },
    {
      question: "Will compressing my PDF reduce its quality?",
      answer: "No, our PDF compressor uses a lossless or near-lossless optimization technique. Text and vector graphics remain sharp, and we simply reorganize the internal structure of the PDF to make it more efficient.",
    },
    {
      question: "Can I compress multiple PDFs at once?",
      answer: "Currently, this specific tool is designed to optimize one PDF file at a time to ensure maximum stability in your browser. You can, however, quickly process multiple files sequentially without any usage limits.",
    },
    {
      question: "Why did my PDF size increase after compression?",
      answer: "In some rare cases, if a PDF is already heavily compressed or uses very specific proprietary optimizations, re-saving it might result in a slightly larger file. If this happens, you can simply keep your original file.",
    },
    {
      question: "Are there any file size limits?",
      answer: "Because processing happens in your browser, the maximum file size depends on your device's memory (RAM). Generally, files up to 50MB-100MB should process smoothly on modern devices.",
    },
  ];

  const content = (
    <>
      <h2>What is the PDF Compressor Tool?</h2>
      <p>The PDF Compressor Tool is a free, browser-based utility designed to help you reduce the file size of your PDF documents. Large PDFs can be difficult to share via email, slow to upload to portals, and cumbersome to store. Our tool optimizes the internal structure of your PDFs to make them lighter and more manageable.</p>

      <h2>Why Use a PDF Compressor?</h2>
      <p>There are several reasons why compressing a PDF is beneficial:</p>
      <ul>
        <li><strong>Email Attachments:</strong> Many email providers have strict attachment size limits (often 25MB or less). Compressing your PDF ensures it goes through without bouncing.</li>
        <li><strong>Faster Uploads and Downloads:</strong> Smaller files transfer significantly faster, saving time for both you and the recipient.</li>
        <li><strong>Storage Optimization:</strong> Whether you are storing files on your local hard drive, mobile device, or in cloud storage, smaller PDFs consume less space and help you stay within storage quotas.</li>
        <li><strong>Better Web Performance:</strong> If you are hosting a PDF on a website, a compressed file will load faster for visitors, improving their user experience and potentially boosting your site's SEO.</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li><strong>100% Client-Side Processing:</strong> Your files never leave your device. All processing is done locally in your browser, guaranteeing absolute privacy.</li>
        <li><strong>No Quality Loss:</strong> The tool focuses on structural optimization rather than aggressive image degradation, keeping your documents looking crisp and professional.</li>
        <li><strong>Completely Free:</strong> There are no hidden fees, subscriptions, or watermarks added to your compressed files.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Works seamlessly on Windows, Mac, Linux, and modern mobile browsers.</li>
      </ul>

      <h2>Step-by-Step Guide</h2>
      <ol>
        <li><strong>Upload your file:</strong> Click the upload area or drag and drop your PDF file into the designated box.</li>
        <li><strong>Initiate compression:</strong> Once the file is loaded, click the "Compress PDF" button to start the optimization process.</li>
        <li><strong>Review results:</strong> The tool will display the original size, the new compressed size, and the percentage of space saved.</li>
        <li><strong>Download:</strong> Click "Download Compressed PDF" to save the optimized file directly to your device.</li>
      </ol>

      <h2>Privacy and Security</h2>
      <p>Security is our top priority. Unlike many online PDF tools that require you to upload your sensitive documents to a remote server, our PDF Compressor utilizes modern WebAssembly and JavaScript technologies to process everything right on your own machine. Your data is never transmitted over the internet, and no copies of your files are ever stored on our servers. This makes our tool safe for confidential business documents, legal paperwork, and personal files.</p>

      <h2>Best Practices for PDF Optimization</h2>
      <p>While our tool does an excellent job of optimizing the PDF structure, you can further reduce file sizes by following these best practices when creating the original PDF:</p>
      <ul>
        <li>Avoid using excessively high-resolution images unless necessary for print. For web use, 72 to 150 DPI is usually sufficient.</li>
        <li>Embed only the necessary fonts, or subset them to include only the characters used in the document.</li>
        <li>Flatten layers if you are exporting from design software like Adobe Illustrator or Photoshop.</li>
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
      
      <PDFCompressorClient />
    </ToolLayout>
  );
}
