"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import DevelopersCard from "@/components/molecules/cards/DevelopersCard";
import PaginationList from "@/components/organisms/paginations/PaginationList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DevelopersData } from "@/constants/cards/Developers";

const DevelopersPage = () => {
  const tabItems = [
    "الكل",
    "الطائف",
    "الخبر",
    "الدمام",
    "المدينة المنورة",
    "مكة المكرمة",
    "جدة",
    "الرياض",
  ];

  const getFilteredData = (city: string) => {
    if (city === "الكل") return DevelopersData;
    return DevelopersData.filter((item) => item.city === city);
  };

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="المطورون العقاريون" />

      <Tabs defaultValue="الكل" className="w-full" dir="rtl">
        <TabsList className="bg-transparent mt-8 mb-16 lg:mt-2 lg:mb-8 mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 px-1 py-2">
            {tabItems.map((city) => (
              <TabsTrigger
                key={city}
                value={city}
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
                {city}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        {/* Tab Contents */}
        {tabItems.map((city) => {
          const filteredData = getFilteredData(city);

          return (
            <TabsContent
              key={city}
              value={city}
              className="mt-0 focus-visible:outline-none"
            >
              {/* Responsive Grid */}
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
                {filteredData.map((item) => (
                  <DevelopersCard
                    key={item.id}
                    Developer={item}
                    path={`developers/${item.id}`}
                  />
                ))}
              </div>

              {/* Fixed Empty State Condition */}
              {filteredData.length === 0 && (
                <DataNotFount
                  title="لا يوجد مطورين"
                  description={`لم يتم العثور على مطورين عقاريين في ${city} حالياً`}
                />
              )}

              {/* Pagination moved inside TabsContent and made conditional */}
              {filteredData.length > 5 && <PaginationList />}
            </TabsContent>
          );
        })}
      </Tabs>
    </main>
  );
};

export default DevelopersPage;
