import SectionTitle from "@/components/atoms/title/SectionTitle";
import AddAdPersonForm from "@/components/organisms/forms/addAd/AddAdPersonForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, UserRound, UsersRound } from "lucide-react";
import React from "react";

const OwnerAdPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="إضافة إعلان" className="text-center" />
        <Tabs defaultValue="person" className="w-full">
          <TabsList
            className="w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6"
            dir="rtl"
          >
            <TabsTrigger
              value="person"
              className="text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <UserRound />
              فرد
            </TabsTrigger>
            <TabsTrigger
              value="company"
              className="text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <Building2 />
              شركة
            </TabsTrigger>
            <TabsTrigger
              value="Multiple-angels"
              className="text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <UsersRound />
              متعدد ملاك
            </TabsTrigger>
          </TabsList>
          <TabsContent value="person">
            <div className="md:max-w-5xl mx-auto">
              <AddAdPersonForm />
            </div>
          </TabsContent>
          <TabsContent value="company">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
          </TabsContent>
          <TabsContent value="Multiple-angels">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default OwnerAdPage;
