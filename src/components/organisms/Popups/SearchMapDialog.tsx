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
import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import FindRealEstateOnMap from "@/components/molecules/Locations/FindRealEstateOnMap";
import { RealEstesType } from "@/types/Real-estates";

interface Props {
  children?: React.ReactNode;
  properties: RealEstesType[];
}

const SearchMapDialog = ({ children, properties }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant={"outline"} className="SelectBtn">
            ابحث بالخريطة
            <Map />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="h-[80vh] overflow-y-scroll">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>ابحث بالخريطة</DialogTitle>
          <DialogDescription>
            ابحث عن العقارات المتاحة علي الخريطة
          </DialogDescription>
        </DialogHeader>

        <div>
          <FindRealEstateOnMap properties={properties} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchMapDialog;
