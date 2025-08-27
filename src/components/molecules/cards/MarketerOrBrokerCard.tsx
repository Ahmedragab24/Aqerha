import { formatName, formatPurpose } from "@/lib/utils";
import Riyal from "../../atoms/Icons/Riyal";
import { Button } from "../../ui/button";
import { RealEstesType } from "@/types/Real-estates";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: RealEstesType;
}

const MarketerOrBrokerCard = ({ data }: Props) => {
  const title = `مطلوب ${formatName(
    data?.real_estate_type
  )} ${" "} ${formatPurpose(data?.purpose)} في ${data?.city}`;

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
          <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        </div>

        <div className="space-y-2">
          {data?.max_area ? (
            <h3 className="text-lg font-semibold text-gray-500">
              {data?.main_area} - {data?.max_area} م2
            </h3>
          ) : (
            <h3 className="text-lg font-semibold text-gray-500">
              {data?.main_area} م2
            </h3>
          )}
          {data?.max_price ? (
            <h2 className="flex items-center gap-1 text-lg font-semibold text-primary">
              {data?.main_price} - {data?.max_price} <Riyal />
            </h2>
          ) : (
            <h2 className="flex items-center gap-1 text-lg font-semibold text-primary">
              {data?.main_price} <Riyal />
            </h2>
          )}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link href={`tel:${data?.user?.phone}`} className="w-full">
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

          <Link href={`https://wa.me/${data?.user?.phone}`} className="w-full">
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
      </div>
    </div>
  );
};

export default MarketerOrBrokerCard;
