"use client";

import SectionTitle from "../../../components/atoms/title/SectionTitle";
import StepFourForm from "../../../components/organisms/forms/broker-ad/StepFourForm";
import StepOneForm from "../../../components/organisms/forms/broker-ad/stepOneForm";
import StepThreeForm from "../../../components/organisms/forms/broker-ad/StepThreeForm";
import StepTowForm from "../../../components/organisms/forms/broker-ad/stepTowForm";
import React, { useState } from "react";

export type StepType = "stepOne" | "stepTow" | "stepThree" | "stepFour";

const BrokerAdPage = () => {
  const [step, setStep] = useState<StepType>("stepOne");

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="إضافة إعلان" className="text-center" />

      <div className="md:max-w-2xl mx-auto">
        {step === "stepOne" && <StepOneForm setStep={setStep} />}
        {step === "stepTow" && <StepTowForm setStep={setStep} />}
        {step === "stepThree" && <StepThreeForm setStep={setStep} />}
        {step === "stepFour" && <StepFourForm setStep={setStep} />}
      </div>
    </main>
  );
};

export default BrokerAdPage;
