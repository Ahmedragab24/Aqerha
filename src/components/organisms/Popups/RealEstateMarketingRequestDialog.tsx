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
import AddAdOrRequestForm from "../forms/AddAdOrRequestForm";

interface Props {
  children: React.ReactNode;
}

const RealEstateMarketingRequestDialog = ({ children }: Props) => {
  const [open, changeOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            طلب تسويق عقار
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div>
          <AddAdOrRequestForm
            type="request"
            changeOpen={changeOpen}
            isPage={false}
            title={false}
          />
        </div>

        <DialogFooter>
          <Button onClick={() => changeOpen(false)}>إلغاء</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RealEstateMarketingRequestDialog;
