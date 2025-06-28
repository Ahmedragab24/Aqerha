import SeeMore from "@/components/atoms/buttons/SeeMore";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";
import RealEstateGuideSection from "@/components/templates/RealEstateGuideSection";
import { RealEstesData } from "@/constants/cards/RealEstate";
import React from "react";

const page = () => {
  return (
    <main className="Container pt-28 mb-16">
      <SectionTitle Title="استكشف" className="text-center mb-10" />
      <div className="space-y-16">
        <RealEstateGuideSection />
        <section className="Container space-y-10">
          <div className="flex justify-between">
            <SectionTitle Title="الأكثر مبيعا" />
            <SeeMore path="/" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {RealEstesData.map((item) => (
              <RealEstateCard key={item.id} product={item} />
            ))}
          </div>
        </section>
        <section className="Container space-y-10">
          <div className="flex justify-between">
            <SectionTitle Title="وحدات محدودة" />
            <SeeMore path="/" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {RealEstesData.map((item) => (
              <RealEstateCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
