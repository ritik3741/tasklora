import { 
  Braces, CheckCircle, Hash, Lock, FileJson, 
  LayoutList, Percent, Calendar, Divide, FileDown
} from "lucide-react";

export const popularTools = [
  { title: "JSON Formatter", description: "Format and beautify your JSON data instantly with syntax highlighting.", icon: Braces, href: "/developer/json-formatter", category: "Developer" },
  { title: "JSON Validator", description: "Validate your JSON code and find syntax errors quickly.", icon: CheckCircle, href: "/developer/json-validator", category: "Developer" },
  { title: "UUID Generator", description: "Generate universally unique identifiers (UUIDs) version 4 instantly.", icon: Hash, href: "/developer/uuid-generator", category: "Developer" },
  { title: "Base64 Encoder", description: "Encode text or data to Base64 format securely in your browser.", icon: Lock, href: "/developer/base64-encoder", category: "Developer" },
  { title: "JWT Decoder", description: "Decode JSON Web Tokens (JWT) to view their payload and header claims.", icon: FileJson, href: "/developer/jwt-decoder", category: "Developer" },
  { title: "Word Counter", description: "Count words, characters, sentences, and paragraphs in your text.", icon: LayoutList, href: "/text/word-counter", category: "Text" },
  { title: "GST Calculator", description: "Calculate Goods and Services Tax (GST) easily and accurately.", icon: Percent, href: "/calculator/gst-calculator", category: "Calculator" },
  { title: "Age Calculator", description: "Calculate exact age in years, months, days, and seconds.", icon: Calendar, href: "/calculator/age-calculator", category: "Calculator" },
  { title: "EMI Calculator", description: "Calculate Equated Monthly Installment (EMI) for home or car loans.", icon: Divide, href: "/calculator/emi-calculator", category: "Calculator" },
  { title: "PDF Compressor", description: "Compress PDF files to reduce file size while maintaining quality.", icon: FileDown, href: "/pdf/compress-pdf", category: "PDF" },
];
