"use client";

import type React from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  productImages: {
    mainImage: string;
    secondaryImages: string[];
  };
  productName?: string;
}

const GalleryImages = ({
  productImages,
  productName = "Product",
}: ProductGalleryProps) => {
  const { mainImage, secondaryImages } = productImages;

  console.log(mainImage);

  // Combine all images (main + secondary) for the gallery
  const allImages = [...secondaryImages].filter(Boolean); // Remove any null/undefined images
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Ensure selectedImageIndex is always valid
  useEffect(() => {
    if (selectedImageIndex >= allImages.length) {
      setSelectedImageIndex(0);
    }
  }, [allImages.length, selectedImageIndex]);

  const selectImage = (index: number) => {
    if (index >= 0 && index < allImages.length) {
      setSelectedImageIndex(index);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectImage(index);
    }
  };

  // If no images available, show placeholder
  if (allImages.length === 0) {
    return (
      <div className="w-full mx-auto">
        <div className="aspect-square w-full overflow-hidden rounded-lg border bg-primary flex items-center justify-center">
          <Image
            src="/placeholder.svg"
            alt={`${productName} placeholder`}
            width={400}
            height={400}
            className="opacity-50"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto space-y-4">
      {/* Main Image Display */}
      <div className="relative w-full aspect-square overflow-hidden rounded-lg border bg-gray-100 shadow-md">
        <Image
          src={allImages[selectedImageIndex] || "/placeholder.svg"}
          alt={`${productName} - Image ${selectedImageIndex + 1} of ${
            allImages.length
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-opacity duration-300"
          priority={selectedImageIndex === 0}
        />

        {/* Image counter */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {selectedImageIndex + 1} / {allImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Images Carousel - Only show if more than 1 image */}
      {allImages.length > 1 && (
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-3 py-2 px-2">
              {allImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-3 basis-1/3 sm:basis-1/5 md:basis-1/6 lg:basis-1/6"
                >
                  <button
                    className={cn(
                      "relative aspect-square w-full overflow-hidden rounded-md border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      selectedImageIndex === index
                        ? "border-primary ring-2 ring-primary/20 scale-105"
                        : "border-border hover:border-primary/50 hover:scale-102"
                    )}
                    onClick={() => selectImage(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-label={`View image ${index + 1} of ${
                      allImages.length
                    }`}
                    type="button"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productName} thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                      className="object-cover"
                      loading="lazy"
                    />

                    {/* Selected indicator */}
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                    )}
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons - hidden on mobile if not needed */}
            <CarouselPrevious
              className="hidden sm:flex -left-4 lg:-left-6"
              aria-label="Previous images"
            />
            <CarouselNext
              className="hidden sm:flex -right-4 lg:-right-6"
              aria-label="Next images"
            />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
