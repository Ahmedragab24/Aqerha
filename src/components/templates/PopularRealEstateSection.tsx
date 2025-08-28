"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import RealEstateCard from "../molecules/cards/RealEstateCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";
import useIsLoggedIn from "@/hooks/use-IsLogIn";

const PopularRealEstateSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const RealEstesData = data?.data?.popular_real_estates || [];
  const { isLoggedIn, isMounted } = useIsLoggedIn();

  if (!isMounted) return null;

  if (isLoggedIn)
    return (
      <section className="Container space-y-4 md:space-y-6">
        <div className="flex justify-between">
          <SectionTitle Title="عقارات رائجة" />
          <SeeMore path="/real-estate" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {isLoading ? (
            <GroupCardsSkeletons count={4} />
          ) : (
            <>
              {RealEstesData.map((item) => (
                <RealEstateCard key={item.id} product={item} />
              ))}
            </>
          )}
        </div>
      </section>
    );
};

export default PopularRealEstateSection;
