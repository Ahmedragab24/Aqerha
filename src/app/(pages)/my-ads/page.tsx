"use client";

import { useGetUserAdsQuery } from "@/store/services/Profile";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import React from "react";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";

const MyAdsPage = () => {
  const { data, isLoading, isError } = useGetUserAdsQuery();

  const AdList = data?.data || [];

  const RealEstate = AdList.map((item) => item.real_estate).filter(
    (realEstate) => realEstate !== null
  );

  const closedAds = RealEstate.filter(
    (item) => item.status?.toLowerCase() === "active"
  );

  if (isError) {
    return (
      <main className="Container pt-24 md:pt-28 mb-16">
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<SearchX className="w-10 h-10" />}
        />
      </main>
    );
  }

  return (
    <main className="Container pt-24 md:pt-28 mb-16">
      <div className="space-y-4 md:space-y-10">
        <SectionTitle Title="إعلاناتي" className="text-center" />

        <Tabs defaultValue="my-ads" className="w-full" dir="rtl">
          <TabsList className="w-full md:w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
            <TabsTrigger
              value="my-ads"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              إعلاناتي
            </TabsTrigger>
            <TabsTrigger
              value="closed-ads"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              الإعلانات المغلقة
            </TabsTrigger>
          </TabsList>

          {/* إعلاناتي */}
          <TabsContent value="my-ads">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <GroupCardsSkeletons count={4} />
              </div>
            ) : RealEstate.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {RealEstate.map((item) => (
                  <RealEstateCard key={item.id} product={item} />
                ))}
              </div>
            ) : (
              <div className="my-10">
                <DataNotFount
                  title="لا يوجد إعلانات"
                  description="لا يوجد إعلانات حاليا"
                  icon={<SearchX className="w-10 h-10" />}
                />
              </div>
            )}
          </TabsContent>

          {/* الإعلانات المغلقة */}
          <TabsContent value="closed-ads">
            {isLoading ? (
              <GroupCardsSkeletons count={4} />
            ) : closedAds.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {closedAds.map((item) => (
                  <RealEstateCard key={item.id} product={item} />
                ))}
              </div>
            ) : (
              <div className="my-10">
                <DataNotFount
                  title="لا يوجد إعلانات مغلقة"
                  description="لا يوجد إعلانات مغلقة حاليا"
                  icon={<SearchX className="w-10 h-10" />}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default MyAdsPage;
