import Riyal from "@/components/atoms/Icons/Riyal";
import RealEstateMarketingRequestDialog from "@/components/organisms/Popups/RealEstateMarketingRequestDialog";
import { Button } from "@/components/ui/button";
import { MarketerOrBrokerRequestType } from "@/types/marketerOrBroker";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: MarketerOrBrokerRequestType;
  path: string;
}

const MarketerOrBrokerCard = ({ data }: Props) => {
  const { name, maxAria, maxPrice, minAria, minPrice, phone, whatsapp } = data;
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/Icons/ix_building1-filled.svg"
            alt="building"
            width={25}
            height={25}
          />
          <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-500">
            {minAria} - {maxAria} م2
          </h3>
          <h2 className="flex items-center gap-1 text-lg font-semibold text-primary">
            {minPrice} - {maxPrice} <Riyal />
          </h2>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link href={`tel:${phone}`} className="w-full">
            <Button
              variant={"outline"}
              size={"lg"}
              className="bg-white border-none shadow-md w-full h-11 hover:bg-white/60"
            >
              <Image
                src="/Icons/mingcute_phone-line.svg"
                alt="building"
                width={20}
                height={20}
              />
              اتصل بي
            </Button>
          </Link>

          <Link href={`tel:${whatsapp}`} className="w-full">
            <Button
              variant={"secondary"}
              size={"lg"}
              className="bg-white text-primary-light w-full h-11 border-none shadow-md hover:bg-white/60"
            >
              <Image
                src="/Icons/basil_whatsapp-outline.svg"
                alt="building"
                width={20}
                height={20}
              />
              واتساب
            </Button>
          </Link>
        </div>

        <div className="flex justify-end">
          <RealEstateMarketingRequestDialog>
            <div className="flex items-center gap-1 text-sm duration-200 group text-gray-500 hover:text-gray-600 cursor-pointer py-2">
              <h5> عرض الطلب</h5>
              <ArrowLeft className="w-4 h-4 duration-200 group-hover:-translate-x-1" />
            </div>
          </RealEstateMarketingRequestDialog>
        </div>
      </div>
    </div>
  );
};

export default MarketerOrBrokerCard;
