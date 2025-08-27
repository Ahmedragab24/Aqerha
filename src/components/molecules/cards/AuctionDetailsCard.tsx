import { MapPin, ChevronLeft } from "lucide-react";
import { Card } from "../../ui/card";
import Image from "next/image";
import { AuctionType } from "@/types/Actions";
import Riyal from "../../atoms/Icons/Riyal";
import Link from "next/link";
import AuctionStateBadge from "@/components/atoms/badges/AuctionStateBadge";
import AuctionTypeBadge from "@/components/atoms/badges/AuctionTypeBadge";

interface AuctionCardProps {
  AuctionDetails: AuctionType;
}

export default function AuctionCard({ AuctionDetails }: AuctionCardProps) {
  const {
    id,
    image,
    name,
    assets_number,
    category,
    city,
    deposit,
    end_date,
    location,
    start_date,
    type,
  } = AuctionDetails;

  return (
    <Link href={`/auctions/${id}`}>
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
              {category && <AuctionStateBadge state={category} />}
              {type && <AuctionTypeBadge type={type} />}
            </div>
          </div>
        </div>

        <div className="px-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-primary text-lg font-semibold">{name}</h1>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <h3 className="text-sm">
                  {location}, {city}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-1">
                <h6 className="text-[10px]">عدد الأصول</h6>
                <div className="flex justify-center items-center text-center rounded-md text-sm">
                  {assets_number}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h6 className="text-[10px]">بدأ في</h6>
                <div className="flex justify-center items-centerrounded-md  text-center text-xs">
                  {new Date(start_date).toLocaleDateString()}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h6 className="text-[10px]">الوقت المنقضي</h6>
                <div className="flex justify-center items-center text-center rounded-md text-xs">
                  {new Date(end_date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium">مبلغ العربون ابتداءً من:</h3>
              <div className="flex items-center gap-1">
                <h3 className="text-lg text-primary font-semibold">
                  {deposit}
                </h3>
                <Riyal className="text-primary !w-6 !h-6" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium">يبدأ المزاد في:</h3>
              <div className="flex items-center gap-1">
                <h3 className="text-sm text-primary font-semibold">
                  {new Date(start_date).toLocaleDateString()}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full !h-12 rounded-none flex items-center justify-center gap-2 text-white pointer-events-none px-4 md:px-8 py-2 text-sm md:text-base shadow-md
${category === "ended" && "bg-red-400"}
${category === "ongoing" && "bg-green-600"}
${category === "upcoming" && "bg-yellow-300"}`}
        >
          <h3>
            {category === "ended" && "انتهى"}
            {category === "ongoing" && "جاري الآن"}
            {category === "upcoming" && "يبدأ قريبا"}
          </h3>

          <ChevronLeft />
        </div>
      </Card>
    </Link>
  );
}
