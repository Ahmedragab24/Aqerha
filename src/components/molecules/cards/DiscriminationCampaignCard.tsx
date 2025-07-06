import type { DiscriminationCampaignType } from "@/types/products";
import Image from "next/image";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import Riyal from "@/components/atoms/Icons/Riyal";
import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import ShareBtn from "@/components/atoms/buttons/ShareBtn";
import Link from "next/link";

interface Props {
  DiscriminationCampaign: DiscriminationCampaignType;
}

const DiscriminationCampaignCard = ({ DiscriminationCampaign }: Props) => {
  const { id, dailyBudget, endDate, image, name, startDate } =
    DiscriminationCampaign;

  return (
    <Link
      href={`/discrimination-campaigns/${id}`}
      className="bg-secondary rounded-2xl shadow-md p-2 group duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative w-auto h-60 overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          loading="lazy"
          className="w-full h-full object-cover rounded-xl duration-300 group-hover:scale-105"
        />
        <GradientOverlay position="top" />

        {/* Overlay Icons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <FavoriteBtn />
          <ShareBtn />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Price */}
        <h3 className="text-lg md:text-2xl font-semibold text-primary mb-2">
          شقة للإيجار
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-1 md:text-sm  text-gray-600">
            <h4>الميزانية اليومية: </h4>
            <h4>{dailyBudget}</h4>
            <Riyal className="!w-4 !h-4" />
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <p className="text-gray-500 text-sm  leading-relaxed">
              تاريخ الإنتهاء:
            </p>
            <p className="text-gray-500 text-sm  leading-relaxed">{endDate}</p>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <p className="text-gray-500 text-sm  leading-relaxed">
              تاريخ الإنشاء:
            </p>
            <p className="text-gray-500 text-sm  leading-relaxed">
              {startDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscriminationCampaignCard;
