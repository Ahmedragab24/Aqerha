import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { DevelopersData } from "@/constants/cards/Developers";
import DevelopersCard from "../molecules/cards/DevelopersCard";

const CompaniesSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="شركات المقاولات" />
        <SeeMore path="/" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DevelopersData.map((item) => (
          <DevelopersCard key={item.id} Developer={item} />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
