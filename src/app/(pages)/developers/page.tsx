"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
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

  // Filter function for each city
  const getFilteredData = (city: string) => {
    if (city === "الكل") return DevelopersData;
    return DevelopersData.filter((item) => item.name === city);
  };

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="المطورون العقاريون" />

      <Tabs defaultValue="الكل" className="w-full" dir="rtl">
        <TabsList className="bg-transparent mt-8 mb-16 lg:mt-2 lg:mb-8 mx-auto">
          <div className="flex flex-wrap  gap-2 sm:gap-3 px-1 py-2">
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
        {tabItems.map((city) => (
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
              {getFilteredData(city).map((item) => (
                <DevelopersCard key={item.id} Developer={item} />
              ))}
            </div>

            {/* Empty State */}
            {getFilteredData(city).length === 0 && (
              <div
                className="
                  flex flex-col items-center justify-center 
                  text-center
                "
              >
                <div
                  className="
                    w-16 h-16 sm:w-20 sm:h-20 
                    rounded-full 
                    bg-muted 
                    flex items-center justify-center 
                    mb-4 sm:mb-6
                  "
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  لا توجد مطورين
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                  لم يتم العثور على مطورين عقاريين في {city} حالياً
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Pagination */}
      {DevelopersData.length > 1 && <PaginationList />}
    </main>
  );
};

export default DevelopersPage;
