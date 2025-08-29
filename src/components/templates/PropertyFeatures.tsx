"use client";

import { formatName, formatPrice } from "@/lib/utils";
import { useGetFeaturesByTypeQuery } from "@/store/services/Features";
import { RealEstesType } from "@/types/Real-estates";
import {
  Bookmark,
  Building,
  ChefHat,
  CircleCheckBig,
  CircleParking,
  DoorOpen,
  FerrisWheel,
  LayoutTemplate,
  MapPinHouse,
  Tv,
  Vault,
  Volleyball,
  WavesLadder,
  Wifi,
} from "lucide-react";
import Image from "next/image";

interface PropertyFeaturesProps {
  realEstate: RealEstesType | undefined;
  className?: string;
}

const PropertyFeatures = ({ realEstate, className }: PropertyFeaturesProps) => {
  const { data } = useGetFeaturesByTypeQuery(
    realEstate?.real_estate_type || "apartment"
  );
  const FeaturesList = data?.features;

  const FeatureIcon = (feature: string) => {
    switch (feature) {
      case "قسم العوائل":
        return <LayoutTemplate className="text-gray-400 w-6 h-6" />;
      case "مسبح":
        return <WavesLadder className="text-gray-400 w-6 h-6" />;
      case "ملعب كرة":
      case "ملعب كرة طائرة":
        return <Volleyball className="text-gray-400 w-6 h-6" />;
      case "مشب":
        return <Bookmark className="text-gray-400 w-6 h-6" />;
      case "مطبخ":
        return <ChefHat className="text-gray-400 w-6 h-6" />;
      case "ملاهي":
        return <FerrisWheel className="text-gray-400 w-6 h-6" />;
      case "حدد موقع العقار":
        return <MapPinHouse className="text-gray-400 w-6 h-6" />;
      case "مدخل سيارة":
        return <CircleParking className="text-gray-400 w-6 h-6" />;
      case "غرفة سائق":
      case "غرفة خادمة":
        return <DoorOpen className="text-gray-400 w-6 h-6" />;
      case "دوبلكس":
        return <Building className="text-gray-400 w-6 h-6" />;
      case "قبو":
        return <Vault className="text-gray-400 w-6 h-6" />;
      case "واي فاي":
        return <Wifi className="text-gray-400 w-6 h-6" />;
      case "تلفزيون":
        return <Tv className="text-gray-400 w-6 h-6" />;
      default:
        return <CircleCheckBig className="text-gray-400 w-6 h-6" />;
    }
  };

  return (
    <div className={className}>
      {/* Right Column */}

      <div>
        <h1 className="text-md md:text-lg font-bold text-right mb-2">
          تفاصيل العقار
        </h1>
        <div className="space-y-4 border border-gray-300 rounded-md p-4">
          {realEstate?.real_estate_type && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NTgwODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLWljb24gbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+"
                  alt="area"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  نوع العقار
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {formatName(realEstate?.real_estate_type || "")}
              </span>
            </div>
          )}

          {realEstate?.main_area && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/Area.svg"
                  alt="area"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  المساحة الكلية
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {formatPrice(+realEstate?.main_area) || 0} قدم²
              </span>
            </div>
          )}

          {realEstate?.rooms && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/double-bed 1.svg"
                  alt="bed"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  غرف النوم
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.rooms ? realEstate.rooms : "غير متوفر"}
              </span>
            </div>
          )}

          {realEstate?.salons && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NTgwODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNvZmEtaWNvbiBsdWNpZGUtc29mYSI+PHBhdGggZD0iTTIwIDlWNmEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnYzIi8+PHBhdGggZD0iTTIgMTZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi01YTIgMiAwIDAgMC00IDB2MS41YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNVYxMWEyIDIgMCAwIDAtNCAweiIvPjxwYXRoIGQ9Ik00IDE4djIiLz48cGF0aCBkPSJNMjAgMTh2MiIvPjxwYXRoIGQ9Ik0xMiA0djkiLz48L3N2Zz4="
                  alt="bed"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  غرف المعيشة
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.salons ? realEstate.salons : "غير متوفر"}
              </span>
            </div>
          )}

          {realEstate?.bathrooms && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/bath-tub 1.svg"
                  alt="bath"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  دورات المياه
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.bathrooms ? realEstate.bathrooms : "غير متوفر"}
              </span>
            </div>
          )}

          {realEstate?.number_of_floors && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/stairs 1.svg"
                  alt="stairs"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  عدد الطوابق
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.number_of_floors
                  ? realEstate.number_of_floors
                  : "غير متوفر"}
              </span>
            </div>
          )}

          {realEstate?.number_of_elevators && (
            <div className="flex items-center justify-between pb-1 md:pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/elevator 1.svg"
                  alt="elevator"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  عدد المصاعد
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.number_of_elevators
                  ? realEstate.number_of_elevators
                  : "غير متوفر"}
              </span>
            </div>
          )}

          {realEstate?.age && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/brick(2) 1.svg"
                  alt="year"
                  width={20}
                  height={20}
                />
                <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                  سنة البناء
                </span>
              </div>
              <span className="text-sm md:text-[16px] text-gray-800">
                {realEstate?.age && realEstate.age !== "0"
                  ? realEstate.age
                  : "غير متوفر"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Left Column */}
      <div>
        <h1 className="text-md md:text-lg font-bold text-right mb-2">
          مميزات العقار
        </h1>
        {FeaturesList && FeaturesList.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4">
            {FeaturesList.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="border-b pb-2 border-gray-200 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 text-sm md:text-[16px]">
                    {FeatureIcon(feature.name)}
                    <span className="text-sm md:text-[16px] text-[#7A7474] font-normal">
                      {feature.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyFeatures;
