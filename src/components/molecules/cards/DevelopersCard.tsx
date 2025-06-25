import { DeveloperType } from "@/types/Developers";
import Image from "next/image";
import Link from "next/link";

interface DeveloperCardProps {
  Developer: DeveloperType;
}

const DevelopersCard = ({ Developer }: DeveloperCardProps) => {
  const { name, image } = Developer;
  return (
    <Link
      href={"/"}
      className="border border-gray-300 rounded-2xl py-8 px-4 group duration-300 hover:shadow-md"
    >
      <div className="flex flex-col justify-center items-center gap-4 overflow-hidden p-1">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          loading="lazy"
          className="rounded-xl object-fit-cover border border-gray-300 duration-300 group-hover:scale-105"
        />

        <h3 className="duration-300 group-hover:drop-shadow-sm group-hover:text-primary">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default DevelopersCard;
