"use client";

import type React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { Upload, X, Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MultiImageUploadProps {
  value?: (File | string)[];
  onChange: (files: (File | string)[]) => void;
  className?: string;
  accept?: string;
  maxSize?: number; // in MB
  maxFiles?: number;
}

export default function MultiImageUpload({
  value = [],
  onChange,
  className,
  accept = "image/*",
  maxSize = 5,
  maxFiles = 10,
}: MultiImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate preview URLs when value changes
  useEffect(() => {
    const newPreviews: string[] = [];
    const urlsToRevoke: string[] = [];

    value.forEach((item) => {
      if (item instanceof File) {
        const url = URL.createObjectURL(item);
        newPreviews.push(url);
        urlsToRevoke.push(url);
      } else if (typeof item === "string" && item) {
        newPreviews.push(item);
      }
    });

    setPreviews(newPreviews);

    // Cleanup function to revoke URLs
    return () => {
      urlsToRevoke.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [value]);

  const handleFileSelect = useCallback(
    (files: File[]) => {
      const validFiles: File[] = [];

      for (const file of files) {
        // Check if we've reached max files limit
        if (value.length + validFiles.length >= maxFiles) {
          alert(`يمكنك رفع ${maxFiles} صور كحد أقصى`);
          break;
        }

        // Validate file size
        if (file.size > maxSize * 1024 * 1024) {
          alert(
            `حجم الملف ${file.name} يجب أن يكون أقل من ${maxSize} ميجابايت`
          );
          continue;
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
          alert(`${file.name} ليس ملف صورة صالح`);
          continue;
        }

        validFiles.push(file);
      }

      if (validFiles.length > 0) {
        onChange([...value, ...validFiles]);
      }
    },
    [onChange, maxSize, maxFiles, value]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files);
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
        handleFileSelect(Array.from(files));
      }
      // Reset input value to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFileSelect]
  );

  const handleRemove = useCallback(
    (index: number) => {
      const newValue = value.filter((_, i) => i !== index);
      onChange(newValue);
    },
    [onChange, value]
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleReplaceImage = useCallback(
    (index: number) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = accept;
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          // Validate file
          if (file.size > maxSize * 1024 * 1024) {
            alert(`حجم الملف يجب أن يكون أقل من ${maxSize} ميجابايت`);
            return;
          }
          if (!file.type.startsWith("image/")) {
            alert("يرجى اختيار ملف صورة صالح");
            return;
          }

          const newValue = [...value];
          newValue[index] = file;
          onChange(newValue);
        }
      };
      input.click();
    },
    [accept, maxSize, onChange, value]
  );

  return (
    <div className={cn("space-y-4", className)}>
      {/* Image Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 aspect-square">
                <Image
                  src={preview || "/placeholder.svg"}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => handleReplaceImage(index)}
                      className="bg-white hover:bg-gray-100"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemove(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add More Button */}
          {value.length < maxFiles && (
            <div
              onClick={handleClick}
              className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 aspect-square cursor-pointer transition-colors duration-200 flex items-center justify-center group"
            >
              <div className="text-center">
                <Plus className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">إضافة صورة</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upload Area (shown when no images or can add more) */}
      {value.length === 0 && (
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
            اختر الصور أو اسحبها هنا
          </p>
          <p className="text-sm text-gray-500">
            PNG, JPG, GIF حتى {maxSize} ميجابايت • حد أقصى {maxFiles} صور
          </p>
        </div>
      )}

      {/* Summary */}
      {value.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {value.length} من {maxFiles} صور
          </span>
          {value.length < maxFiles && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClick}
              className="text-xs bg-transparent"
            >
              <Plus className="h-3 w-3 mr-1" />
              إضافة المزيد
            </Button>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
}
