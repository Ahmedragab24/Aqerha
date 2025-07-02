import { EngineeringOfficeType } from "@/types/EngineeringOffices";
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
  const { image, name } = EngineeringOffices;

  return (
    <Link
      href={path || `/`}
      className="bg-secondary rounded-2xl p-2 group duration-300 shadow-sm hover:shadow-md"
    >
      <div className="relative w-full h-[180px] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 py-4 text-center">
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default EngineeringOfficesCard2;
