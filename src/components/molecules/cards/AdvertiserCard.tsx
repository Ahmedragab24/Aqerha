import { AdvertiserType } from "@/types/Advertisers";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CallUserBtns from "../btnsGroup/CallUserBtns";
import Link from "next/link";

interface AdvertiserCardProps {
  data: AdvertiserType;
  propertyId: string;
}

const AdvertiserCard = ({ data, propertyId }: AdvertiserCardProps) => {
  const { name, advertisementsNum, phone, rating } = data;
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

        <h4 className="text-sm text-gray-400">السلام للتطوير العقاري</h4>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="/Images/Ellipse 34.png"
            alt="advertiser"
            loading="lazy"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        <div className="space-y-2">
          <h2>{name}</h2>
          <h5 className="text-sm text-gray-400">تقييم {rating} من ٥</h5>
          <h5 className="text-sm text-gray-400">
            {advertisementsNum} إعلان نشط
          </h5>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end items-center gap-2">
        <CallUserBtns isText={false} phone={phone} />

        <Link href={`/PropertiesForRent/${propertyId}/advertiser`}>
          <Button size={"lg"} className="px-16">
            الدخول
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdvertiserCard;
