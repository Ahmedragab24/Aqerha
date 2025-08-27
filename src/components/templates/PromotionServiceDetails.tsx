"use client";

import React, { useState } from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import Image from "next/image";
import PromotionServiceDialog from "../organisms/Popups/PromotionServiceDialog";
import { Button } from "../ui/button";
import SelectSocialMediaPlatform from "./SelectSocialMediaPlatform";
import { PromotionServiceType } from "@/types/Promotions";
import { RealEstesType } from "@/types/Real-estates";
import CarouselSelectRealEstate from "../organisms/carousels/CarouselSelectRealEstate";

interface Props {
  PromotionService: PromotionServiceType | undefined;
}

export type SocialType = "instagram" | "x" | "snapchat" | "tiktok";

const PromotionServiceDetails = ({ PromotionService }: Props) => {
  const [selectedRealEstate, setSelectedRealEstate] =
    useState<RealEstesType | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<SocialType>("instagram");

  const FormatIcon = () => {
    switch (PromotionService?.title) {
      case "highlight":
      case "إعلان مميز":
        return "/Icons/gravity-ui_star-fill.svg";

      case "golden":
      case "إعلان ذهبي":
        return "/Icons/material-symbols_crown-rounded-yellow.svg";

      case "notify":
      case "تنبيه المهتمين":
        return "/Icons/clarity_notification-solid.svg";

      case "social_campaign":
      case "حملة إعلانية مدفوعة":
        return "/Icons/Layer_1.svg";

      case "from_account":
      case "الإعلان عبر حسابات عقَرها":
        return "/Icons/gravity-ui_star-fill.svg";

      default:
        return "/Icons/gravity-ui_star-fill.svg";
    }
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        Title={PromotionService?.title || ""}
        className="text-center"
      />

      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={FormatIcon()}
          alt={PromotionService?.title || "PromotionService"}
          width={70}
          height={70}
        />

        <h2 className="w-fit text-lg md:text-2xl font-semibold pb-4 border-b-2 border-gray-200">
          {PromotionService?.description}
        </h2>

        <div className="flex items-center gap-4">
          <div className="p-1 bg-secondary rounded-full">
            <Image src="/Icons/check.svg" alt="check" width={20} height={20} />
          </div>

          <h3 className="text-lg">{PromotionService?.benefits}</h3>
        </div>
      </div>

      {PromotionService?.title === "from_account" ||
        (PromotionService?.title === "حملة إعلانية مدفوعة" && (
          <SelectSocialMediaPlatform
            selectedSocial={selectedSocial}
            setSelectedSocial={setSelectedSocial}
          />
        ))}

      <div className="space-y-6">
        {PromotionService && (
          <CarouselSelectRealEstate
            selectedValue={selectedRealEstate}
            setSelectedValue={setSelectedRealEstate}
          />
        )}
      </div>

      <div className="flex justify-center">
        {selectedRealEstate && PromotionService && (
          <PromotionServiceDialog
            PromotionService={PromotionService}
            PromotionProduct={selectedRealEstate}
          >
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
