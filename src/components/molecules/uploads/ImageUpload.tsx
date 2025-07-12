"use client";

import type React from "react";

import { useState, useRef, useCallback, useEffect } from "react";
import { Upload, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageUploadProps {
  value?: File | string;
  onChange: (file: File | null) => void;
  className?: string;
  accept?: string;
  maxSize?: number; // in MB
}

export default function ImageUpload({
  value,
  onChange,
  className,
  accept = "image/*",
  maxSize = 5,
}: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate preview URL when value changes
  useEffect(() => {
    if (value instanceof File) {
      const url = URL.createObjectURL(value);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof value === "string" && value) {
      setPreview(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleFileSelect = useCallback(
    (file: File) => {
      // Validate file size
      if (file.size > maxSize * 1024 * 1024) {
        alert(`حجم الملف يجب أن يكون أقل من ${maxSize} ميجابايت`);
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("يرجى اختيار ملف صورة صالح");
        return;
      }

      onChange(file);
    },
    [onChange, maxSize]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleRemove = useCallback(() => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [onChange]);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  if (preview) {
    return (
      <div className={cn("relative group", className)}>
        <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
          <Image
            src={preview || "/placeholder.svg"}
            alt="Uploaded image"
            className="w-full h-56 object-cover"
            width={700}
            height={400}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleClick}
                className="bg-white hover:bg-gray-100"
              >
                <Camera className="h-4 w-4 mr-1" />
                استبدال
              </Button>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={handleRemove}
              >
                <X className="h-4 w-4 mr-1" />
                حذف
              </Button>
            </div>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200",
          isDragOver
            ? "border-primary bg-primary/5"
            : "border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100"
        )}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-700 mb-2">
          اختر صورة أو اسحبها هنا
        </p>
        <p className="text-sm text-gray-500">
          PNG, JPG, GIF حتى {maxSize} ميجابايت
        </p>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
}
