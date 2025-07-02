import { MapPin, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AuctionType } from "@/types/Actions";
import Riyal from "@/components/atoms/Icons/Riyal";
import Link from "next/link";

interface AuctionCardProps {
  AuctionDetails: AuctionType;
  auctionsId: string;
}

export default function AuctionCard({
  AuctionDetails,
  auctionsId,
}: AuctionCardProps) {
  const {
    id,
    image,
    name,
    ElapsedTime,
    ExpiresIn,
    NumAssets,
    StartPrice,
    StartedIn,
    location,
    place,
    stateAction,
    stateTime,
  } = AuctionDetails;

  return (
    <Card className="overflow-hidden bg-secondary shadow-md relative rounded-2xl border-gray-300 p-0">
      <div className="p-4">
        <div className="relative w-full h-[260px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-fill rounded-2xl"
          />
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
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-lg font-semibold">{name}</h1>
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-4 h-4" />
              <h3 className="text-sm">{location}</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                {NumAssets}
              </div>
              <h6 className="text-[10px]">عدد الأصول</h6>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border border-border rounded-md w-[60px] h-[60px] text-center text-xs">
                {StartedIn}
              </div>
              <h6 className="text-[10px]">بدأ في</h6>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center items-center p-2 border border-border w-[60px] h-[60px] text-center rounded-md text-xs">
                {ElapsedTime}
              </div>
              <h6 className="text-[10px]">الوقت المنقضي</h6>
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
            <h3 className="text-sm font-medium">يبدأ المزاد في:</h3>
            <div className="flex items-center gap-1">
              <h3 className="text-sm text-primary font-semibold">
                {ExpiresIn}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Link href={`/auctions/${auctionsId}/${id}`}>
        <Button className="w-full !h-12 rounded-none">
          {stateAction}
          <ChevronLeft />
        </Button>
      </Link>
    </Card>
  );
}
