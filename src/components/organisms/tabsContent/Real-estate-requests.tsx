import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import MarketerOrBrokerCard from "@/components/molecules/cards/MarketerOrBrokerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import PaginationList from "../paginations/PaginationList";
import { MarketerOrBrokerRequestList } from "@/constants/cards/MarketerOrBrokerRequests";
import { MarketerOrBrokerRequestCategoryType } from "@/types/marketerOrBroker";

const RealEstateRequests = () => {
  const tabItems: MarketerOrBrokerRequestCategoryType[] = [
    "الكل",
    "فيلا",
    "أرض",
    "شقق",
    "عمارة",
  ];

  const getFilteredData = (category: string) => {
    if (category === "الكل") return MarketerOrBrokerRequestList;
    return MarketerOrBrokerRequestList.filter(
      (item) => item.category === category
    );
  };

  return (
    <Tabs defaultValue="الكل" className="w-full" dir="rtl">
      <TabsList className="bg-transparent mb-16 lg:mb-8 mx-auto">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tabItems.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
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
              {category}
            </TabsTrigger>
          ))}
        </div>
      </TabsList>

      {/* Tab Contents */}
      {tabItems.map((category) => {
        const filteredData = getFilteredData(category);

        return (
          <TabsContent
            key={category}
            value={category}
            className="mt-0 focus-visible:outline-none"
          >
            {/* Responsive Grid */}
            <div
              className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  gap-3 sm:gap-4 md:gap-5 lg:gap-6
                  mb-8 sm:mb-10 md:mb-12
                "
            >
              {filteredData.map((item) => (
                <MarketerOrBrokerCard
                  key={item.id}
                  data={item}
                  path={`developers/${item.id}`}
                />
              ))}
            </div>

            {/* Fixed Empty State Condition */}
            {filteredData.length === 0 && (
              <DataNotFount
                title="لا يوجد مطورين"
                description={`لم يتم العثور علي ${category}`}
              />
            )}

            {/* Pagination moved inside TabsContent and made conditional */}
            {filteredData.length > 5 && <PaginationList />}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default RealEstateRequests;
