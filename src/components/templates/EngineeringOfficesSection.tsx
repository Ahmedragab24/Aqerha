"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import EngineeringOfficesCard from "../molecules/cards/EngineeringOfficesCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const EngineeringOfficesSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const EngineeringOfficesData = data?.data?.engineering_offices || [];

  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المكاتب الهندسية" />
        <SeeMore path="/engineeringOffices" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons
            count={2}
            mainClassSkeleton="!h-[200px] rounded-4xl"
            showThreeSkeletons={false}
            showTwoSkeletons={false}
          />
        ) : (
          <>
            {EngineeringOfficesData.map((item) => (
              <EngineeringOfficesCard key={item.id} EngineeringOffices={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default EngineeringOfficesSection;
