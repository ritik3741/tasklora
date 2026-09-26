import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import ClientRotatePDF from './Client';

const toolName = 'Rotate PDF';
const toolDescription = 'Easily rotate individual pages or entire PDF documents by 90, 180, or 270 degrees. Completely free and secure, directly in your browser.';
const path = '/pdf/rotate-pdf';

export const metadata = generateSEO({
  title: `${toolName} - Free Online PDF Rotator`,
  description: toolDescription,
  path: path,
});

const content = `
## What is the Rotate PDF Tool?
The Rotate PDF tool is a highly efficient, web-based utility designed to correct the orientation of your PDF files. Whether you've scanned a document upside down, or have a mix of landscape and portrait pages that need unified alignment, this tool allows you to quickly rotate specific pages or the entire document by 90, 180, or 270 degrees.

## Why Rotate Your PDFs?
Incorrectly oriented pages can make a document extremely frustrating to read, especially on mobile devices or when presenting information to clients or colleagues. Our Rotate PDF tool solves this problem instantly:

- **Professionalism:** Ensure all documents you share look polished, professional, and are immediately readable without requiring the recipient to tilt their head or device.
- **Convenience:** Fix scanning errors on the fly without needing to rescan physical documents.
- **Client-Side Processing:** We value your privacy. All rotation operations occur locally in your web browser. No files are uploaded to our servers, keeping your sensitive data secure.
- **Speed:** Without the overhead of uploading and downloading large files from a server, rotation happens in milliseconds.
- **Accessibility:** Completely free to use, requiring no accounts, subscriptions, or software installations.

## Key Features
- **Flexible Rotation Angles:** Rotate pages clockwise by 90°, 180°, or 270° (equivalent to 90° counter-clockwise).
- **Granular Control:** Choose to rotate all pages in the document simultaneously or specify an individual page to fix isolated issues.
- **Instant Preview and Download:** Fast processing guarantees that your corrected document is ready for download almost instantly.
- **Secure Handling:** Powered by robust client-side technology, ensuring your document's contents never traverse the internet.
- **Universal Compatibility:** Works smoothly on Windows, Mac, Linux, and mobile operating systems via any modern web browser.

## Step-by-Step Guide: How to Rotate a PDF
Correcting your PDF's orientation is a breeze with our intuitive interface:

1. **Upload Document:** Click on the upload zone or drag and drop the PDF you wish to rotate into the application.
2. **Select Rotation Target:** Choose whether you want to apply the rotation to the *Entire Document* or to a *Specific Page*.
3. **Choose Angle:** Select the desired rotation angle: 90 Degrees, 180 Degrees, or 270 Degrees.
4. **Apply Rotation:** Click the 'Rotate PDF' button to initiate the process. The tool will rapidly apply your selected transformation.
5. **Download Result:** Once finished, the newly rotated PDF will automatically prompt for download. Save it and enjoy your properly oriented document.

## Privacy & Security Considerations
Trust is crucial when handling documents that may contain personal, financial, or confidential business information. Unlike many online PDF editors that process files on remote servers, our Rotate PDF tool operates 100% locally on your machine. 

Utilizing the powerful \`pdf-lib\` JavaScript library, the tool reads your file, applies the geometric rotation directly within your browser's memory, and generates the downloadable file locally. Your original file remains untouched, and no data is ever transmitted or stored on external servers. This makes our tool safe for enterprise and personal use alike.

## Best Practices for Rotating PDFs
- **Identify Target Pages First:** If you have a large document with only a few misaligned pages, note their page numbers before using the tool to apply specific, rather than global, rotations.
- **Standardize Orientation:** For documents intended for printing or formal presentation, standardize all pages to either portrait or landscape orientation to ensure a consistent reading experience.
- **Rename After Downloading:** To avoid confusion between the original incorrectly oriented file and the new fixed version, add a suffix like "_rotated" when saving the new document.
- **Check Mixed Formats:** Some PDFs naturally contain a mix of portrait text pages and landscape charts. Ensure you aren't accidentally rotating intentionally landscape pages when applying a global rotation.
`;

const faqs = [
  {
    question: "Is my document uploaded to a server for rotation?",
    answer: "No. Our tool processes everything locally in your web browser. Your file never leaves your device, ensuring complete privacy."
  },
  {
    question: "Can I rotate just one specific page instead of the whole document?",
    answer: "Yes! You can choose to rotate all pages or specify a single page number to apply the rotation only where it is needed."
  },
  {
    question: "What angles can I rotate my PDF pages by?",
    answer: "You can rotate pages by 90 degrees (clockwise), 180 degrees (upside down), or 270 degrees (counter-clockwise)."
  },
  {
    question: "Will rotating the PDF reduce its quality or resolution?",
    answer: "Not at all. The tool merely changes the geometric orientation metadata of the pages. The text, images, and overall quality remain exactly the same."
  },
  {
    question: "Is this tool free, and are there any file size limits?",
    answer: "The tool is 100% free with no watermarks. File size limits depend entirely on your device's memory, as the processing happens locally. Most modern devices handle typical PDFs effortlessly."
  },
  {
    question: "Do I need to install any apps to use the Rotate PDF tool?",
    answer: "No installation is required. It works directly in modern web browsers like Chrome, Safari, Firefox, and Edge on any operating system."
  }
];

export default function RotatePDFPage() {
  const schemaWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": toolName,
    "url": `https://tasklora.com${path}`,
    "description": toolDescription,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tasklora.com"
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
        "name": toolName,
        "item": `https://tasklora.com${path}`
      }
    ]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <ToolLayout
        title={toolName}
        description={toolDescription}
        path={path}
        content={content}
        faqs={faqs}
      >
        <ClientRotatePDF />
      </ToolLayout>
    </>
  );
}
