"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
import AddAdCompanyForm from "@/components/organisms/forms/addAd/AddAdCompanyForm";
import AddAdMultipleAngelsForm from "@/components/organisms/forms/addAd/AddAdMultipleAngelsForm";
import AddAdPersonForm from "@/components/organisms/forms/addAd/AddAdPersonForm";
import AddAdOrRequestForm from "@/components/organisms/forms/AddAdOrRequestForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, UserRound, UsersRound } from "lucide-react";
import React, { useState } from "react";

export type stepType = "stepOne" | "stepTwo";

const OwnerAdPage = () => {
  const [step, setStep] = useState<stepType>("stepOne");

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="إضافة إعلان" className="text-center" />
        <Tabs defaultValue="person" className="w-full">
          <TabsList
            className="w-1/2 h-14 mx-auto !min-w-full md:!min-w-xl py-2 px-4 shadow-lg mb-6"
            dir="rtl"
            onClick={() => setStep("stepOne")}
          >
            <TabsTrigger
              value="person"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <UserRound />
              فرد
            </TabsTrigger>
            <TabsTrigger
              value="company"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <Building2 />
              شركة
            </TabsTrigger>
            <TabsTrigger
              value="Multiple-angels"
              className="text-sm md:text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              <UsersRound />
              متعدد ملاك
            </TabsTrigger>
          </TabsList>
          <TabsContent value="person">
            <div className="md:max-w-5xl mx-auto">
              {step === "stepOne" ? (
                <AddAdPersonForm setStep={setStep} />
              ) : (
                <AddAdOrRequestForm type="ad" formType="sales" />
              )}
            </div>
          </TabsContent>
          <TabsContent value="company">
            <div className="md:max-w-5xl mx-auto">
              {step === "stepOne" ? (
                <AddAdCompanyForm setStep={setStep} />
              ) : (
                <AddAdOrRequestForm type="ad" formType="sales" />
              )}
            </div>
          </TabsContent>
          <TabsContent value="Multiple-angels">
            <div className="md:max-w-5xl mx-auto">
              {step === "stepOne" ? (
                <AddAdMultipleAngelsForm setStep={setStep} />
              ) : (
                <AddAdOrRequestForm type="ad" formType="sales" />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default OwnerAdPage;
