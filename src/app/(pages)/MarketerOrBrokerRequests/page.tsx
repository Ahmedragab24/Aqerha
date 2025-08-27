"use client";

import {
  useGetMarketingRealEstatesBuyByCityQuery,
  useGetMarketingRealEstatesByCityQuery,
} from "@/store/services/RealEstate";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import MarketingRequests from "../../../components/organisms/tabsContent/MarketingRequests";
import RealEstateRequests from "../../../components/organisms/tabsContent/Real-estate-requests";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { useAppSelector } from "@/store/hooks";

const MarketerOrBrokerRequestsPage = () => {
  const { page, per_page } = useAppSelector((state) => state.page);
  const {
    data: BuyMarketingRealData,
    isLoading: BuyMarketingRealLoading,
    isError: BuyMarketingRealError,
  } = useGetMarketingRealEstatesBuyByCityQuery({ page, per_page });
  const {
    data: MarketingRealData,
    isLoading: MarketingRealLoading,
    isError: MarketingRealError,
  } = useGetMarketingRealEstatesByCityQuery({ page, per_page });

  return (
    <main className="Container pt-28 mb-16 space-y-10 md:space-y-4">
      <SectionTitle Title="طلبات المسوق/الوسيط" className="text-center" />

      <Tabs
        defaultValue="Real-estate-requests"
        className="w-full space-y-20 md:space-y-20"
        dir="rtl"
      >
        <TabsList className="w-full md:w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
          <TabsTrigger
            value="Real-estate-requests"
            className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
          >
            طلبات عقارية
          </TabsTrigger>
          <TabsTrigger
            value="Marketing-requests"
            className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
          >
            طلبات تسويق
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Real-estate-requests">
          <RealEstateRequests
            data={BuyMarketingRealData}
            isLoading={BuyMarketingRealLoading}
            isError={BuyMarketingRealError}
            pageNum={page}
          />
        </TabsContent>
        <TabsContent value="Marketing-requests">
          <MarketingRequests
            data={MarketingRealData}
            isLoading={MarketingRealLoading}
            isError={MarketingRealError}
            pageNum={page}
          />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default MarketerOrBrokerRequestsPage;
