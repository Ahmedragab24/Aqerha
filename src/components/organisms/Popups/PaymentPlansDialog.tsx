"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PaymentPlansDialogProps {
  children: React.ReactNode;
}

const paymentPlansList = [
  { id: 1, title: "10% مقدم  8 سنوات" },
  { id: 2, title: "5% مقدم  7 سنوات" },
  { id: 3, title: "8% مقدم  5 سنوات" },
];

const PaymentPlansDialog = ({ children }: PaymentPlansDialogProps) => {
  const [open, changeOpen] = useState(false);

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
          <ul className="space-y-4 list-disc">
            {paymentPlansList.map((item) => (
              <li key={item.id} className="text-lg font-medium">
                {item.title}
              </li>
            ))}
          </ul>

          <Button className="w-full h-11" onClick={() => changeOpen(false)}>
            تم
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentPlansDialog;
