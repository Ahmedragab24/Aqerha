import React from "react";
import SeeMore from "../atoms/buttons/SeeMore";
import SectionTitle from "../atoms/title/SectionTitle";
import AuthenticationServicesCard from "../molecules/cards/AuthenticationServicesCard";
import { AuthenticationData } from "@/constants/cards/AuthenticationServices";

const AuthenticationServicesSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="خدمات توثيق الدال" />
        <SeeMore path="/" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {AuthenticationData.map((item) => (
          <AuthenticationServicesCard
            key={item.id}
            AuthenticationService={item}
          />
        ))}
      </div>
    </section>
  );
};

export default AuthenticationServicesSection;
