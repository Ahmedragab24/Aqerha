"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { useGetHomeDataQuery } from "@/store/services/Home";
import CompaniesCard from "../molecules/cards/CompaniesCard";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const CompaniesSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const CompaniesDataList = data?.data?.contracting_companies || [];

  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="شركات المقاولات" />
        <SeeMore path="/contracting-companies" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons
            count={4}
            mainClassSkeleton="!h-[220px]"
            showThreeSkeletons={false}
            showTwoSkeletons={false}
          />
        ) : (
          <>
            {CompaniesDataList.map((item) => (
              <CompaniesCard
                key={item.id}
                Company={item}
                path={`/contracting-companies/${item.id}`}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default CompaniesSection;
