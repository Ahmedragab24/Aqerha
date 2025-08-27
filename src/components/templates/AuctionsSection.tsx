"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import AuctionCard from "../molecules/cards/AuctionCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const AuctionsSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const AuctionsList = data?.data?.auctions || [];

  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المزادات" />
        <SeeMore path="/auctions" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons
            count={4}
            mainClassSkeleton="!h-[220px]"
            showThreeSkeletons={false}
            showTwoSkeletons={false}
          />
        ) : (
          <>
            {AuctionsList.map((item) => (
              <AuctionCard key={item.id} Auction={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default AuctionsSection;
