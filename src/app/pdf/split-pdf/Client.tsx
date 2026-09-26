"use client";

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { PDFUpload } from '@/components/tools/PDFUpload';

export default function ClientSplitPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [rangeInput, setRangeInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleFilesSelected = async (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];
      setFile(selectedFile);
      setError('');
      setRangeInput('');
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        setTotalPages(pdfDoc.getPageCount());
      } catch (err) {
        setError('Failed to load PDF. Please ensure it is a valid PDF file.');
        setFile(null);
        setTotalPages(0);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setTotalPages(0);
    setRangeInput('');
    setError('');
  };

  const parseRange = (input: string, maxPages: number): number[] => {
    const pages = new Set<number>();
    const parts = input.split(',').map((p) => p.trim());

    for (const part of parts) {
      if (!part) continue;

      if (part.includes('-')) {
        const [startStr, endStr] = part.split('-');
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);

        if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
          throw new Error(`Invalid range: ${part}. Pages must be between 1 and ${maxPages}.`);
        }

        for (let i = start; i <= end; i++) {
          pages.add(i);
        }
      } else {
        const pageNum = parseInt(part, 10);
        if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
          throw new Error(`Invalid page number: ${part}. Must be between 1 and ${maxPages}.`);
        }
        pages.add(pageNum);
      }
    }

    if (pages.size === 0) {
      throw new Error('Please enter a valid page range.');
    }

    return Array.from(pages).sort((a, b) => a - b);
  };

  const handleSplit = async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const pageNumbersToExtract = parseRange(rangeInput, totalPages);
      
      const arrayBuffer = await file.arrayBuffer();
      const originalPdf = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();

      // pdf-lib uses 0-based indexing for pages
      const indices = pageNumbersToExtract.map((num) => num - 1);
      const copiedPages = await newPdf.copyPages(originalPdf, indices);

      for (const page of copiedPages) {
        newPdf.addPage(page);
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      link.download = `${fileNameWithoutExt}_extracted.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (err: any) {
      setError(err.message || 'An error occurred while splitting the PDF.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <PDFUpload
          onFilesSelected={handleFilesSelected}
          multiple={false}
          maxFiles={1}
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <div>
              <h3 className="font-medium text-gray-900">{file.name}</h3>
              <p className="text-sm text-gray-500">Total pages: {totalPages}</p>
            </div>
            <button
              onClick={handleRemoveFile}
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Remove
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-1">
                Pages to extract (e.g., 1-5, 8, 11-13)
              </label>
              <input
                type="text"
                id="range"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder="e.g., 1-3, 5"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              onClick={handleSplit}
              disabled={isProcessing || !rangeInput.trim()}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Split & Download PDF'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
