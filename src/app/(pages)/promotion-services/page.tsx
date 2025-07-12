import SectionTitle from "@/components/atoms/title/SectionTitle";
import PromotionServiceCard from "@/components/molecules/cards/PromotionServiceCard";
import React from "react";

export interface PromotionServiceType {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const PromotionServicesList: PromotionServiceType[] = [
  {
    id: 1,
    name: "الإعلان المميز",
    description: "ميز إعلانك علي عقار لجذب الانتباه العملاء",
    icon: "/Icons/gravity-ui_star-fill.svg",
  },
  {
    id: 2,
    name: "تنبيه المهتمين",
    description: "أرسل إعلانك للباحثين عن عقارات مشابهة",
    icon: "/Icons/clarity_notification-solid.svg",
  },
  {
    id: 3,
    name: "الإعلان الذهبي",
    description: "أظهر إعلانك باللون الذهبي علي منصة عقرها",
    icon: "/Icons/material-symbols_crown-rounded-yellow.svg",
  },
  {
    id: 4,
    name: "إعلان منصات التواصل الإجتماعي",
    description: "أعلن عبر حسابات عقار فى منصات التواصل",
    icon: "/Icons/Layer_1.svg",
  },
];

const PromotionServicesPage = () => {
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
