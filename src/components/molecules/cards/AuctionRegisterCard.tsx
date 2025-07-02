import Riyal from "@/components/atoms/Icons/Riyal";
import AuctionRegisterDialog from "@/components/organisms/Popups/AuctionRegisterDialog";
import { Button } from "@/components/ui/button";
import React from "react";

const AuctionRegisterCard = () => {
  return (
    <div className="md:min-w-[400px] rounded-2xl max-w-2xl border border-gray-300 shadow-md overflow-hidden">
      <div className="bg-[#F3E6D6] p-4 flex items-center justify-center gap-2 text-lg font-semibold">
        <span className="text-gray-500">يبدأ المزاد</span>
        <h3> في 2 يوم 11 ساعة 21 دقيقة</h3>
      </div>
      <div className="bg-[#ECFDF3] p-4 text-lg font-medium flex flex-col gap-4">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <h3>السعر الافتتاحي</h3>
            <div className="text-gray-500 flex items-center gap-1">
              <h3>20,000</h3>
              <Riyal className="!w-5 !h-5" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3>مبلغ العربون</h3>
            <div className="text-gray-500 flex items-center gap-1">
              <h3>25,000</h3>
              <Riyal className="!w-5 !h-5" />
            </div>
          </div>
        </div>

        <AuctionRegisterDialog>
          <Button className="!h-12">سجل الآن في المزاد</Button>
        </AuctionRegisterDialog>
      </div>
    </div>
  );
};

export default AuctionRegisterCard;
