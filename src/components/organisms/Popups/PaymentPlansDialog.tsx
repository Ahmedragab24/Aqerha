"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { useState } from "react";
import { ProjectType } from "@/types/projects";

interface PaymentPlansDialogProps {
  children: React.ReactNode;
  project: ProjectType | undefined;
}

const PaymentPlansDialog = ({ children, project }: PaymentPlansDialogProps) => {
  const [open, changeOpen] = useState(false);
  const paymentPlansList = project?.payment_plan || [];

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            خطط الدفع
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-lg font-medium">{paymentPlansList}</h2>

          <Button className="w-full h-11" onClick={() => changeOpen(false)}>
            تم
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentPlansDialog;
