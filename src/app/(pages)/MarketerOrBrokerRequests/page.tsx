import SectionTitle from "@/components/atoms/title/SectionTitle";
import MarketingRequests from "@/components/organisms/tabsContent/MarketingRequests";
import RealEstateRequests from "@/components/organisms/tabsContent/Real-estate-requests";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MarketerOrBrokerRequestsPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-4">
      <SectionTitle Title="طلبات المسوق/الوسيط" className="text-center" />

      <Tabs defaultValue="Real-estate-requests" className="w-full" dir="rtl">
        <TabsList className="my-10 md:my-0 mx-auto md:mx-0">
          <div className="flex flex-col border overflow-hidden rounded-sm w-[200px]">
            <TabsTrigger
              value={"Real-estate-requests"}
              className="
                  flex-shrink-0 
                  px-3 sm:px-4 md:px-6 
                  py-2.5 sm:py-3 md:py-4
                  text-xs sm:text-sm md:text-base
                  font-medium
                  whitespace-nowrap 
                  rounded-none
                  bg-secondary/80 
                  text-secondary-foreground
                  shadow-none
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
              طلبات عقارية
            </TabsTrigger>
            <TabsTrigger
              value={"Marketing-requests"}
              className="
                    flex-shrink-0 
                  px-3 sm:px-4 md:px-6 
                  py-2.5 sm:py-3 md:py-4
                  text-xs sm:text-sm md:text-base
                  font-medium
                  whitespace-nowrap 
                  rounded-none
                  bg-secondary/80 
                  text-secondary-foreground
                  shadow-none
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
              طلبات تسويق
            </TabsTrigger>
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
