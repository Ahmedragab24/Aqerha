"use client";

import { useParams } from "next/navigation";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useGetAuctionByIdQuery } from "@/store/services/Auctions";
import AuctionStateBadge from "@/components/atoms/badges/AuctionStateBadge";
import AuctionTypeBadge from "@/components/atoms/badges/AuctionTypeBadge";
import AuctionAssetsCard from "@/components/molecules/cards/AuctionAssetsCard";

const AuctionDetailsPage = () => {
  const { auctionId } = useParams();
  const { data } = useGetAuctionByIdQuery(+auctionId!);
  const AuctionData = data?.data?.auction;
  // const BidderActivity = data?.data?.bidding_activity;
  // const BiddersCount = data?.data?.bidders_count;
  // const HighestOffer = data?.data?.highest_offer;

  console.log(data);

  return (
    <main className=" pt-6 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[97vh]">
        <Image
          src={AuctionData?.image || "/placeholder.svg"}
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="hidden md:block">
          <div className="absolute top-28 right-16 flex items-center gap-2">
            {AuctionData?.category && (
              <AuctionStateBadge state={AuctionData?.category} />
            )}
            {AuctionData?.type && <AuctionTypeBadge type={AuctionData?.type} />}
          </div>
        </div>
      </div>

      <div className="Container mt-4">
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            {AuctionData?.category && (
              <AuctionStateBadge state={AuctionData?.category} />
            )}
            {AuctionData?.type && <AuctionTypeBadge type={AuctionData?.type} />}
          </div>
        </div>

        <div className="mt-4 md:mt-10 space-y-16">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                مزاد {AuctionData?.name}
              </h1>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg md:text-xl">{AuctionData?.location}</h3>
              </div>
            </div>

            {/* <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4">
                <Image
                  src="/Icons/proicons_pdf-2.svg"
                  alt="pdf"
                  width={30}
                  height={30}
                />
                <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
              </div>

              <div className="flex items-center justify-center border border-border rounded-sm p-2">
                <h3>الرقم المرجعي لشركة النويشر للمزادات: 562</h3>
              </div>
            </div> */}
            {/* <div className="space-y-4">
              <h1 className="text-lg font-medium">طرق التواصل</h1>
              <CallUserBtns isText />
            </div> */}
          </div>

          <div className="space-y-6">
            <SectionTitle
              Title={`كل الأصول ( ${AuctionData?.assets_number} )`}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AuctionData?.assets?.map((item) => (
                <AuctionAssetsCard key={item.id} Assets={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuctionDetailsPage;
