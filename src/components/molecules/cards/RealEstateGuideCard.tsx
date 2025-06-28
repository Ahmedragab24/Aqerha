import type { RealEstateGuideType } from "@/types/products";
import { MapPin } from "lucide-react";

import Image from "next/image";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import Riyal from "@/components/atoms/Icons/Riyal";
import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import ShareBtn from "@/components/atoms/buttons/ShareBtn";
import Link from "next/link";

interface Props {
  RealEstateGuideData: RealEstateGuideType;
}

const RealEstateGuideCard = ({ RealEstateGuideData }: Props) => {
  const { id, Area, Bathrooms, beds, image, isPopular, location, name, price } =
    RealEstateGuideData;

  console.log(id, isPopular);

  return (
    <Link
      href={"/"}
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
        <GradientOverlay />

        {/* Overlay Icons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <FavoriteBtn />
          <ShareBtn />
        </div>

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
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          شقة للإيجار
        </h3>

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
            <span className="text-sm text-gray-400">{Area} م²</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/Bathroom.svg"
              alt="Triangle"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-400">{Bathrooms} حمام</span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-2">
            <Image src="/Icons/Bed.svg" alt="Triangle" width={20} height={20} />
            <span className="text-sm text-gray-400">{beds} سرير</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RealEstateGuideCard;
