"use client";

import { useGetServicesQuery } from "@/store/services/AuthenticationServices";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import AuthenticationServicesCard from "../../../components/molecules/cards/AuthenticationServicesCard";
import DalAuthenticationServicesDialog from "../../../components/organisms/Popups/DalAuthenticationServicesDialog";
import React from "react";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";

const DalDocumentationServicesPage = () => {
  const { data, isLoading, isError } = useGetServicesQuery();
  const AuthenticationData = data?.data || [];

  if (isError) {
    return (
      <main className="Container pt-28 mb-16">
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<SearchX className="w-10 h-10" />}
        />
      </main>
    );
  }

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="space-y-16">
        <div className="text-center">
          <SectionTitle Title="خدمات توثيق دال" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {AuthenticationData.map((item) => (
            <DalAuthenticationServicesDialog key={item.id} Service={item}>
              <AuthenticationServicesCard AuthenticationService={item} />
            </DalAuthenticationServicesDialog>
          ))}

          {isLoading && <GroupCardsSkeletons count={6} />}
        </div>

        {AuthenticationData.length === 0 && (
          <DataNotFount
            title="لا يوجد خدمات"
            description="لا يوجد خدمات حاليا"
            icon={<SearchX className="w-10 h-10" />}
          />
        )}
      </div>
    </main>
  );
};

export default DalDocumentationServicesPage;
