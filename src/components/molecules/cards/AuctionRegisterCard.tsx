import Riyal from "../../atoms/Icons/Riyal";
import AuctionRegisterDialog from "../../organisms/Popups/AuctionRegisterDialog";
import { Button } from "../../ui/button";
import React from "react";
import { AssetsType } from "@/types/Actions";
import AuctionsRecordDialog from "@/components/organisms/Popups/AuctionsRecordDialog";

// 🔹 دالة لتنسيق التاريخ إلى صيغة عربية جميلة
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};

interface AuctionRegisterCardProps {
  AssetsDetails: AssetsType | undefined;
}

const AuctionRegisterCard = ({ AssetsDetails }: AuctionRegisterCardProps) => {
  return (
    <div className="md:min-w-[600px] rounded-2xl max-w-2xl border border-gray-300 shadow-md overflow-hidden">
      <div className="bg-[#F3E6D6] p-4 flex items-center justify-center gap-2 text-lg font-semibold">
        {/* المزاد منتهي */}
        {AssetsDetails?.category === "ended" && (
          <>
            <span className="text-gray-500">انتهى المزاد في</span>
            <h3>{formatDate(AssetsDetails.asset_end_date)}</h3>
          </>
        )}

        {/* مزاد قادم */}
        {AssetsDetails?.category === "upcoming" && (
          <>
            <span className="text-gray-500">يبدأ المزاد في</span>
            <h3>{formatDate(AssetsDetails.asset_start_date!)}</h3>
          </>
        )}

        {/* مزاد جاري */}
        {AssetsDetails?.category === "ongoing" && (
          <>
            <span className="text-gray-500">المزاد جاري الآن، ينتهي في</span>
            <h3>{formatDate(AssetsDetails.asset_end_date)}</h3>
          </>
        )}
      </div>

      <div className="bg-[#ECFDF3] p-4 text-lg font-medium flex flex-col gap-4">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <h3>السعر الافتتاحي</h3>
            <div className="text-gray-500 flex items-center gap-1">
              <h3>{AssetsDetails?.open_price}</h3>
              <Riyal className="!w-5 !h-5" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3>مبلغ العربون</h3>
            <div className="text-gray-500 flex items-center gap-1">
              <h3>{AssetsDetails?.deposit}</h3>
              <Riyal className="!w-5 !h-5" />
            </div>
          </div>
        </div>

        {AssetsDetails && AssetsDetails?.bidders_count > 0 ? (
          <AuctionsRecordDialog
            biddingActivity={AssetsDetails?.bidding_activity || []}
            highest_offer={AssetsDetails?.highest_offer || 0}
            meter_price={AssetsDetails?.meter_price || 0}
          >
            <div className="flex justify-center items-center rounded-md w-full bg-yellow-100 text-primary !h-12 cursor-pointer hover:bg-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
              المزايدات ({AssetsDetails?.bidders_count})
            </div>
          </AuctionsRecordDialog>
        ) : (
          <div className="p-4 w-full">
            <div className="flex justify-center items-center rounded-md w-full bg-[#ECFDF3] text-primary !h-12 shadow-sm">
              لا يوجد مزايدة
            </div>
          </div>
        )}

        {AssetsDetails?.category !== "ended" && (
          <AuctionRegisterDialog AssetsDetails={AssetsDetails}>
            <Button className="!h-12">سجل الآن في المزاد</Button>
          </AuctionRegisterDialog>
        )}
      </div>
    </div>
  );
};

export default AuctionRegisterCard;
