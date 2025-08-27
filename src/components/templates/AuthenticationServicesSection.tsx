"use client";

import React from "react";
import SeeMore from "../atoms/buttons/SeeMore";
import SectionTitle from "../atoms/title/SectionTitle";
import AuthenticationServicesCard from "../molecules/cards/AuthenticationServicesCard";
import { useGetServicesQuery } from "@/store/services/AuthenticationServices";
import DataNotFount from "../Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const AuthenticationServicesSection = () => {
  const { data, isLoading } = useGetServicesQuery();
  const AuthenticationData = data?.data || [];

  return (
    <>
      {AuthenticationData && (
        <section className="Container space-y-10">
          <div className="flex justify-between">
            <SectionTitle Title="خدمات توثيق الدال" />
            <SeeMore path="/dal-authentication-services" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {AuthenticationData.map((item) => (
              <AuthenticationServicesCard
                key={item.id}
                AuthenticationService={item}
              />
            ))}

            {isLoading && <GroupCardsSkeletons count={3} />}
          </div>

          {AuthenticationData.length === 0 && (
            <DataNotFount
              title="لا يوجد خدمات"
              description="لا يوجد خدمات حاليا"
              icon={<SearchX className="w-10 h-10" />}
            />
          )}
        </section>
      )}
    </>
  );
};

export default AuthenticationServicesSection;
