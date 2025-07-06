import Image from "next/image";
import React from "react";

const AdvertisingPromotionCard = () => {
  return (
    <div className="bg-primary-dark p-8 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:bg-primary-dark/80 duration-300">
      <div className="flex  gap-4">
        <div>
          <Image
            src="/Icons/streamline_graph-bar-increase.svg"
            alt="streamline graph"
            width={60}
            height={60}
          />
        </div>

        <div className="flex flex-col gap-2 text-white">
          <h2 className="text-xl font-semibold">ترويج الإعلان</h2>
          <h4 className="font-light">خدمات تساعدك علي تسريع بيع إعلانك</h4>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingPromotionCard;
