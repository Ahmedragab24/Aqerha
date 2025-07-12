import Image from "next/image";
import type { RealEstesType } from "@/types/products";
import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import Link from "next/link";
import Riyal from "@/components/atoms/Icons/Riyal";

interface RealEstateCardProps {
  product: RealEstesType;
}

const RealEstateCard = ({ product }: RealEstateCardProps) => {
  const { id, name, image, isPopular, Area, Bathrooms, beds, location, price } =
    product;

  return (
    <Link
      href={`/Properties/${id}`}
      className="bg-white rounded-2xl  max-w-sm mx-auto border border-gray-200 duration-300 shadow-md hover:shadow-lg group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative">
        <div className="h-60 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            width={400}
            height={240}
            loading="lazy"
            className="w-full h-60 object-cover duration-300 group-hover:scale-105"
          />
        </div>

        {/* Popular Badge */}
        {isPopular && (
          <>
            <div className="absolute top-56 translate-middle-x -right-[10px] bg-primary text-white px-6 py-[6px] rounded-t-md rounded-bl-md flex items-center gap-2 text-sm font-medium">
              <Image
                src="/Icons/Stars.svg"
                alt="Triangle"
                width={15}
                height={15}
              />
              <span>رائجة</span>
            </div>

            <div className="absolute top-64 translate-middle-x -right-[10px] -rotate-[360deg]">
              <Image
                src="/Icons/Triangle.svg"
                alt="Triangle"
                width={11}
                height={11}
              />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="px-5 py-7">
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-center gap-1 mb-3">
            <span className="text-2xl font-medium text-primary">{price}</span>
            <Riyal className="text-primary" />
            <span className="text-gray-500 text-sm">\ الشهر</span>
          </div>
          {/* Heart Icon */}
          <FavoriteBtn />
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
        <div className="flex items-center justify-between text-gray-600 border-t border-gray-200 pt-4">
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

export default RealEstateCard;
