"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, useState, useEffect } from "react";

interface Props {
  value?: File | string;
  onChange?: (file: File | null) => void;
  image?: string;
}

const LogoUpload = ({
  value,
  onChange,
  image = "/Images/UserProfile.jpg",
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    image || "/Images/UserProfile.jpg"
  );

  // Update preview when value changes
  useEffect(() => {
    if (value instanceof File) {
      const imageURL = URL.createObjectURL(value);
      setImagePreview(imageURL);

      // Cleanup function to revoke object URL
      return () => URL.revokeObjectURL(imageURL);
    } else if (typeof value === "string" && value) {
      setImagePreview(value);
    }
  }, [value]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Call onChange to update the form field
      onChange?.(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagePreview(image || "/Images/UserProfile.jpg");
    onChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="relative mx-auto w-[150px] h-[150px] p-2 rounded-full border-2 border-secondary group">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={imagePreview || "/placeholder.svg"}
          alt="Developer Logo"
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-110"
          crossOrigin="anonymous"
        />
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute bottom-0 right-0 rounded-full"
        onClick={handleClick}
      >
        <Plus className="w-4 h-4" />
      </Button>

      {/* Remove button - only show if there's a custom image */}
      {value && (
        <Button
          type="button"
          variant="destructive"
          size="icon"
          className="absolute top-3 left-2 rounded-full w-6 h-6"
          onClick={handleRemoveImage}
        >
          <span className="text-xs">×</span>
        </Button>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default LogoUpload;
