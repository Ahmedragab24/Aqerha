import SectionTitle from "@/components/atoms/title/SectionTitle";
import RegisterContractorCompanyForm from "@/components/organisms/forms/RegisterContractorCompanyForm";
import React from "react";

const RegisterContractorCompanyPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="التسجيل كشركة مقاولات" className="text-center" />

      <div>
        <RegisterContractorCompanyForm />
      </div>
    </main>
  );
};

export default RegisterContractorCompanyPage;
