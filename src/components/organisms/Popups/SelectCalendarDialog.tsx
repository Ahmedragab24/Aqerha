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
import RegisterDialog from "./RegisterDialog";

interface SelectCalendarDialogProps {
  realEstateId?: number;
  appointments: AppointmentsType[];
}

const SelectCalendarDialog = ({ appointments }: SelectCalendarDialogProps) => {
  const [isSuccessfully, setIsSuccessfully] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLogin = getAuthTokenClient();

  return (
    <>
      {isLogin ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Card className="bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src="/Icons/solar_calendar-outline.svg"
                  alt="tabler_report"
                  width={70}
                  height={70}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />

                <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
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
                appointments={appointments}
              />
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <RegisterDialog>
          <Card className="bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer">
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/Icons/solar_calendar-outline.svg"
                alt="tabler_report"
                width={70}
                height={70}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                احجز مقابلة
              </h2>
            </div>
          </Card>
        </RegisterDialog>
      )}
    </>
  );
};

export default SelectCalendarDialog;
