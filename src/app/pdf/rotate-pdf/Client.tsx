"use client";

import React, { useState } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { PDFUpload } from '@/components/tools/PDFUpload';

export default function ClientRotatePDF() {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [rotationMode, setRotationMode] = useState<'all' | 'specific'>('all');
  const [specificPage, setSpecificPage] = useState<string>('');
  const [angle, setAngle] = useState<number>(90);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleFilesSelected = async (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];
      setFile(selectedFile);
      setError('');
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
    setError('');
  };

  const handleRotate = async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    let targetPageNum = -1;
    if (rotationMode === 'specific') {
      targetPageNum = parseInt(specificPage, 10);
      if (isNaN(targetPageNum) || targetPageNum < 1 || targetPageNum > totalPages) {
        setError(`Please enter a valid page number between 1 and ${totalPages}.`);
        return;
      }
    }

    setIsProcessing(true);
    setError('');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();

      if (rotationMode === 'all') {
        pages.forEach((page) => {
          const currentRotation = page.getRotation().angle;
          page.setRotation(degrees(currentRotation + angle));
        });
      } else {
        const pageIndex = targetPageNum - 1;
        const page = pages[pageIndex];
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + angle));
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      link.download = `${fileNameWithoutExt}_rotated.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (err: any) {
      setError(err.message || 'An error occurred while rotating the PDF.');
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

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rotate Target</label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="rotationMode"
                    value="all"
                    checked={rotationMode === 'all'}
                    onChange={() => setRotationMode('all')}
                  />
                  <span className="ml-2 text-gray-700">All Pages</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="rotationMode"
                    value="specific"
                    checked={rotationMode === 'specific'}
                    onChange={() => setRotationMode('specific')}
                  />
                  <span className="ml-2 text-gray-700">Specific Page</span>
                </label>
              </div>
            </div>

            {rotationMode === 'specific' && (
              <div>
                <label htmlFor="specificPage" className="block text-sm font-medium text-gray-700 mb-1">
                  Page Number (1 to {totalPages})
                </label>
                <input
                  type="number"
                  id="specificPage"
                  min={1}
                  max={totalPages}
                  value={specificPage}
                  onChange={(e) => setSpecificPage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. 1"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rotation Angle</label>
              <select
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value, 10))}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value={90}>90° Clockwise</option>
                <option value={180}>180° (Upside Down)</option>
                <option value={270}>270° Clockwise (-90°)</option>
              </select>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              onClick={handleRotate}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Rotate & Download PDF'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
