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
import { Plus, Minus } from "lucide-react";
import Riyal from "../../atoms/Icons/Riyal";
import { useState, useEffect } from "react";
// import SelectPayment from "../../molecules/selects/SelectPayment";
import { AssetsType } from "@/types/Actions";
import AuctionsRecordDialog from "./AuctionsRecordDialog";
import { useEnrollAndOfferMutation } from "@/store/services/Auctions";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// type step = "stepOne" | "stepTwo";

interface AuctionDetailsProps {
  AssetsDetails: AssetsType | undefined;
  // setStep: React.Dispatch<React.SetStateAction<step>>;
  Counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export function AuctionDetails({
  AssetsDetails,
  // setStep,
  Counter,
  setCounter,
}: AuctionDetailsProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [Store, { isLoading }] = useEnrollAndOfferMutation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!AssetsDetails?.asset_end_date) return;

    const end = new Date(AssetsDetails.asset_end_date).getTime();
    const start = new Date(AssetsDetails?.asset_start_date || "").getTime();
    const total = end - start;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = end - now;

      if (diff <= 0) {
        setProgress(100);
        clearInterval(interval);
        return;
      }

      const passed = total - diff;
      const percent = Math.min(100, Math.max(0, (passed / total) * 100));
      setProgress(percent);
    }, 1000);

    return () => clearInterval(interval);
  }, [AssetsDetails?.asset_end_date, AssetsDetails?.asset_start_date]);

  // ⏳ حساب الوقت المتبقي
  useEffect(() => {
    if (!AssetsDetails?.asset_end_date) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(AssetsDetails.asset_end_date).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("انتهى المزاد");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`باقي ${days} يوم ${hours} ساعة ${minutes} دقيقة`);
    }, 1000);

    return () => clearInterval(interval);
  }, [AssetsDetails?.asset_end_date]);

  // 🛒 تسجيل المزايدة
  const handlerStore = async () => {
    try {
      const res = await Store({
        auction_id: AssetsDetails?.auction_id || 0,
        asset_id: AssetsDetails?.id || 0,
        offer: Counter,
      }).unwrap();

      showSuccessToast({ title: `${res?.message}` });
      // setStep("stepTwo");
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err?.data?.message || "حدث خطأ غير متوقع" });
    }
  };

  return (
    <div className="px-6">
      {/* Header */}
      <div className="text-center mb-6">
        <Badge className="text-sm text-gray-100 px-4 py-1">{timeLeft}</Badge>
      </div>

      {/* Circular Progress Section */}
      <div className="bg-gray-50 rounded-lg mb-4 shadow-sm p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-44 h-44">
            <svg
              className="w-44 h-44 transform -rotate-90"
              viewBox="0 0 120 120"
            >
              {/* الخلفية */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              {/* المؤشر حسب progress */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#059669"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(progress / 100) * 2 * Math.PI * 50} ${
                  2 * Math.PI * 50
                }`}
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-yellow-500 text-xl mb-1">👑</div>
              <div className="text-center">
                <p className="text-xs text-gray-600">أعلى مزايدة</p>
                <p className="font-bold text-lg flex items-center ">
                  {AssetsDetails?.highest_offer}
                  <Riyal />
                </p>
                <p className="text-xs text-gray-500">
                  نسبة الإنجاز {Math.round(progress)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <AuctionsRecordDialog
            biddingActivity={AssetsDetails?.bidding_activity || []}
            highest_offer={AssetsDetails?.highest_offer || 0}
            meter_price={AssetsDetails?.meter_price || 0}
          >
            <button className="text-sm text-gray-600 hover:text-gray-800">
              عرض نشاط المزايدة ←
            </button>
          </AuctionsRecordDialog>
        </div>
      </div>

      {/* Bid Input Section */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => setCounter(Counter + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <div className="relative bg-gray-100 flex items-center gap-1 py-2 rounded-md min-w-[150px] text-center font-medium">
            <Input
              type="number"
              min={0}
              className="relative w-full border-none shadow-none text-center focus:!outline-none focus:!ring-0 [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [appearance:textfield]"
              value={Counter}
              onChange={(e) => setCounter(Math.max(0, Number(e.target.value)))}
            />
            <Riyal className="absolute left-6 top-1/2 -translate-y-1/2" />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => setCounter((prev) => Math.max(0, prev - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>

        <Button className="w-full" disabled={isLoading} onClick={handlerStore}>
          {isLoading ? "جاري التسجيل..." : "سجل الآن في المزاد"}
        </Button>
      </div>

      {/* Final Summary */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">عمولة المنصة</span>
          <span className="text-sm flex items-center">
            {AssetsDetails?.commission} <Riyal />
          </span>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <span>الإجمالي</span>
          <div className="flex items-center gap-1 text-primary text-xl font-semibold">
            {AssetsDetails && (
              <span>{Counter + AssetsDetails?.commission}</span>
            )}
            <Riyal className="!w-5 !h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface DialogProps {
  children: React.ReactNode;
  AssetsDetails: AssetsType | undefined;
}

const AuctionRegisterDialog = ({ children, AssetsDetails }: DialogProps) => {
  // const [step, setStep] = useState<step>("stepOne");
  const [open, changeOpen] = useState(false);
  const [Counter, setCounter] = useState(AssetsDetails?.highest_offer || 0);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {/* {step === "stepOne" ? ( */}
        <AuctionDetails
          AssetsDetails={AssetsDetails}
          // setStep={setStep}
          Counter={Counter}
          setCounter={setCounter}
        />
        {/* ) : (
          <SelectPayment price={Counter} />
        )} */}
      </DialogContent>
    </Dialog>
  );
};

export default AuctionRegisterDialog;
