import { MapPin } from "lucide-react";

import Image from "next/image";
import GradientOverlay from "../../atoms/sliders/GradientOverlay";
import Riyal from "../../atoms/Icons/Riyal";
import FavoriteBtn from "../../atoms/buttons/FavoriteBtn";
import { ExploreRealEstateType } from "@/types/Real-estates";
import { formatName, formatPrice, formatPurpose } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  ExploreRealEstate: ExploreRealEstateType;
}

const RealEstateGuideCard = ({ ExploreRealEstate }: Props) => {
  const {
    id,
    area,
    bathrooms,
    location,
    main_image,
    price,
    rooms,
    type,
    purpose,
  } = ExploreRealEstate;
  const router = useRouter();

  const Name = formatName(type);
  const Purpose = formatPurpose(purpose);

  return (
    <div
      onClick={() => router.push(`/real-estate/${id}`)}
      className="bg-secondary rounded-2xl shadow-md p-2 cursor-pointer group duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative w-auto h-60 overflow-hidden rounded-xl">
        <Image
          src={main_image || "/placeholder.svg"}
          alt={type}
          fill
          loading="lazy"
          className="w-full h-full object-cover rounded-xl duration-300 group-hover:scale-105"
        />
        <GradientOverlay position="top" />

        {/* Overlay Icons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <FavoriteBtn type="card" RealStateId={id} />
        </div>

        {/* Overlay Popular */}
        {/* {purpose !== "none" && (
          <div className="absolute top-4 right-4 flex gap-2">
            <PopularBadge />
          </div>
        )} */}

        {/* Price Overlay */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-1">
            {price}
            <Riyal className="!w-6 !h-6" />
          </div>
          <div className="text-lg font-medium">112,467 شهرياً / 6 سنوات</div>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title & Price */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {Name} {Purpose}
          </h3>

          <div className="flex items-center md:text:lg font-semibold text-primary">
            <h4>{formatPrice(+price)} </h4>
            <Riyal className="!w-5 !h-5" />
          </div>
        </div>

        {/* Location */}
        {location && (
          <div className="flex items-center gap-1 mb-4 text-gray-600">
            <MapPin className="w-4 h-4" />
            <p className="text-gray-500 text-sm  leading-relaxed">{location}</p>
          </div>
        )}

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
            <span className="text-sm text-gray-500">
              {formatPrice(+area)} م²
            </span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/Bathroom.svg"
              alt="Triangle"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-500">{bathrooms} حمام</span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-2">
            <Image src="/Icons/Bed.svg" alt="Triangle" width={20} height={20} />
            <span className="text-sm text-gray-500">{rooms} سرير</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateGuideCard;
