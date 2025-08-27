import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StoreRealEstesType } from "@/types/Real-estates";
import React from "react";
import StoreRealEstatesForm from "../forms/UserAdditions/StoreRealEstatesForm";

interface Props {
  open: boolean;
  changeOpen: (open: boolean) => void;
  setRealEstatesData: (data: StoreRealEstesType[]) => void;
  isStoreRealEstatesLoading: boolean;
  setImagesData: (data: FormData) => void;
  RealEstatesData: StoreRealEstesType[];
}

const StoreRealEstatesDialog = ({
  open,
  changeOpen,
  setRealEstatesData,
  isStoreRealEstatesLoading,
  setImagesData,
  RealEstatesData,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="rounded-lg h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            إضافة وحدة
          </DialogTitle>
        </DialogHeader>
        <StoreRealEstatesForm
          changeOpen={changeOpen}
          setRealEstatesData={setRealEstatesData}
          isStoreRealEstatesLoading={isStoreRealEstatesLoading}
          setImagesData={setImagesData}
          RealEstatesData={RealEstatesData}
        />
      </DialogContent>
    </Dialog>
  );
};

export default StoreRealEstatesDialog;
