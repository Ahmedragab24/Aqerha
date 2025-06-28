import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellingTabsContent from "../tabsContent/SellingTabsContent";
import LoyerTabsContent from "../tabsContent/LoyerTabsContent";

const HeroFilter = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="selling" className="gap-0">
        <div dir="rtl">
          <TabsList className="bg-transparent mb-[-1px] p-0 w-auto">
            <TabsTrigger
              value="selling"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg text-sm sm:text-base flex-1 sm:flex-none"
            >
              بيع
            </TabsTrigger>
            <TabsTrigger
              value="loyer"
              className="py-3 px-4 sm:py-4 sm:px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg text-sm sm:text-base flex-1 sm:flex-none"
            >
              إيجار
            </TabsTrigger>
          </TabsList>
        </div>
        <div
          className="w-full bg-secondary md:bg-background/90 py-4 px-4 sm:py-6 sm:px-6 rounded-l-2xl rounded-br-2xl "
          dir="rtl"
        >
          <TabsContent value="selling" className="mt-0">
            <SellingTabsContent />
          </TabsContent>
          <TabsContent value="loyer" className="mt-0">
            <LoyerTabsContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default HeroFilter;
