import SectionTitle from "@/components/atoms/title/SectionTitle";
import DiscriminationCampaignCard from "@/components/molecules/cards/DiscriminationCampaignCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiscriminationCampaignsData } from "@/constants/discrimination-campaigns";
import React from "react";

const DiscriminationCampaignsPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="حملات التمييز" className="text-center" />

        <Tabs defaultValue="my-ads" className="w-full" dir="rtl">
          <TabsList className="w-full md:w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
            <TabsTrigger
              value="my-ads"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              إعلاناتي
            </TabsTrigger>
            <TabsTrigger
              value="closed-ads"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              الإعلانات المغلقة
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-ads">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DiscriminationCampaignsData.map((item) => (
                <DiscriminationCampaignCard
                  key={item.id}
                  DiscriminationCampaign={item}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="closed-ads">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DiscriminationCampaignsData.map((item) => (
                <DiscriminationCampaignCard
                  key={item.id}
                  DiscriminationCampaign={item}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default DiscriminationCampaignsPage;
