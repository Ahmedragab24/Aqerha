"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PromotionServiceType } from "@/app/(pages)/promotion-services/page";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import PromotionServiceInDetailsCard from "@/components/molecules/cards/PromotionServiceInDetailsCard";
import Image from "next/image";
import PromotionServiceForm from "../forms/PromotionServiceForm";
import { useState } from "react";
import SelectPayment from "@/components/molecules/selects/SelectPayment";

interface Props {
  children: React.ReactNode;
  PromotionProduct: PromotionServiceType;
}

export type StepType = "form" | "Payment";

const PromotionServiceDialog = ({ children, PromotionProduct }: Props) => {
  const [Step, setStep] = useState<StepType>("form");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={`${Step === "form" ? "sm:max-w-3xl h-[90vh]" : "sm:max-w-xl h-fit"} overflow-y-scroll`}
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold"></DialogTitle>
        </DialogHeader>

        {Step === "form" ? (
          <div className="space-y-10">
            <div className="flex items-center justify-center gap-4">
              <SectionTitle
                Title={PromotionProduct?.name || ""}
                className="text-center"
              />
              <Image
                src={PromotionProduct?.icon || ""}
                alt={PromotionProduct?.name || "service"}
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
                  <PromotionServiceInDetailsCard data={PromotionProduct} />
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
