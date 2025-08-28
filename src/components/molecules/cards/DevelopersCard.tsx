import { DeveloperType } from "@/types/Developers";
import Image from "next/image";
import Link from "next/link";

interface DeveloperCardProps {
  Developer: DeveloperType;
  path: string;
}

const DevelopersCard = ({ Developer, path }: DeveloperCardProps) => {
  const { name, profile } = Developer;
  return (
    <Link
      href={`${path}`}
      className="border border-gray-300 rounded-2xl py-4 md:py-8 md:px-4 group duration-300 hover:bg-secondary hover:shadow-md"
    >
      <div className="flex flex-col justify-center items-center gap-4 overflow-hidden p-1">
        <Image
          src={profile?.image || "/placeholder.svg"}
          alt={name}
          width={100}
          height={100}
          loading="lazy"
          className="rounded-xl object-fit-cover border border-gray-300 duration-300 group-hover:scale-105 w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
        />

        <h3 className="text-xs md:text-sm lg:text-lg text-center duration-300 group-hover:drop-shadow-sm group-hover:text-primary">
          {profile?.name}
        </h3>
      </div>
    </Link>
  );
};

export default DevelopersCard;
