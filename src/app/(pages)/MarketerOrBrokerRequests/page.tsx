import MainTabTriggerBtn from "@/components/atoms/buttons/MainTriggerBtn";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import MarketingRequests from "@/components/organisms/tabsContent/MarketingRequests";
import RealEstateRequests from "@/components/organisms/tabsContent/Real-estate-requests";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

const MarketerOrBrokerRequestsPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10 md:space-y-4">
      <SectionTitle Title="طلبات المسوق/الوسيط" className="text-center" />

      <Tabs
        defaultValue="Real-estate-requests"
        className="w-full space-y-20 md:space-y-8"
        dir="rtl"
      >
        <TabsList className="mx-auto md:mx-0">
          <div className="flex flex-col border overflow-hidden rounded-sm w-[200px]">
            <MainTabTriggerBtn
              title="طلبات عقارية"
              value="Real-estate-requests"
            />
            <MainTabTriggerBtn title="طلبات تسويق" value="Marketing-requests" />
          </div>
        </TabsList>

        <TabsContent value="Real-estate-requests">
          <RealEstateRequests />
        </TabsContent>
        <TabsContent value="Marketing-requests">
          <MarketingRequests />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default MarketerOrBrokerRequestsPage;
