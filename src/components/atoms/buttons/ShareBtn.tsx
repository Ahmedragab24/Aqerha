"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import React from "react";

const ShareBtn = () => {
  const handlerFavorite = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Button
      className="bg-gray-100/60 rounded-full !p-2 border-2 border-gray-200 hover:bg-gray-50 transition-colors"
      onClick={(e) => handlerFavorite(e)}
    >
      <Share2 className="fill-none text-gray-600" />
    </Button>
  );
};

export default ShareBtn;
