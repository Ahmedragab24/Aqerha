"use client";

import { useGetPromotionsServicesQuery } from "@/store/services/Promotions";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import PromotionServiceCard from "../../../components/molecules/cards/PromotionServiceCard";
import React from "react";

const PromotionServicesPage = () => {
  const { data } = useGetPromotionsServicesQuery();
  const PromotionServicesList = data?.data || [];

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="خدمات الترويج" className="text-center" />

        <div className="space-y-4">
          <p className="text-lg md:text-xl font-normal">
            مجموعة من الخدمات المخصصة تساعدك في إيصال إعلانك للعملاء المستهدفين
            لتسريع عملية البيع أو التأجير.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {PromotionServicesList.map((item) => (
              <PromotionServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PromotionServicesPage;
