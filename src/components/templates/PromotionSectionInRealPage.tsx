"use client";

import Link from "next/link";
import React from "react";
import AdvertisingPromotionCard from "../molecules/cards/AdvertisingPromotionCard";
import { RealEstesType } from "@/types/Real-estates";
import { useGetProfileQuery } from "@/store/services/Profile";

interface PromotionSectionInRealPageProps {
  RealEstate: RealEstesType | undefined;
}

const PromotionSectionInRealPage = ({
  RealEstate,
}: PromotionSectionInRealPageProps) => {
  const { data } = useGetProfileQuery();
  const userData = data?.data;
  const isRealEstateUser =
    userData?.profile?.user_id === RealEstate?.user?.profile?.id;

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
