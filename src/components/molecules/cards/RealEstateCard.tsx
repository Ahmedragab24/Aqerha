"use client";

import Image from "next/image";
import type { RealEstesType } from "@/types/Real-estates";
import FavoriteBtn from "../../atoms/buttons/FavoriteBtn";
import Riyal from "../../atoms/Icons/Riyal";
import PurposeBadge from "@/components/atoms/badges/PurposeBadge";
import { useRouter } from "next/navigation";
import { formatName, formatPurpose } from "@/lib/utils";

interface RealEstateCardProps {
  product: RealEstesType;
}

const RealEstateCard = ({ product }: RealEstateCardProps) => {
  const {
    id,
    description,
    main_image,
    ad,
    main_area,
    bathrooms,
    rooms,
    city,
    main_price,
    real_estate_type,
    purpose,
    rental_period,
  } = product;

  const Router = useRouter();

  return (
    <div
      onClick={() => Router.push(`/real-estate/${id}`)}
      className="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full">
        {main_image ? (
          <div className="h-48 sm:h-60 overflow-hidden rounded-t-2xl">
            <Image
              src={main_image}
              alt={description || "Property"}
              width={600}
              height={400}
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="h-full overflow-hidden rounded-t-2xl">
            <Image
              src="/Images/PlaceHolder.png"
              alt={description || "Property"}
              width={600}
              height={400}
              loading="lazy"
              className="w-[250px] h-full m-auto object-contain duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Popular Badge */}
        {ad?.promotion && (
          <div className="absolute -top-14 md:top-0 right-0 z-10">
            <PurposeBadge />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 sm:px-5 py-4 sm:py-6">
        <div className="flex items-center justify-between mb-3">
          {/* Price */}
          <div className="flex items-center gap-1">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {main_price}
            </span>
            <Riyal className="text-primary" />
            {purpose === "rent" && (
              <span className="text-gray-500 text-xs sm:text-sm">
                /{" "}
                {rental_period === "daily"
                  ? "يوم"
                  : rental_period === "weekly"
                  ? "اسبوع"
                  : rental_period === "monthly"
                  ? "شهر"
                  : rental_period === "yearly"
                  ? "سنة"
                  : ""}
              </span>
            )}
          </div>
          {/* Heart Icon */}
          <FavoriteBtn RealStateId={id} type="card" />
        </div>

        {/* Property Name */}
        <h3 className="text-base sm:text-lg font-semibold line-clamp-1 text-gray-900 mb-1 text-right">
          {formatName(real_estate_type) + " " + formatPurpose(purpose)}
        </h3>

        {/* Location */}
        <p className="text-gray-500 text-xs sm:text-sm mb-4 text-right leading-relaxed">
          {city}
        </p>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-600 border-t border-gray-200 pt-3 mt-auto">
          {/* Area */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Icons/LandArea.svg"
              alt="مساحة"
              width={20}
              height={20}
            />
            <span className="text-xs sm:text-sm text-gray-400">
              {main_area} م²
            </span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Icons/Bathroom.svg"
              alt="حمام"
              width={20}
              height={20}
            />
            <span className="text-xs sm:text-sm text-gray-400">
              {bathrooms} حمام
            </span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image src="/Icons/Bed.svg" alt="غرف" width={20} height={20} />
            <span className="text-xs sm:text-sm text-gray-400">
              {rooms} غرف
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
