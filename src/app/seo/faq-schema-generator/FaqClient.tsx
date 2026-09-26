"use client";

import React, { useState, useMemo } from "react";
import { CodeBlock } from "@/components/tools/CodeBlock";

export default function FaqClient() {
  const [faqs, setFaqs] = useState([
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const jsonLd = useMemo(() => {
    const validFaqs = faqs.filter((faq) => faq.question.trim() && faq.answer.trim());
    
    if (validFaqs.length === 0) {
      return "{\n  \"//\": \"Add questions and answers to generate JSON-LD schema\"\n}";
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: validFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    return JSON.stringify(schema, null, 2);
  }, [faqs]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonLd);
    alert("Copied to clipboard!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">FAQ Entries</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter your frequently asked questions and answers below. The schema will be generated automatically in real-time.
          </p>
        </div>
        
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-gray-50 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Question #{index + 1}</span>
              {faqs.length > 1 && (
                <button
                  onClick={() => removeFaq(index)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Question</label>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => updateFaq(index, "question", e.target.value)}
                placeholder="e.g., What is your return policy?"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Answer</label>
              <textarea
                value={faq.answer}
                onChange={(e) => updateFaq(index, "answer", e.target.value)}
                placeholder="e.g., We accept returns within 30 days of purchase..."
                rows={3}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addFaq}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-medium rounded transition"
        >
          + Add Another Question
        </button>
      </div>
      
      <div className="space-y-4 h-full flex flex-col">
        <h2 className="text-xl font-semibold">Generated JSON-LD Schema</h2>
        <div className="flex-grow flex flex-col rounded-lg border overflow-hidden">
          <div className="bg-gray-800 text-gray-200 p-2 flex justify-between items-center text-sm">
            <span>JSON</span>
            <button 
              onClick={copyToClipboard}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition"
            >
              Copy Code
            </button>
          </div>
          <div className="flex-grow overflow-auto bg-gray-900 p-4">
             <CodeBlock code={jsonLd} language="json" />
          </div>
        </div>
      </div>
    </div>
  );
}
