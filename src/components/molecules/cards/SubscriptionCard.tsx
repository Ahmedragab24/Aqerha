"use client";

import Riyal from "../../atoms/Icons/Riyal";
import { Button } from "../../ui/button";
import { selectSubscription } from "@/store/features/Toggle/subscriptionToggleSlice";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import SelectPaymentMethodDialog from "../../organisms/Popups/SelectPaymentMethodDialog";
import { PackageType } from "@/types/Package";

interface Props {
  packageItem: PackageType;
}

const SubscriptionCard = ({ packageItem }: Props) => {
  const { SubscriptionType } = useAppSelector(selectSubscription);
  return (
    <div className="relative bg-secondary border border-gray-400 rounded-xl p-8 md:p-16 flex flex-col justify-center items-center gap-4 text-center">
      <div className="flex items-center gap-1 text-2xl md:text-3xl font-semibold">
        <span>{packageItem.price}</span>
        <Riyal className="!w-6 !h-6 md:!w-8 md:!h-8" />
        <span>/{SubscriptionType === "monthly" ? "شهر" : "سنة"}</span>
      </div>
      <p className="md:text-2xl max-w-xl text-primary font-normal">
        {packageItem?.description}
      </p>
      <SelectPaymentMethodDialog price={Number(packageItem?.price)}>
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
