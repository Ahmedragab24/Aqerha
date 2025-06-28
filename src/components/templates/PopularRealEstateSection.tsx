import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import RealEstateCard from "../molecules/cards/RealEstateCard";
import { RealEstesData } from "@/constants/cards/RealEstate";
import HeroFilter from "../organisms/filters/HeroFilter";

const PopularRealEstateSection = () => {
  return (
    <div>
      <div className="md:hidden -mt-30 mb-10 relative z-10">
        <HeroFilter />
      </div>

      <section className="Container space-y-10">
        <div className="flex justify-between">
          <SectionTitle Title="عقارات رائجة" />
          <SeeMore path="/" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {RealEstesData.map((item) => (
            <RealEstateCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularRealEstateSection;
