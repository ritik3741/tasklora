"use client";

import * as React from "react";
import { PDFUpload, FileList } from "@/components/tools/PDFUpload";
import { PDFDocument } from "pdf-lib";
import { AlertCircle, Download, ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageItem {
  id: string;
  originalIndex: number;
}

export default function ReorderPagesClient() {
  const [file, setFile] = React.useState<File | null>(null);
  const [pages, setPages] = React.useState<PageItem[]>([]);
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
        const pageCount = pdfDoc.getPageCount();
        
        const initialPages = Array.from({ length: pageCount }, (_, i) => ({
          id: `page-${i}`,
          originalIndex: i,
        }));
        setPages(initialPages);
      } catch {
        setError("Could not read the PDF file. Please ensure it is a valid PDF.");
        setFile(null);
        setPages([]);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPages([]);
    setError(null);
  };

  const movePageLeft = (index: number) => {
    if (index === 0) return;
    const newPages = [...pages];
    [newPages[index - 1], newPages[index]] = [newPages[index], newPages[index - 1]];
    setPages(newPages);
  };

  const movePageRight = (index: number) => {
    if (index === pages.length - 1) return;
    const newPages = [...pages];
    [newPages[index + 1], newPages[index]] = [newPages[index], newPages[index + 1]];
    setPages(newPages);
  };

  const removePage = (index: number) => {
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
  };

  const handleSave = async () => {
    if (!file || pages.length === 0) return;

    setIsProcessing(true);
    setError(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const originalPdf = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();

      const pageIndices = pages.map(p => p.originalIndex);
      const copiedPages = await newPdf.copyPages(originalPdf, pageIndices);

      for (const page of copiedPages) {
        newPdf.addPage(page);
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = `reordered_${file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while saving the reordered PDF.");
      } else {
        setError("An error occurred while saving the reordered PDF.");
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
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Reorder Pages</h3>
              <p className="text-sm text-text/60">
                {pages.length} page{pages.length !== 1 ? 's' : ''} remaining
              </p>
            </div>
            
            {pages.length === 0 ? (
              <div className="p-8 text-center text-text/50 bg-background rounded-lg border border-dashed border-border">
                All pages removed. Please upload the file again or you won&apos;t be able to save.
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 p-4 bg-background rounded-lg border border-border max-h-[400px] overflow-y-auto">
                {pages.map((page, index) => (
                  <div 
                    key={page.id} 
                    className="flex flex-col items-center p-3 bg-surface border border-border rounded-lg shadow-sm w-32 shrink-0 group hover:border-primary/50 transition-colors"
                  >
                    <div className="w-full aspect-[1/1.4] bg-white rounded flex items-center justify-center border border-gray-200 mb-3 shadow-inner">
                      <span className="text-3xl font-bold text-gray-300">
                        {page.originalIndex + 1}
                      </span>
                    </div>
                    
                    <span className="text-xs font-medium text-text/70 mb-2">
                      Page {page.originalIndex + 1}
                    </span>
                    
                    <div className="flex items-center gap-1 w-full justify-center">
                      <button
                        onClick={() => movePageLeft(index)}
                        disabled={index === 0}
                        className="p-1.5 rounded hover:bg-primary/10 hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-colors"
                        title="Move left"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => removePage(index)}
                        className="p-1.5 rounded hover:bg-red-500/10 text-red-500/70 hover:text-red-500 transition-colors"
                        title="Delete page"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => movePageRight(index)}
                        disabled={index === pages.length - 1}
                        className="p-1.5 rounded hover:bg-primary/10 hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-colors"
                        title="Move right"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 text-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-border">
            <button
              onClick={handleSave}
              disabled={isProcessing || pages.length === 0}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                isProcessing || pages.length === 0
                  ? "bg-primary/50 text-primary-foreground/50 cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Save PDF
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
