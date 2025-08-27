import { AssetsType } from "@/types/Actions";
import React from "react";

interface AssetPriceDetailsProps {
  AssetsDetails: AssetsType | undefined;
}

const AssetPriceDetails = ({ AssetsDetails }: AssetPriceDetailsProps) => {
  if (!AssetsDetails) return null;

  const finalTotal = AssetsDetails.final_total || 0;
  const commission = Number((finalTotal * 0.025).toString().slice(0, 6));
  const vat = Number(((finalTotal + commission) * 0.15).toString().slice(0, 6));

  const formatPrice = (price: number) => price.toLocaleString("en-US");

  return (
    <div className="space-y-4 border border-gray-300 rounded-md p-4">
      {/* السعر الافتتاحي */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">السعر الإفتتاحي</span>
        <span className="text-gray-800">
          {formatPrice(AssetsDetails.open_price || 0)}
        </span>
      </div>

      {/* أعلى مزايدة */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">أعلي قيمة مزايدة</span>
        <span className="text-gray-800">
          {formatPrice(AssetsDetails.highest_offer || 0)}
        </span>
      </div>

      {/* سعر المتر */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">سعر المتر</span>
        <span className="text-gray-800">
          {formatPrice(AssetsDetails.meter_price || 0)}
        </span>
      </div>

      {/* قيمة السعي */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">قيمة السعي 2.5%</span>
        <span className="text-gray-800">{formatPrice(commission)}</span>
      </div>

      {/* الضريبة */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">
          ضريبة القيمة المضافة 15%
        </span>
        <span className="text-gray-800">{formatPrice(vat)}</span>
      </div>

      {/* الحد الأدنى */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <span className="text-[#7A7474] font-normal">الحد الادنى للمزايدة</span>
        <span className="text-gray-800">
          {formatPrice(AssetsDetails.deposit || 0)}
        </span>
      </div>

      {/* الإجمالي */}
      <div className="flex items-center justify-between font-semibold">
        <span>إجمالي المبلغ</span>
        <span className="text-gray-800 text-lg">
          {formatPrice(AssetsDetails?.final_total || 0)}
        </span>
      </div>
    </div>
  );
};

export default AssetPriceDetails;
