"use client";

import Link from "next/link";
import React from "react";
import AdvertisingPromotionCard from "../molecules/cards/AdvertisingPromotionCard";
import { RealEstesType } from "@/types/Real-estates";
import { useAppSelector } from "@/store/hooks";

interface PromotionSectionInRealPageProps {
  RealEstate: RealEstesType | undefined;
}

const PromotionSectionInRealPage = ({
  RealEstate,
}: PromotionSectionInRealPageProps) => {
  const { userData } = useAppSelector((state) => state.userData);
  const isRealEstateUser = userData?.id === RealEstate?.user?.id;

  return (
    <div className="w-full md:w-1/2 mx-auto mb-10">
      {!RealEstate?.ad?.promotion && isRealEstateUser && (
        <Link href={"/promotion-services"}>
          <AdvertisingPromotionCard />
        </Link>
      )}

      {/* <LicenseExpirationCard /> */}
    </div>
  );
};

export default PromotionSectionInRealPage;
