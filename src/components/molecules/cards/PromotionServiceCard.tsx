import { PromotionServiceType } from "@/app/(pages)/promotion-services/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  service: PromotionServiceType;
}

const PromotionServiceCard = ({ service }: Props) => {
  const { id, name, description, icon } = service;
  return (
    <Link
      href={`/promotion-services/${id}`}
      className={`p-8 rounded-lg cursor-pointer hover:bg-primary/20 hover:shadow-md duration-300 border border-gray-400`}
    >
      <div className="flex items-center gap-4">
        <div>
          <Image src={icon} alt="streamline graph" width={30} height={30} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <h4 className="font-normal">{description}</h4>
        </div>
      </div>
    </Link>
  );
};

export default PromotionServiceCard;
