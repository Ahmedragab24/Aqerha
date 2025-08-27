"use client";

import SectionTitle from "../../../components/atoms/title/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Building2, SearchX, UserRound } from "lucide-react";
import React from "react";
import SubscriptionCard from "../../../components/molecules/cards/SubscriptionCard";
import SubscriptionList from "../../../components/molecules/list/SubscriptionList";
import { useGetAllPackagesQuery } from "@/store/services/Package";
import ToggleSubscriptionTypeBtn from "@/components/atoms/buttons/ToggleSubscriptionTypeBtn";
import { useAppSelector } from "@/store/hooks";
import CardSkeleton from "@/components/molecules/Skeletons/CardSkeleton";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";

const SubscriptionsPage = () => {
  const { SubscriptionType } = useAppSelector(
    (state) => state.subscriptionType
  );

  const { data, isLoading, isError } = useGetAllPackagesQuery();

  const individualsPackages =
    data?.data?.filter((item) => item.type === "individuals") || [];

  const companiesPackages =
    data?.data?.filter((item) => item.type === "companies") || [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderPackages = (packages: any[]) => {
    if (isLoading) return <CardSkeleton />;

    if (isError) {
      return (
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة أو المحاولة لاحقاً."
          icon={<SearchX className="w-10 h-10" />}
        />
      );
    }

    const filteredPackages = packages.filter(
      (item) => item.time_type === SubscriptionType
    );

    if (filteredPackages.length === 0) {
      return (
        <DataNotFount
          title="لا يوجد باقات متاحة"
          description="لا توجد باقات مطابقة للاشتراك المختار."
          icon={<SearchX className="w-10 h-10" />}
        />
      );
    }

    return (
      <div className="grid gap-8">
        {filteredPackages.map((item) => (
          <div className="space-y-10" key={item.id}>
            <SubscriptionCard packageItem={item} />
            <SubscriptionList packageFeatures={item.features} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="اشتراكات المعلنين" className="text-center" />

        <div className="border border-gray-300 p-4 md:p-8 rounded-2xl">
          <Tabs defaultValue="persons" className="w-full" dir="rtl">
            <TabsList className="w-full md:w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
              <TabsTrigger
                value="persons"
                className="flex items-center gap-2 text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
              >
                <UserRound className="w-5 h-5" />
                أفراد
              </TabsTrigger>
              <TabsTrigger
                value="companies"
                className="flex items-center gap-2 text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
              >
                <Building2 className="w-5 h-5" />
                شركات
              </TabsTrigger>
            </TabsList>

            {/* باقات الأفراد */}
            <TabsContent value="persons">
              <ToggleSubscriptionTypeBtn />
              {renderPackages(individualsPackages)}
            </TabsContent>

            {/* باقات الشركات */}
            <TabsContent value="companies">
              <ToggleSubscriptionTypeBtn />
              {renderPackages(companiesPackages)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default SubscriptionsPage;
