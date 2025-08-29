"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import AddAdOrRequestForm from "../forms/AddAdOrRequestForm";

interface Props {
  children: React.ReactNode;
}

export type Step = "stepOne" | "stepTwo";
export type OrderType = "Sales" | "Rental" | "";

const AddOrderDialog = ({ children }: Props) => {
  const [step, setStep] = useState<Step>("stepOne");
  const [orderType, setOrderType] = useState<OrderType>("");
  const [open, changeOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto px-4 md:px-6" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            إ ضافة طلب
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div>
          {step === "stepOne" && (
            <div className="flex flex-col gap-2">
              <Button
                className="!h-11"
                onClick={() => {
                  setOrderType("Sales");
                  setStep("stepTwo");
                }}
              >
                <Plus />
                طلب بيع
              </Button>
              <Button
                className="!h-11"
                onClick={() => {
                  setOrderType("Rental");
                  setStep("stepTwo");
                }}
              >
                <Plus />
                طلب إيجار
              </Button>
            </div>
          )}

          {step === "stepTwo" && orderType === "Sales" && (
            <AddAdOrRequestForm
              type="request"
              changeOpen={changeOpen}
              isPage={false}
              title={false}
            />
          )}
        </div>
        {step === "stepTwo" && (
          <DialogFooter>
            <Button onClick={() => setStep("stepOne")}>رجوع</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddOrderDialog;
