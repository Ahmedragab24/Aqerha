import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { AuctionsData } from "@/constants/cards/AuctionCard";
import AuctionCard from "../molecules/cards/AuctionCard";

const AuctionsSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المزادات" />
        <SeeMore path="/" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {AuctionsData.map((item) => (
          <AuctionCard key={item.id} Auction={item} />
        ))}
      </div>
    </section>
  );
};

export default AuctionsSection;
