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
import CalendarForm from "../forms/CalendarForm";
import { useState } from "react";
import CalendarSuccessfully from "@/components/Successfully/CalendarSuccessfully";

interface SelectCalendarDialogProps {
  children: React.ReactNode;
}

const SelectCalendarDialog = ({ children }: SelectCalendarDialogProps) => {
  const [isSuccessfully, setIsSuccessfully] = useState<boolean>(false);
  const [isOpen, setChangeOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setChangeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            {isSuccessfully ? "تم تحديد الموعد بنجاح" : "حدد موعد المقابلة"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {isSuccessfully ? (
          <CalendarSuccessfully setChangeOpen={setChangeOpen} />
        ) : (
          <CalendarForm setIsSuccessfully={setIsSuccessfully} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SelectCalendarDialog;
