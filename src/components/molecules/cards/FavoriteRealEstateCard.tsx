"use client";

import Image from "next/image";

import FavoriteBtn from "../../atoms/buttons/FavoriteBtn";
import Riyal from "../../atoms/Icons/Riyal";

import { useRouter } from "next/navigation";
import { FavoriteType } from "@/types/Favorites";
import { formatName } from "@/lib/utils";
import { TypePropertyType } from "@/types/Real-estates";

interface FavoriteRealEstateCardProps {
  product: FavoriteType;
}

const FavoriteRealEstateCard = ({ product }: FavoriteRealEstateCardProps) => {
  const { id, main_image, price, area, bathrooms, title, rooms } = product;

  const Router = useRouter();

  return (
    <div
      onClick={() => Router.push(`/real-estate/${id}`)}
      className="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full">
        {main_image ? (
          <div className="h-36 sm:h-60 overflow-hidden rounded-t-2xl">
            <Image
              src={main_image}
              alt={title || "Property"}
              width={600}
              height={400}
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="h-36 sm:h-60 overflow-hidden rounded-t-2xl">
            <Image
              src="/Images/PlaceHolder.png"
              alt={title || "Property"}
              width={600}
              height={400}
              loading="lazy"
              className="w-[250px] h-full m-auto object-contain duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 sm:px-5 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Property Name */}
          <h3 className="text-sm md:text-lg font-semibold line-clamp-1 text-gray-900 mb-1 text-right">
            {formatName(title as TypePropertyType)}
          </h3>

          {/* Heart Icon */}
          <FavoriteBtn RealStateId={id} type="card" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs sm:text-sm lg:text-2xl font-semibold text-primary">
            {price}
          </span>
          <Riyal className="text-primary" />
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-600 border-t border-gray-200 pt-3 ">
          {/* Area */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Icons/LandArea.svg"
              alt="مساحة"
              width={20}
              height={20}
              className="w-2.5 h-2.5 md:w-5 md:h-5"
            />
            <span className="text-[9px] sm:text-sm text-gray-400">
              {area} م²
            </span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Icons/Bathroom.svg"
              alt="حمام"
              width={20}
              height={20}
              className="w-2.5 h-2.5 md:w-5 md:h-5"
            />
            <span className="text-[9px] sm:text-sm text-gray-400">
              {bathrooms} حمام
            </span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Icons/Bed.svg"
              alt="غرف"
              width={20}
              height={20}
              className="w-2.5 h-2.5 md:w-5 md:h-5"
            />
            <span className="text-[9px] sm:text-sm text-gray-400">
              {rooms} غرف
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteRealEstateCard;
