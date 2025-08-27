"use client";

import SectionTitle from "../../../components/atoms/title/SectionTitle";
import React from "react";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";
import { useGetAuctionsByUserQuery } from "@/store/services/Auctions";
import AuctionCard from "@/components/molecules/cards/AuctionDetailsCard";

const MyAuctionsPage = () => {
  const { data, isLoading, isError } = useGetAuctionsByUserQuery();

  const AuctionsList = data?.data || [];

  if (isError) {
    return (
      <main className="Container pt-28 mb-16">
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<SearchX className="w-10 h-10" />}
        />
      </main>
    );
  }

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="مزاداتي" className="text-center" />

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GroupCardsSkeletons count={3} />
          </div>
        ) : AuctionsList.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AuctionsList.map((item) => (
              <AuctionCard key={item.id} AuctionDetails={item} />
            ))}
          </div>
        ) : (
          <DataNotFount
            title="لا يوجد مزادات"
            description="لا يوجد مزادات حاليا"
            icon={<SearchX className="w-10 h-10" />}
          />
        )}
      </div>
    </main>
  );
};

export default MyAuctionsPage;
