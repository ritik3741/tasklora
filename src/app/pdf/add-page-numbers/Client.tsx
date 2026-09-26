"use client";

import React, { useState } from "react";
import { PDFUpload, FileList } from "@/components/tools/PDFUpload";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Download, Settings2, Loader2 } from "lucide-react";

type Position = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export default function Client() {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<Position>("bottom-center");
  const [startNumber, setStartNumber] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleProcess = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError("");

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      
      const pages = pdfDoc.getPages();
      
      pages.forEach((page, index) => {
        const { width, height } = page.getSize();
        const text = String(startNumber + index);
        const fontSize = 12;
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const textHeight = font.heightAtSize(fontSize);
        
        const margin = 30;
        let x = 0;
        let y = 0;
        
        switch (position) {
          case "top-left":
            x = margin;
            y = height - margin - textHeight;
            break;
          case "top-center":
            x = (width - textWidth) / 2;
            y = height - margin - textHeight;
            break;
          case "top-right":
            x = width - margin - textWidth;
            y = height - margin - textHeight;
            break;
          case "bottom-left":
            x = margin;
            y = margin;
            break;
          case "bottom-center":
            x = (width - textWidth) / 2;
            y = margin;
            break;
          case "bottom-right":
            x = width - margin - textWidth;
            y = margin;
            break;
        }

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `numbered_${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setError("Failed to add page numbers. The PDF might be encrypted or corrupted.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <PDFUpload onFilesSelected={(files) => setFile(files[0])} multiple={false} />
      ) : (
        <div className="space-y-6">
          <FileList files={[file]} onRemove={() => setFile(null)} />
          
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-primary" />
              Settings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-text/80">Position</label>
                <select 
                  value={position}
                  onChange={(e) => setPosition(e.target.value as Position)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="top-left">Top Left</option>
                  <option value="top-center">Top Center</option>
                  <option value="top-right">Top Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-center">Bottom Center</option>
                  <option value="bottom-right">Bottom Right</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-text/80">Starting Number</label>
                <input 
                  type="number" 
                  min={1}
                  value={startNumber}
                  onChange={(e) => setStartNumber(parseInt(e.target.value) || 1)}
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
              onClick={handleProcess}
              disabled={isProcessing}
              className="mt-6 w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Add Page Numbers & Download
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
