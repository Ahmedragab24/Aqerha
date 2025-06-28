import ArrowTLBlend from "@/components/atoms/Icons/ArrowTLBlend";
import type { EngineeringOfficeType } from "@/types/EngineeringOffices";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EngineeringOfficesCardProps {
  EngineeringOffices: EngineeringOfficeType;
}

const EngineeringOfficesCard = ({
  EngineeringOffices,
}: EngineeringOfficesCardProps) => {
  const { name, description, image, city } = EngineeringOffices;

  return (
    <Link
      href={"/"}
      className="block w-full bg-secondary rounded-2xl sm:rounded-3xl lg:rounded-4xl p-3 sm:p-4 lg:p-6 duration-300 shadow-sm hover:shadow-lg group transition-all"
    >
      {/* Mobile Layout (< 640px) */}
      <div className="sm:hidden">
        <div className="relative">
          {/* Header with image and arrow */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={80}
                height={80}
                loading="lazy"
                className="rounded-lg duration-300 group-hover:scale-105 object-cover"
              />
            </div>
            <ArrowTLBlend
              color="black"
              className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 w-5 h-5"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold leading-tight">{name}</h2>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
              {description}
            </p>

            <div className="flex justify-between gap-1 text-xs">
              <div className="flex items-center gap-1 text-primary-dark">
                <MapPin className="w-3 h-3" />
                <span>{city}، السعودية</span>
              </div>
              <div className="text-primary-light font-medium">
                المكاتب الهندسية
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (640px - 1024px) */}
      <div className="hidden sm:block lg:hidden">
        <div className="relative flex items-start gap-4">
          {/* Image */}
          <div className="flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={120}
              height={120}
              loading="lazy"
              className="rounded-xl duration-300 group-hover:scale-105 object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-2">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold leading-tight pr-2">{name}</h2>
              <ArrowTLBlend
                color="black"
                className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 w-6 h-6 flex-shrink-0"
              />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-primary-dark">
                <MapPin className="w-4 h-4" />
                <span>{city}، السعودية</span>
              </div>
              <div className="text-primary-light font-medium text-sm">
                المكاتب الهندسية
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:block">
        <div className="relative flex justify-between items-center gap-6">
          {/* Image */}
          <div className="flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={160}
              height={160}
              loading="lazy"
              className="rounded-xl duration-300 group-hover:scale-105 object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-3 leading-tight">{name}</h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[400px]">
                {description}
              </p>
            </div>

            <div className="flex justify-between gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 text-primary-dark">
                  <MapPin className="w-4 h-4" />
                  <span>{city}</span>
                </div>
                <span>، السعودية</span>
              </div>

              <div className="text-primary-light font-medium text-sm">
                المكاتب الهندسية
              </div>
            </div>
          </div>

          {/* Arrow Icon */}
          <ArrowTLBlend
            color="black"
            className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 w-6 h-6 flex-shrink-0"
          />
        </div>
      </div>
    </Link>
  );
};

export default EngineeringOfficesCard;
