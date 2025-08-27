"use client";

import SectionTitle from "../../../components/atoms/title/SectionTitle";
import StepOneForm from "../../../components/organisms/forms/RegisterDeveloper/StepOneForm";
import StepTwoForm from "../../../components/organisms/forms/RegisterDeveloper/StepTwoForm";
import React, { useState } from "react";

export type StepsType = "step1" | "step2" | "step3";

const RegisterDeveloperPage = () => {
  const [steps, setSteps] = useState<StepsType>("step1");

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="التسجيل كمطور عقاري" className="text-center" />

      <div className="md:max-w-2xl mx-auto">
        {steps === "step1" && <StepOneForm setSteps={setSteps} />}
        {steps === "step2" && <StepTwoForm setSteps={setSteps} />}
      </div>
    </main>
  );
};

export default RegisterDeveloperPage;
