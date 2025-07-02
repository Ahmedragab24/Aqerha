import SectionTitle from "@/components/atoms/title/SectionTitle";
import AuctionDetailsCard from "@/components/molecules/cards/AuctionDetailsCard";
import CustomSelect from "@/components/molecules/selects/CustomSelect";
import { AuctionsList } from "@/constants/cards/AuctionCard";
import { OptionType } from "@/types/selects";
import React from "react";

const AuctionTypeList: OptionType[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
];

const AuctionsDetailsPage = async ({
  params,
}: {
  params: Promise<{ auctionsId: string }>;
}) => {
  const { auctionsId } = await params;

  console.log(auctionsId);

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="text-center">
        <SectionTitle Title="النويشر للمزادات" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <CustomSelect
          placeholder="نوع المزاد"
          options={AuctionTypeList}
          className="!h-12"
        />
        <CustomSelect
          placeholder="جاري الآن"
          options={AuctionTypeList}
          className="!h-12"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AuctionsList.map((item) => (
          <AuctionDetailsCard
            key={item.id}
            AuctionDetails={item}
            auctionsId={auctionsId}
          />
        ))}
      </div>
    </main>
  );
};

export default AuctionsDetailsPage;
