import ApartmentDrawing from "@/components/molecules/banners/ApartmentDrawing";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";
import AuctionRegisterCard from "@/components/molecules/cards/AuctionRegisterCard";
import LocationProperty from "@/components/molecules/Locations/LocationProperty";
import DescriptionProperty from "@/components/molecules/textGroup/DescriptionProperty";
import LegalInfoProperty from "@/components/molecules/textGroup/LegalInfoProperty";
import PropertyFeatures from "@/components/templates/PropertyFeatures";
import PropertyTrends from "@/components/templates/propertyTrends";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuctionPropertyPage = async ({
  params,
}: {
  params: Promise<{
    auctionsId: string;
    auctionId: string;
    auctionPropertyId: string;
  }>;
}) => {
  const { auctionsId, auctionId, auctionPropertyId } = await params;

  console.log(auctionsId, auctionId, auctionPropertyId);

  return (
    <main className=" pt-6 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[100vh]">
        <Image
          src="/Images/7e964c24d909646f906c85a44396f46225dc152e.png"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="hidden md:block">
          <div className="absolute top-28 right-16 flex items-center gap-2">
            <Button className="bg-[#FEF0C7] hover:bg-[#FEF0C7]/80 text-black">
              قادم
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-gray-700 hover:bg-gray-100"
            >
              إلكتروني
            </Button>
          </div>

          <div className="absolute top-28 left-16 flex items-center gap-2">
            <Button
              variant="secondary"
              className="bg-white text-gray-700 hover:bg-gray-100"
            >
              <Image
                src="/Icons/carbon_notification.svg"
                alt="follow"
                width={20}
                height={20}
              />
              متابعة
            </Button>
          </div>
        </div>
      </div>

      <div className="Container mt-4">
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button className="bg-[#FEF0C7] hover:bg-[#FEF0C7]/80 text-black">
              قادم
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-gray-700 hover:bg-gray-100"
            >
              إلكتروني
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="bg-white text-gray-700 hover:bg-gray-100"
            >
              <Image
                src="/Icons/carbon_notification.svg"
                alt="follow"
                width={20}
                height={20}
              />
              متابعة
            </Button>
          </div>
        </div>

        <div className="mt-4 md:mt-10 space-y-16">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                  مزاد روائع الرياض
                </h1>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg md:text-xl">
                    الصناعية الثانية, الدمام
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-lg font-medium">طرق التواصل</h1>
                <CallUserBtns isText />
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4">
                <Image
                  src="/Icons/proicons_pdf-2.svg"
                  alt="pdf"
                  width={30}
                  height={30}
                />
                <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
              </div>

              <AuctionRegisterCard />
            </div>
          </div>

          <div className="flex md:!hidden flex-col gap-4 items-center">
            <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4">
              <Image
                src="/Icons/proicons_pdf-2.svg"
                alt="pdf"
                width={30}
                height={30}
              />
              <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
            </div>

            <AuctionRegisterCard />
          </div>

          {/* Property Features Grid */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
              تفاصيل العقار
            </h1>
            <PropertyFeatures className="grid md:grid-cols-2 gap-8" />
          </div>

          {/* Description Section */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
              الوصف
            </h1>
            <DescriptionProperty />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                الحدود و الأطوال
              </h1>
              <PropertyTrends />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 text-right mb-4">
                الموقع
              </h1>
              <LocationProperty />
            </div>
          </div>

          <ApartmentDrawing />
          <LegalInfoProperty />
        </div>
      </div>
    </main>
  );
};

export default AuctionPropertyPage;
