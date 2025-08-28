import { EngineeringOfficeType } from "@/types/EngineeringOffices";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EngineeringOfficesCardProps {
  EngineeringOffices: EngineeringOfficeType;
  path: string;
}

const EngineeringOfficesCard2 = ({
  EngineeringOffices,
  path,
}: EngineeringOfficesCardProps) => {
  const { profile, name, city } = EngineeringOffices;

  console.log("EngineeringOffices", EngineeringOffices);

  return (
    <Link
      href={path || `/`}
      className="bg-secondary rounded-2xl p-2 group duration-300 shadow-sm hover:shadow-md"
    >
      <div className="relative w-full h-[100px] md:h-[180px] overflow-hidden rounded-xl">
        <Image
          src={profile?.image || "/placeholder.svg"}
          alt={name || ""}
          fill
          quality={100}
          loading="lazy"
          className="duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center gap-1 md:gap-4 px-2 md:px-4 py-2 md:py-4 text-center">
        <div className="flex items-center gap-1 text-[10px] md:text-sm text-primary">
          <MapPin className="w-2 h-2 md:w-4 md:h-4" />
          <span>{city || ""}</span>
        </div>
        <h2 className="!text-[10px] md:text-lg md:font-medium">
          {profile?.name || ""}
        </h2>
      </div>
    </Link>
  );
};

export default EngineeringOfficesCard2;
