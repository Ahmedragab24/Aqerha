import React from "react";
import { PromotionServicesList } from "../page";
import PromotionServiceDetails from "@/components/templates/PromotionServiceDetails";

const PromotionDetailsPage = async ({
  params,
}: {
  params: Promise<{ promotionId: string }>;
}) => {
  const { promotionId } = await params;

  const PromotionProduct =
    PromotionServicesList.find((item) => item.id === +promotionId) || null;

  return (
    <main className="Container pt-28 mb-16">
      <PromotionServiceDetails
        PromotionProduct={PromotionProduct}
        PromotionServicesList={PromotionServicesList}
      />
    </main>
  );
};

export default PromotionDetailsPage;
