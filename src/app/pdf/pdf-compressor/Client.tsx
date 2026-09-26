"use client";

import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { PDFUpload, FileList } from "@/components/tools/PDFUpload";
import { Button } from "@/components/ui/Button";
import { Download, Loader2 } from "lucide-react";

export function PDFCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedPdf, setCompressedPdf] = useState<Uint8Array | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelected = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setCompressedPdf(null);
      setError(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setCompressedPdf(null);
    setError(null);
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const originalPdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      
      // Create a new document and copy pages to strip unused objects/garbage
      const newPdf = await PDFDocument.create();
      const pages = await newPdf.copyPages(originalPdf, originalPdf.getPageIndices());
      pages.forEach((page) => newPdf.addPage(page));

      // Save with object streams to maximize compression
      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      
      if (pdfBytes.length >= arrayBuffer.byteLength) {
        setCompressedPdf(new Uint8Array(arrayBuffer));
      } else {
        setCompressedPdf(pdfBytes);
      }
    } catch (err) {
      setError("Failed to compress PDF. Please make sure it's a valid PDF file.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressedPdf || !file) return;
    const blob = new Blob([new Uint8Array(compressedPdf)], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed-${file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col space-y-6 bg-surface p-6 rounded-xl border border-border">
      {!file ? (
        <PDFUpload onFilesSelected={handleFileSelected} accept="application/pdf" />
      ) : (
        <div className="space-y-6">
          <FileList files={[file]} onRemove={handleRemove} />
          
          {!compressedPdf && (
            <div className="flex justify-center">
              <Button onClick={handleCompress} disabled={isProcessing} className="w-full sm:w-auto">
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Compressing...
                  </>
                ) : (
                  "Compress PDF"
                )}
              </Button>
            </div>
          )}

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {compressedPdf && (
            <div className="p-4 bg-primary/10 rounded-lg flex flex-col items-center space-y-4">
              <h3 className="text-lg font-medium text-primary">Compression Complete!</h3>
              <div className="flex space-x-6 text-sm text-text/80">
                <div>Original: <span className="font-semibold">{(file.size / 1024 / 1024).toFixed(2)} MB</span></div>
                <div>Compressed: <span className="font-semibold">{(compressedPdf.length / 1024 / 1024).toFixed(2)} MB</span></div>
                <div>Saved: <span className="font-semibold text-green-600">
                  {Math.max(0, ((file.size - compressedPdf.length) / file.size * 100)).toFixed(1)}%
                </span></div>
              </div>
              <Button onClick={handleDownload} className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Compressed PDF
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
