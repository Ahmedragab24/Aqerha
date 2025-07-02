import SectionTitle from "@/components/atoms/title/SectionTitle";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";
import AuctionDetailsCard2 from "@/components/molecules/cards/AuctionDetailsCard2";
import { Button } from "@/components/ui/button";
import { AuctionsList } from "@/constants/cards/AuctionCard";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuctionDetailsPage = async ({
  params,
}: {
  params: Promise<{ auctionsId: string; auctionId: string }>;
}) => {
  const { auctionsId, auctionId } = await params;

  console.log(auctionId);

  return (
    <main className=" pt-6 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[100vh]">
        <Image
          src="/Images/Link → p16-516x360.jpg.jpg"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="hidden md:block">
          <div className="absolute top-28 right-16 flex items-center gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              جاري الآن
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
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              جاري الآن
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-gray-700 hover:bg-gray-100"
            >
              إلكتروني
            </Button>
          </div>

          <div className="flex items-center">
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
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                مزاد روائع الرياض
              </h1>
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg md:text-xl">الصناعية الثانية, الدمام</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4">
                <Image
                  src="/Icons/proicons_pdf-2.svg"
                  alt="pdf"
                  width={30}
                  height={30}
                />
                <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
              </div>

              <div className="flex items-center justify-center border border-border rounded-sm p-2">
                <h3>الرقم المرجعي لشركة النويشر للمزادات: 562</h3>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-medium">طرق التواصل</h1>
            <CallUserBtns isText />
          </div>

          <div className="space-y-6">
            <SectionTitle Title="كل الأصول (5)" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AuctionsList.map((item) => (
                <AuctionDetailsCard2
                  key={item.id}
                  AuctionDetails={item}
                  auctionsId={auctionsId}
                  auctionId={auctionId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuctionDetailsPage;
