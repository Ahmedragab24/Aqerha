"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import CallUserBtns from "../btnsGroup/CallUserBtns";
import { RealEstesUser } from "@/types/Real-estates";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setAdvertiserData } from "@/store/features/Advertiser/AdvertiserDataSlice";

interface AdvertiserCardProps {
  data: RealEstesUser | undefined;
  productId: number;
}

const AdvertiserCard = ({ data, productId }: AdvertiserCardProps) => {
  const { id, name, image, reviews, ads, phone } = data!;
  const dispatch = useAppDispatch();

  const Router = useRouter();
  const handleAdvertiser = () => {
    dispatch(setAdvertiserData(data!));
    Router.push(`/real-estate/${id}/advertiser`);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 space-y-4">
      <div className="flex items-center gap-4 justify-between">
        <h1 className="text-lg text-primary">المُعلِن</h1>

        <div className="flex gap-2 items-center">
          <Image
            src="/Icons/Real Estate Logo 1.svg"
            alt="Real Estate"
            width={25}
            height={25}
          />
          <Image src="/Icons/home.svg" alt="home" width={20} height={20} />
        </div>

        <h4 className="text-sm text-gray-400">{name}</h4>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={image || "/placeholder.svg"}
            alt="advertiser"
            loading="lazy"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        <div className="space-y-2">
          <h2>{name}</h2>
          <h5 className="text-sm text-gray-400">تقييم {reviews.length} من ٥</h5>
          <h5 className="text-sm text-gray-400">{ads.length} إعلان نشط</h5>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-center gap-2">
        <CallUserBtns
          isText={false}
          phone={phone}
          userId={id || 0}
          productId={productId || 0}
        />

        <Button
          size={"lg"}
          className="px-16"
          onClick={() => handleAdvertiser()}
        >
          الدخول
        </Button>
      </div>
    </div>
  );
};

export default AdvertiserCard;
