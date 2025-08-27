import { Badge } from "@/components/ui/badge";
import { TypeAuctionCategoryType } from "@/types/Actions";
import React from "react";

interface Props {
  state: TypeAuctionCategoryType;
}

const AuctionStateBadge = ({ state }: Props) => {
  return (
    <Badge
      className={`text-white pointer-events-none px-4 md:px-8 py-2 text-sm md:text-base shadow-md
${state === "ended" && "bg-red-400"}
${state === "ongoing" && "bg-green-600"}
${state === "upcoming" && "bg-yellow-300"}`}
    >
      {state === "ended" && "انتهى"}
      {state === "ongoing" && "جاري الآن"}
      {state === "upcoming" && "يبدأ قريبا"}
    </Badge>
  );
};

export default AuctionStateBadge;
