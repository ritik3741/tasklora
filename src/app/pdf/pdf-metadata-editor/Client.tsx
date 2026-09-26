"use client";

import React, { useState, useEffect } from "react";
import { PDFUpload, FileList } from "@/components/tools/PDFUpload";
import { PDFDocument } from "pdf-lib";
import { Download, FileEdit, Loader2 } from "lucide-react";

interface Metadata {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
}

export default function Client() {
  const [file, setFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocument | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({
    title: "",
    author: "",
    subject: "",
    keywords: "",
    creator: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!file) {
      setPdfDoc(null);
      setMetadata({ title: "", author: "", subject: "", keywords: "", creator: "" });
      return;
    }

    const loadPDF = async () => {
      setIsLoading(true);
      setError("");
      try {
        const arrayBuffer = await file.arrayBuffer();
        const doc = await PDFDocument.load(arrayBuffer);
        setPdfDoc(doc);
        
        setMetadata({
          title: doc.getTitle() || "",
          author: doc.getAuthor() || "",
          subject: doc.getSubject() || "",
          keywords: doc.getKeywords() || "",
          creator: doc.getCreator() || ""
        });
      } catch (err) {
        console.error(err);
        setError("Failed to read the PDF. It might be encrypted or corrupted.");
        setFile(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [file]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMetadata(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!pdfDoc || !file) return;
    setIsSaving(true);
    setError("");

    try {
      if (metadata.title) pdfDoc.setTitle(metadata.title);
      else pdfDoc.setTitle("");

      if (metadata.author) pdfDoc.setAuthor(metadata.author);
      else pdfDoc.setAuthor("");

      if (metadata.subject) pdfDoc.setSubject(metadata.subject);
      else pdfDoc.setSubject("");

      if (metadata.keywords) pdfDoc.setKeywords([metadata.keywords]);
      else pdfDoc.setKeywords([]);

      if (metadata.creator) pdfDoc.setCreator(metadata.creator);
      else pdfDoc.setCreator("");

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `edited_${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setError("Failed to save the PDF document.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <PDFUpload onFilesSelected={(files) => setFile(files[0])} multiple={false} />
      ) : (
        <div className="space-y-6">
          <FileList files={[file]} onRemove={() => setFile(null)} />
          
          {isLoading ? (
            <div className="p-12 flex flex-col items-center justify-center text-primary">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <p>Reading PDF metadata...</p>
            </div>
          ) : (
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileEdit className="w-5 h-5 text-primary" />
                Edit Metadata
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text/80">Title</label>
                  <input 
                    type="text" 
                    name="title"
                    value={metadata.title}
                    onChange={handleChange}
                    placeholder="Document Title"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text/80">Author</label>
                  <input 
                    type="text" 
                    name="author"
                    value={metadata.author}
                    onChange={handleChange}
                    placeholder="Author Name"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text/80">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={metadata.subject}
                    onChange={handleChange}
                    placeholder="Document Subject"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text/80">Keywords</label>
                  <input 
                    type="text" 
                    name="keywords"
                    value={metadata.keywords}
                    onChange={handleChange}
                    placeholder="Comma-separated keywords"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text/80">Creator</label>
                  <input 
                    type="text" 
                    name="creator"
                    value={metadata.creator}
                    onChange={handleChange}
                    placeholder="Creator Application"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              {error && (
                <div className="mt-4 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button
                onClick={handleSave}
                disabled={isSaving || !pdfDoc}
                className="mt-8 w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Save Metadata & Download
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
