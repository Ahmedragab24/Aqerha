import SectionTitle from "@/components/atoms/title/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, UserRound } from "lucide-react";
import React from "react";
import SubscriptionsBtn from "./SubscriptionsBtn";
import SubscriptionCard from "@/components/molecules/cards/SubscriptionCard";
import SubscriptionList, {
  featureListType,
} from "@/components/molecules/list/SubscriptionList";

const featureList: featureListType[] = [
  { id: 1, title: "نشر 50 إعلان خلال مدة الاشتراك" },
  { id: 2, title: "التواصل مع طلبات التسويق" },
  { id: 3, title: "خدمة عملاء مميزة" },
  { id: 4, title: "الإطلاع علي طلبات البحث و تقديم العروض لها" },
  { id: 5, title: "تخفيض عمولة الحجز الشهري إلى 3% فقط" },
];

const SubscriptionsPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="اشتراكات المعلنين" className="text-center" />

        <div className="border border-gray-300 p-4 md:p-8 rounded-2xl">
          <Tabs defaultValue="persons" className="w-full" dir="rtl">
            <TabsList className="w-full md:w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
              <TabsTrigger
                value="persons"
                className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
              >
                <UserRound />
                أفراد
              </TabsTrigger>
              <TabsTrigger
                value="companies"
                className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
              >
                <Building2 />
                شركات
              </TabsTrigger>
            </TabsList>
            <SubscriptionsBtn />
            <TabsContent value="persons">
              <div className="space-y-10">
                <SubscriptionCard />
                <SubscriptionList list={featureList} />
              </div>
            </TabsContent>
            <TabsContent value="companies">
              <div className="space-y-10">
                <SubscriptionCard />
                <SubscriptionList list={featureList} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default SubscriptionsPage;
