import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { EngineeringOfficesData } from "@/constants/cards/EngineeringOffices";
import EngineeringOfficesCard from "../molecules/cards/EngineeringOfficesCard";

const EngineeringOfficesSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المكاتب الهندسية" />
        <SeeMore path="/" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {EngineeringOfficesData.map((item) => (
          <EngineeringOfficesCard key={item.id} EngineeringOffices={item} />
        ))}
      </div>
    </section>
  );
};

export default EngineeringOfficesSection;
