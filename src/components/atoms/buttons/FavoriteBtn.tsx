"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const FavoriteBtn = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handlerFavorite = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };
  return (
    <Button
      className="bg-transparent rounded-full !p-2 border-2 border-gray-200 hover:bg-gray-50 transition-colors"
      onClick={(e) => handlerFavorite(e)}
    >
      <Heart
        className={`transition-colors !w-5 !h-5 ${
          isFavorite ? "fill-red-500 text-red-500" : "fill-none text-gray-600"
        }`}
      />
    </Button>
  );
};

export default FavoriteBtn;
