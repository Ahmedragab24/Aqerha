import SectionTitle from "../../../components/atoms/title/SectionTitle";
import RegisterExaminationAndEvaluationForm from "../../../components/organisms/forms/RegisterExaminationAndEvaluationForm";
import React from "react";

const RegisterExaminationAndEvaluationPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="التسجيل كفاحص ومقيم" className="text-center" />

      <div>
        <RegisterExaminationAndEvaluationForm />
      </div>
    </main>
  );
};

export default RegisterExaminationAndEvaluationPage;
