"use client";

import React from "react";
import PromotionServiceDetails from "../../../../components/templates/PromotionServiceDetails";
import { useParams } from "next/navigation";
import { useGetPromotionsServicesQuery } from "@/store/services/Promotions";

const PromotionDetailsPage = () => {
  const { promotionId } = useParams();
  const PromotionId = promotionId ? +promotionId : null;
  const { data } = useGetPromotionsServicesQuery();
  const PromotionServicesList = data?.data || [];

  const Promotion = PromotionServicesList.find(
    (item) => item.id === PromotionId
  );

  return (
    <main className="Container pt-28 mb-16">
      <PromotionServiceDetails PromotionService={Promotion} />
    </main>
  );
};

export default PromotionDetailsPage;
