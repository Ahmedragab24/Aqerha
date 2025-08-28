import ArrowTLBlend from "../../atoms/Icons/ArrowTLBlend";
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
  const { id, name, profile } = EngineeringOffices;

  return (
    <Link
      href={`/engineeringOffices/${id}`}
      className="block w-full bg-secondary rounded-2xl sm:rounded-3xl lg:rounded-4xl p-3 sm:p-4 lg:p-6 duration-300 shadow-sm hover:shadow-lg group transition-all"
    >
      {/* Mobile Layout (< 640px) */}
      <div className="flex flex-col sm:hidden items-start gap-2">
        {/* Image */}
        <div className="w-full h-[70px] rounded-lg overflow-hidden">
          <Image
            src={profile?.image || "/placeholder.svg"}
            alt={name}
            width={70}
            height={70}
            loading="lazy"
            className="rounded-lg duration-300 group-hover:scale-105 object-cover w-full h-full"
          />
        </div>

        {/* Content */}

        <div className="flex flex-col gap-1">
          <h2 className="text-[10px] md:text-sm md:font-bold truncate">
            {profile?.name}
          </h2>

          <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed line-clamp-2">
            {profile?.description}
          </p>
        </div>
      </div>

      {/* Tablet Layout (640px - 1024px) */}
      <div className="hidden sm:flex lg:hidden items-start gap-4">
        {/* Image */}
        <div className="flex-shrink-0 w-[100px] h-[100px] rounded-xl overflow-hidden">
          <Image
            src={profile?.image || "/placeholder.svg"}
            alt={name}
            width={100}
            height={100}
            loading="lazy"
            className="rounded-xl duration-300 group-hover:scale-105 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-bold leading-tight pr-2 truncate">
              {profile?.name}
            </h2>
            <ArrowTLBlend
              color="black"
              className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 w-5 h-5 flex-shrink-0"
            />
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-3">
            {profile?.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-primary-dark min-w-0 truncate">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{profile?.address}</span>
            </div>
            <div className="text-primary-light font-medium whitespace-nowrap">
              المكاتب الهندسية
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="relative hidden lg:flex justify-between items-center gap-6">
        {/* Image */}
        <div className="relative w-[150px] h-[150px] flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={profile?.image || "/placeholder.svg"}
            alt={name}
            fill
            loading="lazy"
            className="rounded-xl duration-300 group-hover:scale-105 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-3 leading-tight truncate">
              {profile?.name}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[400px]">
              {profile?.description}
            </p>
          </div>

          <div className="flex justify-between gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1 text-primary-dark min-w-0 truncate">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{profile?.address}</span>
            </div>
            <div className="text-primary-light font-medium whitespace-nowrap">
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
    </Link>
  );
};

export default EngineeringOfficesCard;
