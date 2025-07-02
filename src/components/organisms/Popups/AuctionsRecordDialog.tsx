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
import Riyal from "@/components/atoms/Icons/Riyal";

interface PaymentPlansDialogProps {
  children: React.ReactNode;
}

const paymentPlansList = [
  { id: 1, title: "المزايدات (1)", price: 73000, aria: 2920000 },
  { id: 2, title: "المزايدات (2)", price: 73000, aria: 2920000 },
  { id: 3, title: "المزايدات (3)", price: 73000, aria: 2920000 },
];

const AuctionsRecordDialog = ({ children }: PaymentPlansDialogProps) => {
  const [open, changeOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            سجل المزايدات
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <ul className="space-y-6 list-disc">
            {paymentPlansList.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center gap-6 text-lg font-medium border-b border-gray-300 pb-4"
              >
                <h1>{item.title}</h1>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <span>{item.price}</span>
                    <Riyal className="!w-6 !h-6" />
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{item.price}</span>
                    <Riyal />
                    <span>/متر مربع</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center gap-6 rounded-md text-lg font-medium border-b text-primary border-gray-300 pb-4 bg-[#ECFDF3] px-2 py-2">
            <div className="flex justify-center items-center   bg-[#ECFDF3]  !h-12">
              <h1>أعلى مزايدة</h1>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-primary font-medium">
                <span>447,690</span>
                <Riyal className="!w-6 !h-6" />
              </div>
            </div>
          </div>

          <Button className="w-full h-11" onClick={() => changeOpen(false)}>
            تم
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuctionsRecordDialog;
