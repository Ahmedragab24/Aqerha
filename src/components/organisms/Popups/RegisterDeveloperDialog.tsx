"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StepOneForm from "../forms/RegisterDeveloper/StepOneForm";
import StepTwoForm from "../forms/RegisterDeveloper/StepTwoForm";

interface Props {
  children: React.ReactNode;
}

export type StepsType = "step1" | "step2" | "step3";

const RegisterDeveloperDialog = ({ children }: Props) => {
  const [steps, setSteps] = useState<StepsType>("step1");
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            التسجيل كمطور عقاري
          </DialogTitle>
        </DialogHeader>
        <div>
          {steps === "step1" && <StepOneForm setSteps={setSteps} />}
          {steps === "step2" && <StepTwoForm setSteps={setSteps} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDeveloperDialog;
