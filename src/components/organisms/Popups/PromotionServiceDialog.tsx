"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import SectionTitle from "../../atoms/title/SectionTitle";
import Image from "next/image";
import PromotionServiceForm from "../forms/PromotionServiceForm";
import { useState } from "react";
import SelectPayment from "../../molecules/selects/SelectPayment";
import { PromotionServiceType } from "@/types/Promotions";
import RealEstateInPromotionCard from "@/components/molecules/cards/RealEstateInPromotionCard";
import { RealEstesType } from "@/types/Real-estates";

interface Props {
  children: React.ReactNode;
  PromotionProduct: RealEstesType;
  PromotionService: PromotionServiceType;
}

export type StepType = "form" | "Payment";

const PromotionServiceDialog = ({ children, PromotionProduct }: Props) => {
  const [Step, setStep] = useState<StepType>("form");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={`${
          Step === "form" ? "sm:max-w-3xl h-[90vh]" : "sm:max-w-xl h-fit"
        } overflow-y-scroll`}
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold"></DialogTitle>
        </DialogHeader>

        {Step === "form" ? (
          <div className="space-y-10">
            <div className="flex items-center justify-center gap-4">
              <SectionTitle
                Title={PromotionProduct?.real_estate_type || ""}
                className="text-center"
              />
              <Image
                src={PromotionProduct?.main_image || ""}
                alt={PromotionProduct?.real_estate_type || "service"}
                width={30}
                height={30}
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-lg md:text-xl font-medium">
                الرجاء تحديد الميزانية اليومية و مدة التمييز
              </h1>
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  الإعلان المختار
                </h2>
                {PromotionProduct && (
                  <RealEstateInPromotionCard RealEstate={PromotionProduct} />
                )}
              </div>

              <PromotionServiceForm setStep={setStep} />
            </div>
          </div>
        ) : (
          <SelectPayment price={333} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PromotionServiceDialog;
