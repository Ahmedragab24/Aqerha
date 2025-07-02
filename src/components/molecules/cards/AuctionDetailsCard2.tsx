import { MapPin, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AuctionType } from "@/types/Actions";
import Riyal from "@/components/atoms/Icons/Riyal";
import Link from "next/link";
import AuctionsRecordDialog from "@/components/organisms/Popups/AuctionsRecordDialog";

interface AuctionCardProps {
  AuctionDetails: AuctionType;
  auctionsId: string;
  auctionId: string;
}

export default function AuctionDetailsCard2({
  AuctionDetails,
  auctionsId,
  auctionId,
}: AuctionCardProps) {
  const {
    id,
    image,
    name,
    ElapsedTime,
    NumAssets,
    StartPrice,
    StartedIn,
    location,
    place,
    stateTime,
    EndPrice,
    NumAuctions,
  } = AuctionDetails;

  return (
    <Card className="overflow-hidden bg-secondary shadow-md relative rounded-2xl border-gray-300 p-0">
      <div className="px-4 pt-4 pb-0">
        <div className="relative w-full h-[260px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-fill rounded-2xl"
          />
          <div className="flex justify-between items-center gap-4">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 h-7"
              >
                {stateTime}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-gray-700 hover:bg-gray-100 text-xs px-3 py-1 h-7"
              >
                {place}
              </Button>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-gray-700 hover:bg-gray-100"
              >
                <Image
                  src="/Icons/carbon_notification.svg"
                  alt="follow"
                  width={15}
                  height={15}
                />
                متابعة
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-lg font-semibold">{name}</h1>
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-4 h-4" />
              <h3 className="text-sm">{location}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">ينتهي المزاد بعد:</h3>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                {NumAssets}
              </div>

              <div className="flex justify-center items-center p-2 border border-border rounded-md w-[60px] h-[60px] text-center text-xs">
                {StartedIn}
              </div>

              <div className="flex justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                {ElapsedTime}
              </div>

              <div className="flex justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                {ElapsedTime}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">مبلغ العربون ابتداءً من:</h3>
            <div className="flex items-center gap-1">
              <h3 className="text-lg text-primary font-semibold">
                {StartPrice}
              </h3>
              <Riyal className="text-primary !w-6 !h-6" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">أعلى مزايدة:</h3>
            <div className="flex items-center gap-1">
              <h3 className="text-lg text-primary font-semibold">{EndPrice}</h3>
              <Riyal className="text-primary !w-6 !h-6" />
            </div>
          </div>
        </div>
      </div>

      {NumAuctions && NumAuctions > 1 ? (
        <div className="flex justify-between gap-4 items-center p-4">
          <AuctionsRecordDialog>
            <div className="flex justify-center items-center rounded-md w-full bg-[#ECFDF3] text-primary !h-12 cursor-pointer hover:bg-primary/20 hover:shadow-md transition-all duration-300">
              المزايدات ({NumAuctions})
            </div>
          </AuctionsRecordDialog>

          <Link
            className="w-full"
            href={`/auctions/${auctionsId}/${auctionId}/${id}`}
          >
            <Button className="w-full !h-12">
              سجل الآن
              <ChevronLeft />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex justify-center items-center rounded-md w-full bg-[#ECFDF3] text-primary !h-12">
            لا يوجد مزايدة
          </div>
        </div>
      )}
    </Card>
  );
}
