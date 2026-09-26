"use client";

import * as React from "react";
import { PDFUpload, FileList } from "@/components/tools/PDFUpload";
import { PDFDocument } from "pdf-lib";
import { AlertCircle, Download, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExtractPagesClient() {
  const [file, setFile] = React.useState<File | null>(null);
  const [pageCount, setPageCount] = React.useState<number>(0);
  const [pagesInput, setPagesInput] = React.useState<string>("");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileSelect = async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        setPageCount(pdfDoc.getPageCount());
      } catch {
        setError("Could not read the PDF file. Please ensure it is a valid PDF.");
        setFile(null);
        setPageCount(0);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPageCount(0);
    setPagesInput("");
    setError(null);
  };

  const parsePageNumbers = (input: string, maxPages: number): number[] => {
    const pages = new Set<number>();
    const parts = input.split(",").map(p => p.trim()).filter(p => p);

    for (const part of parts) {
      if (part.includes("-")) {
        const [startStr, endStr] = part.split("-").map(p => p.trim());
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);

        if (isNaN(start) || isNaN(end)) throw new Error("Invalid page range.");
        if (start < 1 || start > maxPages || end < 1 || end > maxPages) {
          throw new Error(`Page numbers must be between 1 and ${maxPages}.`);
        }
        
        const min = Math.min(start, end);
        const max = Math.max(start, end);
        
        for (let i = min; i <= max; i++) {
          pages.add(i);
        }
      } else {
        const page = parseInt(part, 10);
        if (isNaN(page)) throw new Error("Invalid page number.");
        if (page < 1 || page > maxPages) {
          throw new Error(`Page numbers must be between 1 and ${maxPages}.`);
        }
        pages.add(page);
      }
    }

    if (pages.size === 0) {
      throw new Error("Please enter at least one valid page number.");
    }

    return Array.from(pages).sort((a, b) => a - b);
  };

  const handleExtract = async () => {
    if (!file) return;

    setIsProcessing(true);
    setError(null);

    try {
      const pagesToExtract = parsePageNumbers(pagesInput, pageCount);
      
      const arrayBuffer = await file.arrayBuffer();
      const originalPdf = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();

      // Pages are 0-indexed in pdf-lib
      const copiedPages = await newPdf.copyPages(
        originalPdf, 
        pagesToExtract.map(p => p - 1)
      );

      for (const page of copiedPages) {
        newPdf.addPage(page);
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = `extracted_${file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while extracting pages.");
      } else {
        setError("An error occurred while extracting pages.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <PDFUpload onFilesSelected={handleFileSelect} multiple={false} />
      ) : (
        <div className="space-y-6 bg-surface p-6 rounded-xl border border-border">
          <div>
            <h3 className="text-lg font-semibold mb-2">Selected Document</h3>
            <FileList files={[file]} onRemove={handleRemoveFile} />
            <p className="text-sm text-text/60 mt-2">
              Total pages: <span className="font-medium text-text">{pageCount}</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Extraction Settings
            </h3>
            
            <div className="space-y-2">
              <label htmlFor="pages" className="text-sm font-medium text-text">
                Pages to extract (e.g., 1, 3, 5-8)
              </label>
              <input
                id="pages"
                type="text"
                value={pagesInput}
                onChange={(e) => setPagesInput(e.target.value)}
                placeholder={`1-${Math.min(5, pageCount)}`}
                className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 text-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-border">
            <button
              onClick={handleExtract}
              disabled={isProcessing || !pagesInput.trim()}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                isProcessing || !pagesInput.trim()
                  ? "bg-primary/50 text-primary-foreground/50 cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Extract Pages
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
