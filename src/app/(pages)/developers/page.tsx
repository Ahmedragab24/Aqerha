"use client";

import { useAppSelector } from "@/store/hooks";
import SectionTitle from "../../../components/atoms/title/SectionTitle";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { useGetAllDevelopersQuery } from "@/store/services/Developers";
import { useState } from "react";
import { CitiesTabItems } from "@/constants/cities";
import DevelopersCard from "@/components/molecules/cards/DevelopersCard";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import PaginationList from "@/components/organisms/paginations/PaginationList";

const DevelopersPage = () => {
  const [city, setCity] = useState<string>("");
  const { page } = useAppSelector((state) => state.page);

  const { data } = useGetAllDevelopersQuery({
    city: city,
    page: page,
  });

  const DevelopersData = data?.data;

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="المطورون العقاريون" />

      <Tabs
        defaultValue=""
        className="w-full"
        dir="rtl"
        onValueChange={(val) => setCity(val)}
      >
        <TabsList className="bg-transparent mt-8 mb-16 lg:mt-2 lg:mb-8 mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 px-1 py-2">
            {CitiesTabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="
                       flex-shrink-0 
                       px-3 sm:px-4 md:px-6 
                       py-2.5 sm:py-3 md:py-4
                       text-xs sm:text-sm md:text-base
                       font-medium
                       whitespace-nowrap 
                       rounded-md sm:rounded-lg
                       bg-secondary/80 
                       text-secondary-foreground
                       border border-border/50
                       shadow-sm
                       transition-all duration-200 ease-in-out
                       hover:bg-secondary
                       hover:shadow-md
                       hover:scale-[1.02]
                       data-[state=active]:bg-primary 
                       data-[state=active]:text-primary-foreground
                       data-[state=active]:shadow-lg
                       data-[state=active]:border-primary/20
                       data-[state=active]:scale-[1.02]
                       focus-visible:outline-none 
                       focus-visible:ring-2 
                       focus-visible:ring-ring 
                       focus-visible:ring-offset-2
                       active:scale-[0.98]
                       min-h-[44px] sm:min-h-[48px]
                     "
              >
                {item.label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        {/* Tab Contents */}
        {CitiesTabItems.map((item) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className="mt-0 focus-visible:outline-none"
          >
            {DevelopersData?.data && DevelopersData?.data.length > 0 ? (
              <div
                className="
                       grid 
                       grid-cols-1 
                       sm:grid-cols-2 
                       lg:grid-cols-3 
                       xl:grid-cols-4 
                       2xl:grid-cols-5
                       gap-3 sm:gap-4 md:gap-5 lg:gap-6
                       mb-8 sm:mb-10 md:mb-12
                     "
              >
                {DevelopersData.data.map((developer) => (
                  <DevelopersCard
                    key={developer.id}
                    Developer={developer}
                    path={`/developers/${developer.id}`}
                  />
                ))}
              </div>
            ) : (
              <DataNotFount
                title="لا يوجد مطورون"
                description={
                  item.value
                    ? `لم يتم العثور على مطورون في ${item.label} حالياً`
                    : "لم يتم العثور على مطورون حالياً"
                }
              />
            )}

            {/* Pagination */}
            {DevelopersData && DevelopersData?.last_page > 1 && (
              <PaginationList
                currentPage={page}
                totalPages={DevelopersData?.last_page || 1}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default DevelopersPage;
