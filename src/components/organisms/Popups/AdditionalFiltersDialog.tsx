"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FunnelPlus } from "lucide-react";
import { AdditionalFilters } from "../filters/AdditionalFilters";
import { useEffect, useState } from "react";

const AdditionalFiltersDialog = () => {
  const [containerHeight, setContainerHeight] = useState("60vh");

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      const availableHeight = vh - 200; // Account for header, padding, etc.
      setContainerHeight(`${Math.min(availableHeight, vh * 0.7)}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="SelectBtn">
          <FunnelPlus />
          فلاتر إضافية
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-4xl">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>فلاتر إضافية</DialogTitle>
          <DialogDescription>
            اختر المواصفات التي تريدها لمساعدتك علي الوصول لما تريد عن طريق نظام
            فلترة يساعدك عن ما تبحث بسهولة
          </DialogDescription>
        </DialogHeader>

        <div
          className="w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          style={{ height: containerHeight }}
        >
          <div className="h-full p-4 sm:p-6">
            <AdditionalFilters />
          </div>
        </div>

        <DialogFooter>
          <Button variant={"outline"}>إزالة الفلاتر</Button>
          <Button>بحث</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdditionalFiltersDialog;
