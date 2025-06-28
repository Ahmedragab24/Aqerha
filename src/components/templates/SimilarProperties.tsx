import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import { RealEstesData } from "@/constants/cards/RealEstate";
import RealEstateCard from "../molecules/cards/RealEstateCard";

const SimilarProperties = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="عقارات مشابهة" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {RealEstesData.map((item) => (
          <RealEstateCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProperties;
