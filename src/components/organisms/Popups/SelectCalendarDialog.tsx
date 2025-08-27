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
import CalendarForm from "../forms/CalendarForm";
import { useState } from "react";
import CalendarSuccessfully from "../../Successfully/CalendarSuccessfully";
import { AppointmentsType } from "@/types/appointments";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

interface SelectCalendarDialogProps {
  realEstateId: number;
  appointments: AppointmentsType[];
}

const SelectCalendarDialog = ({
  realEstateId,
  appointments,
}: SelectCalendarDialogProps) => {
  const [isSuccessfully, setIsSuccessfully] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLogin = getAuthTokenClient();

  const handleTriggerClick = () => {
    if (!isLogin) {
      showFailedToast({ title: "يجب تسجيل الدخول لحجز موعد" });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          onClick={handleTriggerClick}
          className="bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/solar_calendar-outline.svg"
              alt="tabler_report"
              width={70}
              height={70}
            />

            <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              احجز مقابلة
            </h2>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            {isSuccessfully ? "تم تحديد الموعد بنجاح" : "حدد موعد المقابلة"}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {isSuccessfully ? (
          <CalendarSuccessfully setChangeOpen={setIsOpen} />
        ) : (
          <CalendarForm
            setIsSuccessfully={setIsSuccessfully}
            realEstateId={realEstateId}
            appointments={appointments}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SelectCalendarDialog;
