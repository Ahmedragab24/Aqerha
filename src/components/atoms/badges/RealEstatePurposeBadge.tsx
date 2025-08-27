import { Badge } from "@/components/ui/badge";
import { TypePurposeType } from "@/types/Real-estates";
import React from "react";

interface Props {
  purpose: TypePurposeType | undefined;
}

const RealEstatePurposeBadge = ({ purpose }: Props) => {
  return (
    <Badge className="bg-gray-100 text-[#1B76FF]  font-semibold rounded-sm px-8 py-2 text-sm shadow-sm">
      {purpose === "sale" ? "للبيع" : purpose === "rent" ? "للإيجار" : "للشراء"}
    </Badge>
  );
};

export default RealEstatePurposeBadge;
