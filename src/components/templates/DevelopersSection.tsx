"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import DevelopersCard from "../molecules/cards/DevelopersCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const DevelopersSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const DevelopersData = data?.data?.developers || [];

  return (
    <section className="Container space-y-4 md:space-y-6">
      <div className="flex justify-between">
        <SectionTitle Title="المطورون العقاريون" />
        <SeeMore path="/developers" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons
            count={4}
            mainClassSkeleton="!h-[180px]"
            showThreeSkeletons={false}
            twoClassSkeleton="mx-auto"
          />
        ) : (
          <>
            {DevelopersData.map((item) => (
              <DevelopersCard
                key={item.id}
                Developer={item}
                path={`/developers/${item.id}`}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default DevelopersSection;
