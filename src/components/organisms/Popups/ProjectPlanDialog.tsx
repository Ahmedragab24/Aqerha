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
import Image from "next/image";
import { ProjectType } from "@/types/projects";

interface ProjectPlanDialogProps {
  children: React.ReactNode;
  project: ProjectType | undefined;
}

const ProjectPlanDialog = ({ children, project }: ProjectPlanDialogProps) => {
  console.log(project);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="sm:max-w-5xl sm:min-h-[60vh] mx-auto Gradient_Linear_Green md:p-0"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="relative overflow-hidden">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="space-y-4 text-[#F3E6D6] text-center">
              <span className="text-lg md:text-2xl font-medium">
                إستثمر بـ{" "}
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold">
                أسعار 2025!
              </h1>
              <h2 className="text-lg md:text-xl">
                إستثمر بأسعار السنة للى فاتت
              </h2>
              <p className="text-sm font-light max-w-sm">
                لفترة محدودة هتقدر تستثمر فى كل العقارات للى عندنا بأسعار السنة
                للى فاتت و تحقق أقصي عوائد من استثمارك فى سوق العقارات فى جدة!
              </p>
            </div>
            <Button className="w-full md:w-[200px] h-11">إعرف التفاصيل</Button>
          </div>

          <div className="hidden md:block absolute left-0 -top-6">
            <Image
              src="/Images/PhoneBanner.png"
              alt="phone"
              width={300}
              height={300}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPlanDialog;
