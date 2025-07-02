import SectionTitle from "@/components/atoms/title/SectionTitle";
import AuthenticationServicesCard from "@/components/molecules/cards/AuthenticationServicesCard";
import { AuthenticationData } from "@/constants/cards/AuthenticationServices";
import React from "react";

const DalDocumentationServicesPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <div className="space-y-16">
        <div className="text-center">
          <SectionTitle Title="خدمات توثيق دال" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {AuthenticationData.map((item) => (
            <AuthenticationServicesCard
              key={item.id}
              AuthenticationService={item}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DalDocumentationServicesPage;
