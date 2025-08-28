"use client";

import CallUserBtns from "../../../../../components/molecules/btnsGroup/CallUserBtns";
import AuctionRegisterCard from "../../../../../components/molecules/cards/AuctionRegisterCard";
import LocationProperty from "../../../../../components/molecules/Locations/LocationProperty";
import DescriptionProperty from "../../../../../components/molecules/textGroup/DescriptionProperty";
import PropertyTrends from "../../../../../components/templates/propertyTrends";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { useGetAssetByIdQuery } from "@/store/services/Auctions";
import AuctionStateBadge from "@/components/atoms/badges/AuctionStateBadge";
import FollowAuctionAssetsBtn from "@/components/atoms/buttons/FollowAuctionAssetsBtn";
import { formatName } from "@/lib/utils";
import PosherPdf from "@/components/molecules/uploads/PosherPdf";
import AssetFeatures from "@/components/templates/AssetFeatures";
import AssetPriceDetails from "@/components/templates/AssetPriceDetails";

const AuctionPropertyPage = () => {
  const { assetsId } = useParams();
  const AssetsId = assetsId ? +assetsId : 0;
  const { data } = useGetAssetByIdQuery(AssetsId);
  const AssetData = data?.data?.asset;

  console.log("AssetData", AssetData);

  return (
    <main className=" pt-6 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[100vh]">
        <Image
          src={AssetData?.asset_image || "/placeholder.svg"}
          alt={`${AssetData?.category}`}
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="hidden md:block">
          <div className="absolute top-28 right-16 flex items-center gap-2">
            {AssetData?.category && (
              <AuctionStateBadge state={AssetData?.category} />
            )}
          </div>

          <div className="absolute top-28 left-16 flex items-center gap-2">
            <FollowAuctionAssetsBtn AssetsId={AssetData?.id || 0} />
          </div>
        </div>
      </div>

      <div className="Container mt-4">
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            {AssetData?.category && (
              <AuctionStateBadge state={AssetData?.category} />
            )}
          </div>

          <div className="flex items-center gap-2">
            <FollowAuctionAssetsBtn AssetsId={AssetData?.id || 0} />
          </div>
        </div>

        <div className="mt-4 md:mt-10 space-y-16">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                  مزاد على{" "}
                  {formatName(AssetData?.real_estate_type || "apartment")}
                </h1>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg md:text-xl">{AssetData?.location}</h3>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-lg font-medium">طرق التواصل</h1>
                <CallUserBtns
                  isText
                  phone={AssetData?.owner?.phone}
                  whatsapp={AssetData?.owner?.phone}
                  email={AssetData?.owner?.email}
                  userId={AssetData?.owner?.id}
                />
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 items-end">
              <PosherPdf brochureUrl={AssetData?.brochure_image || ""} />
              <AuctionRegisterCard AssetsDetails={AssetData} />
            </div>
          </div>

          <div className="flex md:!hidden flex-col gap-4 items-center">
            <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4">
              <Image
                src="/Icons/proicons_pdf-2.svg"
                alt="pdf"
                width={30}
                height={30}
              />
              <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
            </div>
            <AuctionRegisterCard AssetsDetails={AssetData} />
          </div>

          {/* Description Section */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
              الوصف
            </h1>
            <DescriptionProperty description={AssetData?.description || ""} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Features Grid */}
            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                معلومات العقار
              </h1>
              <AssetFeatures AssetsDetails={AssetData} />
            </div>

            {/* Property Features Grid */}
            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                تفاصيل المزاد
              </h1>
              <AssetPriceDetails AssetsDetails={AssetData} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                الحدود و الأطوال
              </h1>
              <PropertyTrends borders={AssetData?.borders || []} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                الموقع
              </h1>
              <LocationProperty
                location={{
                  latitude: Number(AssetData?.latitude || 0),
                  longitude: Number(AssetData?.longitude || 0),
                }}
                address={AssetData?.location}
              />
            </div>
          </div>

          {/* <ApartmentDrawing /> */}
          {/* <LegalInfoProperty realEstate={AssetData} /> */}
        </div>
      </div>
    </main>
  );
};

export default AuctionPropertyPage;
