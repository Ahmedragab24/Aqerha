"use client";

import { useGetAllOfficesQuery } from "@/store/services/EngineeringOffices";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import EngineeringOfficesCard2 from "@/components/molecules/cards/EngineeringOfficesCard2";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import PaginationList from "@/components/organisms/paginations/PaginationList";
import { EngineeringOfficeType } from "@/types/EngineeringOffices";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { CitiesTabItems } from "@/constants/cities";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";

const EngineeringOfficesPage = () => {
  const [city, setCity] = useState<string>("");
  const { page } = useAppSelector((state) => state.page);

  const { data, isLoading } = useGetAllOfficesQuery({
    city: city,
    page: page,
  });

  const OfficesData = data?.data?.["Engineering Offices"];

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="المكاتب الهندسية" />

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

        {CitiesTabItems.map((item) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className="mt-0 focus-visible:outline-none"
          >
            {isLoading && (
              <div
                className="grid 
                                               grid-cols-2 
                                               lg:grid-cols-3 
                                               xl:grid-cols-4 
                                               2xl:grid-cols-5
                                               gap-3 sm:gap-4 md:gap-5 lg:gap-6
                                               mb-8 sm:mb-10 md:mb-12"
              >
                <GroupCardsSkeletons count={5} />
              </div>
            )}

            {!isLoading &&
              OfficesData?.data &&
              OfficesData?.data?.length > 0 && (
                <div
                  className="
                  grid 
                  grid-cols-2 
                  lg:grid-cols-3 
                  xl:grid-cols-4 
                  2xl:grid-cols-5
                  gap-3 sm:gap-4 md:gap-5 lg:gap-6
                  mb-8 sm:mb-10 md:mb-12
                "
                >
                  {OfficesData?.data?.map((office: EngineeringOfficeType) => (
                    <EngineeringOfficesCard2
                      key={office.id}
                      EngineeringOffices={office}
                      path={`engineeringOffices/${office.id}`}
                    />
                  ))}
                </div>
              )}

            {!isLoading && OfficesData?.data.length === 0 && (
              <DataNotFount
                title="لا توجد مكاتب هندسية"
                description={
                  item.value
                    ? `لم يتم العثور على مكاتب هندسية في ${item.label} حالياً`
                    : "لم يتم العثور على مكاتب هندسية حالياً"
                }
              />
            )}

            {/* Pagination */}
            {OfficesData && OfficesData?.last_page > 1 && (
              <PaginationList
                currentPage={page}
                totalPages={OfficesData?.last_page}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default EngineeringOfficesPage;
