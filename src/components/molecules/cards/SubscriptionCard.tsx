"use client";

import Riyal from "@/components/atoms/Icons/Riyal";
import { Button } from "@/components/ui/button";
import { selectSubscription } from "@/store/features/Toggle/subscriptionToggleSlice";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import SelectPaymentMethodDialog from "@/components/organisms/Popups/SelectPaymentMethodDialog";

const SubscriptionCard = () => {
  const { SubscriptionType } = useAppSelector(selectSubscription);
  return (
    <div className="relative bg-secondary border border-gray-400 rounded-xl p-8 md:p-16 flex flex-col justify-center items-center gap-4 text-center">
      <div className="flex items-center gap-1 text-2xl md:text-3xl font-semibold">
        <span>249</span>
        <Riyal className="!w-6 !h-6 md:!w-8 md:!h-8" />
        <span>/{SubscriptionType === "monthly" ? "شهر" : "سنة"}</span>
      </div>
      <p className="md:text-2xl max-w-xl text-primary font-normal">
        انشر إعلاناتك لتصل لملايين المستخدمين فى عقرها مع خدمات مميزة للوسطاء
        العقاريين
      </p>
      <SelectPaymentMethodDialog price={249}>
        <Button
          size={"lg"}
          className="absolute -bottom-5 md:-bottom-7 md:w-[30%] md:!h-14 md:text-lg"
        >
          اشترك الآن
        </Button>
      </SelectPaymentMethodDialog>
    </div>
  );
};

export default SubscriptionCard;
