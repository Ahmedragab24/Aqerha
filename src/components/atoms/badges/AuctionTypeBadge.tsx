import React from "react";
import { TypeAuctionType } from "@/types/Actions";
import { Badge } from "@/components/ui/badge";

interface Props {
  type: TypeAuctionType;
}

const AuctionTypeBadge = ({ type }: Props) => {
  return (
    <Badge
      variant="secondary"
      className="bg-white text-gray-700 pointer-events-none px-4 md:px-8 py-2 text-sm md:text-base shadow-md"
    >
      {type === "electronic" && "إلكتروني"}
      {type === "hybrid" && "هجين"}
      {type === "private" && "خاص"}
      {type === "public" && "عام"}
    </Badge>
  );
};

export default AuctionTypeBadge;
