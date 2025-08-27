"use client";

import { useState } from "react";
import { Slider } from "../../ui/slider";
import { Input } from "../../ui/input";
import { useAppDispatch } from "@/store/hooks";
import {
  setMaxPrice,
  setMinPrice,
} from "@/store/features/filter/FilterRealEstate";

const PriceProgress = () => {
  const dispatch = useAppDispatch();
  const [priceRange, setPriceRange] = useState([0, 1000000]); // [min, max]

  const maxPrice = 2000000;

  const convertSliderToPrice = (value: number) =>
    Math.round((value / 100) * maxPrice);

  const convertPriceToSlider = (price: number) =>
    Math.round((price / maxPrice) * 100);

  const formatPrice = (price: number) => `${price.toLocaleString()}`;

  return (
    <div className="w-full max-w-xs mx-auto p-4" suppressHydrationWarning>
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
            const newRange: [number, number] = [min, max];
            setPriceRange(newRange);
            dispatch(setMinPrice(min));
            dispatch(setMaxPrice(max));
          }}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <Input
          type="text"
          value={formatPrice(priceRange[0])}
          onChange={(e) => {
            const value =
              Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0;
            const newPriceRange: [number, number] = [value, priceRange[1]];
            setPriceRange(newPriceRange);
            dispatch(setMinPrice(value));
          }}
          className="flex-1 text-center text-gray-500 bg-gray-50 border-gray-500 rounded-full px-4 py-2"
          placeholder="ر.س 0"
        />
        <span className="text-gray-400 text-sm">—</span>
        <Input
          type="text"
          value={formatPrice(priceRange[1])}
          onChange={(e) => {
            const value =
              Number.parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0;
            const newPriceRange: [number, number] = [priceRange[0], value];
            setPriceRange(newPriceRange);
            dispatch(setMaxPrice(value));
          }}
          className="flex-1 text-center text-gray-500 bg-gray-50 border-gray-500 rounded-full px-4 py-2"
          placeholder="ر.س 2,000,000"
        />
      </div>
    </div>
  );
};

export default PriceProgress;
