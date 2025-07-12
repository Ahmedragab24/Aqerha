import { PromotionServiceType } from "@/app/(pages)/promotion-services/page";
import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import ShareBtn from "@/components/atoms/buttons/ShareBtn";
import Riyal from "@/components/atoms/Icons/Riyal";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  data: PromotionServiceType;
  ImageStyle?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PromotionServiceInDetailsCard = ({
  data,
  ImageStyle,
  isSelected,
  onSelect,
}: Props) => {
  const { name, description } = data;

  return (
    <div
      className={`bg-secondary rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4 ${
        isSelected ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
      }`}
      onClick={onSelect}
    >
      {/* Property Image */}
      <div
        className={`relative w-full h-[20vh] md:h-[40vh] overflow-hidden rounded-xl sm:rounded-2xl ${ImageStyle}`}
      >
        <Image
          src="/Images/RealEstateGuid.jpg"
          alt="Property Interior"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
          quality={100}
        />
        <GradientOverlay position="top" />
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
          <FavoriteBtn />
          <ShareBtn />
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary mb-2">{name}</h2>
            {/* Property Features */}
            <div className="flex items-center justify-between gap-4 text-gray-600">
              {/* Area */}
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/LandArea.svg"
                  alt="Triangle"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-gray-500">155 م²</span>
              </div>

              {/* Bathrooms */}
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/Bathroom.svg"
                  alt="Triangle"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-gray-500">2 حمام</span>
              </div>

              {/* Bedrooms */}
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/Bed.svg"
                  alt="Triangle"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-gray-500">4 سرير</span>
              </div>
            </div>
          </div>
          {/* Location */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-1 mb-4 text-gray-600">
              <MapPin className="w-4 h-4" />
              <p className="text-gray-500 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-1 text-lg md:text-2xl font-semibold text-primary">
              <h4>740500</h4>
              <Riyal className="!w-7 !h-7" />
              <h4>/الشهر</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionServiceInDetailsCard;
