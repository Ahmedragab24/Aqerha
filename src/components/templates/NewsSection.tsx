"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import NewsCard from "../molecules/cards/NewsCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const NewsSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const NewsData = data?.data?.news || [];

  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="الأخبار" />
        <SeeMore path="/news" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons count={4} mainClassSkeleton="!h-[200px]" />
        ) : (
          <>
            {NewsData.map((item) => (
              <NewsCard key={item.id} News={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
