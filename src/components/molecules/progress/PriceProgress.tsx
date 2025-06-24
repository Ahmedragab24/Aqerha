"use client";

import type React from "react";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const PriceProgress = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]); // [min, max]

  // Convert slider values (0-100) to actual price values
  const maxPrice = 2000000; // $2M max
  const convertSliderToPrice = (value: number) => {
    return Math.round((value / 100) * maxPrice);
  };

  const convertPriceToSlider = (price: number) => {
    return Math.round((price / maxPrice) * 100);
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4">
      <div className="mb-6">
        <Slider
          value={[
            100 - convertPriceToSlider(priceRange[1]),
            100 - convertPriceToSlider(priceRange[0]),
          ]}
          onValueChange={(values) => {
            const [invertedMax, invertedMin] = values;
            const min = convertSliderToPrice(100 - invertedMin);
            const max = convertSliderToPrice(100 - invertedMax);
            setPriceRange([min, max]);
          }}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <Input
          type="text"
          value={formatPrice(priceRange[0])} // Min price on right
          onChange={(e) => {
            const value =
              Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0;
            setPriceRange([value, priceRange[1]]);
          }}
          className="flex-1 text-center text-gray-500 bg-gray-50 border-gray-500 rounded-full px-4 py-2"
          placeholder="$0"
        />
        <span className="text-gray-400 text-sm">—</span>
        <Input
          type="text"
          value={formatPrice(priceRange[1])} // Max price on left
          onChange={(e) => {
            const value =
              Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0;
            setPriceRange([priceRange[0], value]);
          }}
          className="flex-1 text-center text-gray-500 bg-gray-50 border-gray-500 rounded-full px-4 py-2"
          placeholder="$0"
        />
      </div>
    </div>
  );
};

export default PriceProgress;
