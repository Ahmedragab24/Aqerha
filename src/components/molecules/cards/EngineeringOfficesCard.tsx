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
      className="w-full mx-auto bg-secondary rounded-4xl p-4 duration-300 shadow-sm hover:shadow-lg group"
    >
      {/* Main card container */}
      <div className="relative flex justify-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0 text-center rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            loading="lazy"
            className="rounded-xl duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col pt-8">
          {/* Description */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[400px]">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center gap-2 text-gray-500 text-sm">
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

        {/* Left section - Icon */}
        <ArrowTLBlend
          color="black"
          className="duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  );
};

export default EngineeringOfficesCard;
