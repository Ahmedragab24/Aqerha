"use client";

import React, { useState } from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import { PromotionServiceType } from "@/app/(pages)/promotion-services/page";
import Image from "next/image";
import CarouselTogglePromotionService from "../organisms/carousels/CarouselTogglePromotionService";
import PromotionServiceDialog from "../organisms/Popups/PromotionServiceDialog";
import { Button } from "../ui/button";
import PromotionServiceList from "../molecules/list/PromotionServiceList";
import SelectSocialMediaPlatform from "./SelectSocialMediaPlatform";

interface Props {
  PromotionProduct: PromotionServiceType | null;
  PromotionServicesList: PromotionServiceType[];
}

export type SocialType = "instagram" | "x" | "snapchat" | "tiktok";

const PromotionServiceDetails = ({
  PromotionProduct,
  PromotionServicesList,
}: Props) => {
  const [selectedValue, setSelectedValue] =
    useState<PromotionServiceType | null>(null);
  const [selectedService, setSelectedService] = useState<number>(1);
  const [selectedSocial, setSelectedSocial] = useState<SocialType>("instagram");

  return (
    <div className="space-y-10">
      <SectionTitle
        Title={PromotionProduct?.name || ""}
        className="text-center"
      />

      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={PromotionProduct?.icon || ""}
          alt={PromotionProduct?.name || "star"}
          width={70}
          height={70}
        />

        <h2 className="w-fit text-lg md:text-2xl font-semibold pb-4 border-b-2 border-gray-200">
          ميز إعلانك علي عقار لجذب الانتباه العملاء
        </h2>

        <PromotionServiceList />
      </div>

      {PromotionProduct?.id === 4 && (
        <SelectSocialMediaPlatform
          selectedService={selectedService}
          selectedSocial={selectedSocial}
          setSelectedService={setSelectedService}
          setSelectedSocial={setSelectedSocial}
        />
      )}

      <div className="space-y-6">
        <h2 className="text-lg md:text-2xl font-semibold">
          قم باختيار الإعلان الذي تريده:
        </h2>
        {PromotionProduct && (
          <CarouselTogglePromotionService
            items={PromotionServicesList}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        )}
      </div>

      <div className="flex justify-center">
        {selectedValue && (
          <PromotionServiceDialog PromotionProduct={selectedValue}>
            <Button className="!h-12 text-lg w-full md:w-[30%]" type="submit">
              ابدأ الخدمة
            </Button>
          </PromotionServiceDialog>
        )}
      </div>
    </div>
  );
};

export default PromotionServiceDetails;
