import Image from "next/image";
import { Heart, Home, Bath, Bed } from "lucide-react";
import type { RealEstesType } from "@/types/products";

interface RealEstateCardProps {
  product: RealEstesType;
}

const RealEstateCard = ({ product }: RealEstateCardProps) => {
  const { name, image, isPopular, Area, Bathrooms, beds, location, price } =
    product;

  return (
    <div className="bg-white rounded-2xl  overflow-hidden max-w-sm mx-auto border border-gray-200 duration-200 shadow-md hover:shadow-lg group cursor-pointer">
      {/* Image Container */}
      <div className="relative">
        <Image
          src={image || "/images/property.png"}
          alt={name}
          width={400}
          height={240}
          className="w-full h-60 object-cover duration-200 group-hover:scale-105"
        />

        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
            <span>رائجة</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )}

        {/* Heart Icon */}
        <button className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="flex items-center justify-end gap-2 mb-3">
          <span className="text-gray-500 text-sm">الشهر</span>
          <span className="text-gray-500 text-sm">ج.م</span>
          <span className="text-2xl font-bold text-green-700">
            {price.toLocaleString()}
          </span>
        </div>

        {/* Property Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
          {name}
        </h3>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-6 text-right leading-relaxed">
          {location}
        </p>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-600">
          {/* Area */}
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-green-700" />
            <span className="text-sm">{Area} م²</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-green-700" />
            <span className="text-sm">{Bathrooms} حمام</span>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-green-700" />
            <span className="text-sm">{beds} سرير</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
