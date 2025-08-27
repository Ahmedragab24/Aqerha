import SectionTitle from "../../../components/atoms/title/SectionTitle";
import RegisterEngineeringOfficeForm from "../../../components/organisms/forms/RegisterEngineeringOfficeForm";
import React from "react";

const RegisterEngineeringOfficePage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="التسجيل كمكتب هندسي" className="text-center" />

      <div>
        <RegisterEngineeringOfficeForm />
      </div>
    </main>
  );
};

export default RegisterEngineeringOfficePage;
