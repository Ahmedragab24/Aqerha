import SectionTitle from "@/components/atoms/title/SectionTitle";
import AuctionCard from "@/components/molecules/cards/AuctionCard";
import { AuctionsList } from "@/constants/cards/AuctionCard";
import React from "react";

const AuctionsPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="space-y-16">
        <div className="text-center">
          <SectionTitle Title="المزادات" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AuctionsList.map((item) => (
            <AuctionCard key={item.id} Auction={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AuctionsPage;
