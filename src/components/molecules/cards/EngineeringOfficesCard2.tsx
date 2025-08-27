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
      <div className="relative w-full h-[180px] overflow-hidden rounded-xl">
        <Image
          src={`${profile?.image}` || "/placeholder.svg"}
          alt={name}
          fill
          className="duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center gap-4 px-4 py-4 text-center">
        <div className="flex items-center gap-1 text-sm text-primary">
          <MapPin className="w-4 h-4" />
          <span>{city}</span>
        </div>
        <h2 className="text-lg font-medium">{profile?.name}</h2>
      </div>
    </Link>
  );
};

export default EngineeringOfficesCard2;
