import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import AuctionCard from "../molecules/cards/AuctionCard";
import { AuctionsList } from "@/constants/cards/AuctionCard";

const AuctionsSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المزادات" />
        <SeeMore path="/auctions" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {AuctionsList.map((item) => (
          <AuctionCard key={item.id} Auction={item} />
        ))}
      </div>
    </section>
  );
};

export default AuctionsSection;
