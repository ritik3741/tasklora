"use client";

import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { PDFUpload } from "@/components/tools/PDFUpload";
import { Button } from "@/components/ui/Button";
import { Download, Loader2, ArrowUp, ArrowDown } from "lucide-react";

export function MergePDFClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdf, setMergedPdf] = useState<Uint8Array | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
    setMergedPdf(null);
    setError(null);
  };

  const handleRemove = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setMergedPdf(null);
    setError(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setFiles(prev => {
      const arr = [...prev];
      const temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
      return arr;
    });
    setMergedPdf(null);
  };

  const moveDown = (index: number) => {
    if (index === files.length - 1) return;
    setFiles(prev => {
      const arr = [...prev];
      const temp = arr[index + 1];
      arr[index + 1] = arr[index];
      arr[index] = temp;
      return arr;
    });
    setMergedPdf(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);

    try {
      const mergedPdfDoc = await PDFDocument.create();
      
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdfDoc.addPage(page);
        });
      }

      const pdfBytes = await mergedPdfDoc.save();
      setMergedPdf(pdfBytes);
      import("@/lib/analytics").then((m) => m.trackPdfMerge(files.length));
    } catch (err: any) {
      import("@/lib/logger").then((m) => m.logger.pdfError("Merge", err));
      setError("Failed to merge PDFs. Please make sure all files are valid PDF documents.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!mergedPdf) return;
    const blob = new Blob([new Uint8Array(mergedPdf)], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "merged-document.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col space-y-6 bg-surface p-6 rounded-xl border border-border">
      <PDFUpload onFilesSelected={handleFilesSelected} accept="application/pdf" multiple={true} maxFiles={50} />
      
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Selected Files ({files.length})</h3>
          
          <div className="w-full space-y-2">
            {files.map((file, index) => (
              <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="font-medium text-sm truncate">{file.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => moveUp(index)} disabled={index === 0} className="p-1 hover:bg-surface rounded disabled:opacity-30">
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => moveDown(index)} disabled={index === files.length - 1} className="p-1 hover:bg-surface rounded disabled:opacity-30">
                    <ArrowDown className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleRemove(index)} className="p-1 hover:bg-red-500/10 hover:text-red-500 rounded text-text/50 transition-colors ml-2">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {!mergedPdf && (
            <div className="flex justify-center pt-4">
              <Button onClick={handleMerge} disabled={isProcessing || files.length < 2} className="w-full sm:w-auto">
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Merging...
                  </>
                ) : (
                  "Merge PDFs"
                )}
              </Button>
            </div>
          )}
          {files.length < 2 && !mergedPdf && (
            <p className="text-sm text-center text-text/60">Add at least one more PDF to merge.</p>
          )}

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {mergedPdf && (
            <div className="p-4 bg-primary/10 rounded-lg flex flex-col items-center space-y-4 mt-6">
              <h3 className="text-lg font-medium text-primary">Merge Complete!</h3>
              <p className="text-sm text-text/80">Successfully combined {files.length} documents.</p>
              <Button onClick={handleDownload} className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Merged PDF
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
