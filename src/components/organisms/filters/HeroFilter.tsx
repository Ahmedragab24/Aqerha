"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import SellingTabsContent from "../tabsContent/SellingTabsContent";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPurpose } from "@/store/features/filter/FilterRealEstate";

const HeroFilter = () => {
  const dispatch = useAppDispatch();
  const { FilterParams } = useAppSelector((state) => state.FilterRealEstate);

  return (
    <div className="hidden lg:block w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs
        defaultValue="sale"
        value={FilterParams?.purpose}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onValueChange={(value: any) => dispatch(setPurpose(value))}
        className="gap-0"
      >
        <div dir="rtl">
          <TabsList className="bg-transparent mb-[-1px] p-0 w-auto">
            <TabsTrigger
              value="sale"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg text-sm sm:text-base flex-1 sm:flex-none"
            >
              بيع
            </TabsTrigger>
            <TabsTrigger
              value="rent"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg text-sm sm:text-base flex-1 sm:flex-none"
            >
              إيجار
            </TabsTrigger>
          </TabsList>
        </div>
        <div
          className="w-full bg-secondary py-4 px-4 sm:py-6 sm:px-6 rounded-l-2xl rounded-br-2xl "
          dir="rtl"
        >
          <TabsContent value="sale" className="mt-0">
            <SellingTabsContent />
          </TabsContent>
          <TabsContent value="rent" className="mt-0">
            <SellingTabsContent />
          </TabsContent>
          <TabsContent value="buy" className="mt-0">
            <SellingTabsContent />
          </TabsContent>
          <TabsContent value="sponsored" className="mt-0">
            <SellingTabsContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default HeroFilter;
