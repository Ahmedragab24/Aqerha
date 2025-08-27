"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Megaphone } from "lucide-react";
import React, { useState } from "react";
import AddAdOrRequestForm from "../forms/AddAdOrRequestForm";

interface Props {
  children: React.ReactNode;
}

const StoreRealEstateDialog = ({ children }: Props) => {
  const [open, changeOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader className="space-y-2 flex flex-col gap-2 justify-center items-center">
          <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
            إضافة إعلان جديد
            <Megaphone className="!w-7 !h-7" />
          </DialogTitle>
          <DialogDescription className="text-md">
            قم بالإعلان عن عقارك الآن
          </DialogDescription>
        </DialogHeader>

        {/* <AddRealEstateForm /> */}
        <AddAdOrRequestForm
          type="ad"
          changeOpen={changeOpen}
          title={false}
          isPage={false}
        />
      </DialogContent>
    </Dialog>
  );
};

export default StoreRealEstateDialog;
