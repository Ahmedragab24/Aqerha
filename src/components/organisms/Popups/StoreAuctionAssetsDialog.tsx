"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import StoreAssestForm from "../forms/UserAdditions/StoreAssestForm";

interface StoreAuctionAssetsDialogProps {
  open: boolean;
  changeOpen: (open: boolean) => void;
  setAssetsData: (
    assetsData: FormData[] | ((prev: FormData[]) => FormData[])
  ) => void;
  auctionId: string;
}

const StoreAuctionAssetsDialog = ({
  open,
  changeOpen,
  setAssetsData,
  auctionId,
}: StoreAuctionAssetsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="rounded-lg h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            إضافة أصل
          </DialogTitle>
        </DialogHeader>
        <StoreAssestForm
          changeOpen={changeOpen}
          setAssetsData={setAssetsData}
          auctionId={auctionId}
        />
      </DialogContent>
    </Dialog>
  );
};

export default StoreAuctionAssetsDialog;
