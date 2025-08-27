/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MapPin, ChevronLeft } from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import { AssetsType } from "@/types/Actions";
import Riyal from "../../atoms/Icons/Riyal";
import Link from "next/link";
import AuctionsRecordDialog from "../../organisms/Popups/AuctionsRecordDialog";
import AuctionStateBadge from "@/components/atoms/badges/AuctionStateBadge";
import FollowAuctionAssetsBtn from "@/components/atoms/buttons/FollowAuctionAssetsBtn";
import { formatName } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AuctionCardProps {
  Assets: AssetsType;
}

export default function AuctionAssetsCard({ Assets }: AuctionCardProps) {
  const calculateTimeLeft = () => {
    const end = new Date(Assets?.asset_end_date).getTime();
    const now = new Date().getTime();
    const difference = end - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.expired) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [Assets?.asset_end_date, timeLeft.expired]);

  return (
    <Card className="overflow-hidden bg-secondary shadow-md relative rounded-2xl border-gray-300 p-0">
      <div className="px-4 pt-4 pb-0">
        <div className="relative w-full h-[260px]">
          <Image
            src={Assets?.asset_image || "/placeholder.svg"}
            alt={Assets?.category || "Asset"}
            fill
            className="object-cover rounded-2xl"
          />

          <div className="flex justify-between items-center gap-4">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {Assets?.category && (
                <AuctionStateBadge state={Assets?.category} />
              )}
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <FollowAuctionAssetsBtn AssetsId={Assets?.id} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {Assets?.real_estate_type && (
              <h1 className="text-primary text-lg font-semibold">
                مزاد على {formatName(Assets?.real_estate_type)}
              </h1>
            )}
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-4 h-4" />
              <h3 className="text-sm">{Assets?.location}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {Assets?.asset_end_date && (
              <h3 className="text-sm font-medium">
                {timeLeft.expired ? "انتهى المزاد في " : "ينتهي المزاد في "}
                {new Intl.DateTimeFormat("ar-EG", {
                  dateStyle: "full",
                }).format(new Date(Assets.asset_end_date))}
              </h3>
            )}

            {!timeLeft.expired && (
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                  {timeLeft.days}
                  <span>يوم</span>
                </div>
                <div className="flex flex-col justify-center items-center p-2 border border-border rounded-md w-[60px] h-[60px] text-center text-xs">
                  {timeLeft.hours}
                  <span>ساعة</span>
                </div>
                <div className="flex flex-col justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                  {timeLeft.minutes}
                  <span>دقيقة</span>
                </div>
                <div className="flex flex-col justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                  {timeLeft.seconds}
                  <span>ثانية</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">مبلغ العربون ابتداءً من:</h3>
            <div className="flex items-center gap-1">
              <h3 className="text-lg text-primary font-semibold">
                {Assets?.open_price}
              </h3>
              <Riyal className="text-primary !w-6 !h-6" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">أعلى مزايدة:</h3>
            <div className="flex items-center gap-1">
              <h3 className="text-lg text-primary font-semibold">
                {Assets?.highest_offer}
              </h3>
              <Riyal className="text-primary !w-6 !h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4 items-center p-4">
        {Assets?.bidders_count > 0 ? (
          <AuctionsRecordDialog
            biddingActivity={Assets?.bidding_activity}
            highest_offer={Assets?.highest_offer}
            meter_price={Assets?.meter_price}
          >
            <div className="flex justify-center items-center rounded-md w-full bg-[#ECFDF3] text-primary !h-12 cursor-pointer hover:bg-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
              المزايدات ({Assets?.bidders_count})
            </div>
          </AuctionsRecordDialog>
        ) : (
          <div className="p-4 w-full">
            <div className="flex justify-center items-center rounded-md w-full bg-[#ECFDF3] text-primary !h-12 shadow-sm">
              لا يوجد مزايدة
            </div>
          </div>
        )}

        <Link
          className="w-full"
          href={`/auctions/${Assets?.auction_id}/${Assets?.id}`}
        >
          <Button className="w-full !h-12">
            سجل الآن
            <ChevronLeft />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
