import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellingTabsContent from "../tabsContent/SellingTabsContent";
import LoyerTabsContent from "../tabsContent/LoyerTabsContent";

const HeroFilter = () => {
  return (
    <Tabs defaultValue="selling" className="gap-0">
      <div dir="rtl">
        <TabsList className="bg-transparent mb-[-1px] p-0">
          <TabsTrigger
            value="selling"
            className="py-4 px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg"
          >
            بيع
          </TabsTrigger>
          <TabsTrigger
            value="loyer"
            className="p-4 px-6 bg-gray-300 data-[state=active]:text-primary text-gray-600 border-none shadow-none outline-none rounded-none rounded-t-lg"
          >
            إيجار
          </TabsTrigger>
        </TabsList>
      </div>
      <div
        className="w-[850px] bg-background py-4 px-6 rounded-l-2xl rounded-br-2xl"
        dir="rtl"
      >
        <TabsContent value="selling">
          <SellingTabsContent />
        </TabsContent>
        <TabsContent value="loyer">
          <LoyerTabsContent />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default HeroFilter;
