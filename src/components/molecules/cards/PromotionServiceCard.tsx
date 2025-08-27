import { PromotionServiceType } from "@/types/Promotions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  service: PromotionServiceType;
}

const PromotionServiceCard = ({ service }: Props) => {
  const { id, title, description, benefits } = service;

  const FormatIcon = () => {
    switch (title) {
      case "highlight":
      case "إعلان مميز":
        return "/Icons/gravity-ui_star-fill.svg";

      case "golden":
      case "إعلان ذهبي":
        return "/Icons/material-symbols_crown-rounded-yellow.svg";

      case "notify":
      case "تنبيه المهتمين":
        return "/Icons/clarity_notification-solid.svg";

      case "social_campaign":
      case "حملة إعلانية مدفوعة":
        return "/Icons/Layer_1.svg";

      case "from_account":
      case "الإعلان عبر حسابات عقَرها":
        return "/Icons/gravity-ui_star-fill.svg";

      default:
        return "/Icons/gravity-ui_star-fill.svg";
    }
  };

  return (
    <Link
      href={`/promotion-services/${id}`}
      className={`p-8 rounded-lg cursor-pointer hover:bg-primary/20 hover:shadow-md duration-300 border border-gray-400 hover:border-primary space-y-4`}
    >
      <h3 className="text-xl text-primary font-medium">{title}</h3>

      <div className="flex items-center gap-4">
        <div>
          <Image
            src={FormatIcon()}
            alt="streamline graph"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{description}</h2>
          <h4 className="font-normal">{benefits}</h4>
        </div>
      </div>
    </Link>
  );
};

export default PromotionServiceCard;
