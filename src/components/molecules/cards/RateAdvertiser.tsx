"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const RateAdvertiser = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleMouseEnter = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-3">
            ما هي التجربة التي تتطلع لها؟ سلامة؟
          </p>

          {/* Interactive Star Rating */}
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = star <= (hoveredRating || selectedRating);
              return (
                <div
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleMouseEnter(star)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400 border-yellow-400 scale-110"
                      : "bg-gray-200 border-gray-300 hover:bg-gray-300"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {star}
                  </span>
                </div>
              );
            })}
          </div>

          {selectedRating > 0 && (
            <p className="text-sm text-green-600 mb-2 font-medium">
              تم اختيار {selectedRating} من 5 نجوم
            </p>
          )}

          <p className="text-sm text-gray-600 mb-4">
            معدل رضا المستخدمين: 4.9 من 5
          </p>

          <Button
            variant="outline"
            className="h-12 text-lg text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
          >
            <Image
              src="/Icons/warning-2.svg"
              alt="warning"
              width={30}
              height={30}
            />
            تقرير المخالفة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RateAdvertiser;
