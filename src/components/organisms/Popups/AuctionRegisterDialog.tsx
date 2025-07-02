"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import Riyal from "@/components/atoms/Icons/Riyal";
import { useState } from "react";
import SelectPayment from "@/components/molecules/selects/SelectPayment";
type step = "stepOne" | "stepTwo";

export function AuctionDetails({
  setStep,
}: {
  setStep: (value: step) => void;
}) {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 mb-4">
          ينتهي المزاد بعد 2 يوم 11 ساعة 21 دقيقة
        </p>
      </div>

      {/* Circular Progress Section */}
      <div className="bg-gray-50 rounded-lg mb-4 shadow-sm p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-44 h-44">
            {/* Circular progress background */}
            <svg
              className="w-44 h-44 transform -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#059669"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${47 * 3.14} ${(100 - 47) * 3.14}`}
                strokeLinecap="round"
              />
            </svg>
            {/* Crown icon and content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-yellow-500 text-xl mb-1">👑</div>
              <div className="text-center">
                <p className="text-xs text-gray-600">أعلى مزايدة</p>
                <p className="font-bold text-lg"># 20,000</p>
                <p className="text-xs text-gray-500">2,920 ل تدريج</p>
                <p className="text-xs text-gray-500">(47%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">2.5% المعمولة</span>

            <span className="text-sm">%15</span>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <span>الإجمالي</span>
            <div className="flex items-center gap-1">
              <span className="text-sm">18,250.00</span>
              <Riyal />
            </div>
          </div>
        </div>

        {/* Show Activity Link */}
        <div className="text-center mt-4">
          <button className="text-sm text-gray-600 hover:text-gray-800">
            عرض نشاط المزايدة ←
          </button>
        </div>
      </div>

      {/* Bid Input Section */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-md border-gray-300 bg-transparent"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <div className="bg-gray-100 px-6 py-2 rounded-md min-w-[100px] text-center font-medium">
            20,000
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-md border-gray-300 bg-transparent"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>

        <Button className="w-full" onClick={() => setStep("stepTwo")}>
          سجل الآن في المزاد
        </Button>
      </div>

      {/* Final Summary */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">سعر الضرر الحريج</span>
          <span>2,490.00 ج</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">البنسي 2.5</span>
          <span>13,375.00 ج</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>الإجمالي</span>
          <span>753,375.00 ج</span>
        </div>
      </div>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

const AuctionRegisterDialog = ({ children }: Props) => {
  const [step, setStep] = useState<step>("stepOne");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-6">
        {step === "stepOne" ? (
          <AuctionDetails setStep={setStep} />
        ) : (
          <SelectPayment />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuctionRegisterDialog;
