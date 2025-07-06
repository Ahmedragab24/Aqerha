import type { RealEstateGuideType } from "@/types/products";
import { MapPin } from "lucide-react";

import Image from "next/image";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import Riyal from "@/components/atoms/Icons/Riyal";
import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import ShareBtn from "@/components/atoms/buttons/ShareBtn";
import Link from "next/link";
import PopularBadge from "@/components/atoms/badges/PopularBadge";

interface Props {
  RealEstateGuideData: RealEstateGuideType;
}

const RealEstateGuideCard = ({ RealEstateGuideData }: Props) => {
  const { id, Area, Bathrooms, beds, image, isPopular, location, name, price } =
    RealEstateGuideData;

  console.log(id, isPopular);

  return (
    <Link
      href={`/Properties/${id}`}
      className="bg-secondary rounded-2xl shadow-md p-2 group duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative w-auto h-60 overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          loading="lazy"
          className="w-full h-full object-cover rounded-xl duration-300 group-hover:scale-105"
        />
        <GradientOverlay position="top" />

        {/* Overlay Icons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <FavoriteBtn />
          <ShareBtn />
        </div>

        {/* Overlay Popular */}
        {isPopular && (
          <div className="absolute top-4 right-4 flex gap-2">
            <PopularBadge />
          </div>
        )}

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-1">
            {price}
            <Riyal className="!w-6 !h-6" />
          </div>
          <div className="text-lg font-medium">112,467 شهرياً / 6 سنوات</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Price */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            شقة للإيجار
          </h3>

          <div className="flex items-center gap-1 md:text-lg font-medium text-primary">
            <h4>{price}</h4>
            <Riyal className="!w-5 !h-5" />
            <h4>/الشهر</h4>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mb-4 text-gray-600">
          <MapPin className="w-4 h-4" />
          <p className="text-gray-500 text-sm  leading-relaxed">{location}</p>
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-600">
          {/* Area */}
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/LandArea.svg"
              alt="Triangle"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-500">{Area} م²</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/Bathroom.svg"
              alt="Triangle"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-500">{Bathrooms} حمام</span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-2">
            <Image src="/Icons/Bed.svg" alt="Triangle" width={20} height={20} />
            <span className="text-sm text-gray-500">{beds} سرير</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RealEstateGuideCard;
