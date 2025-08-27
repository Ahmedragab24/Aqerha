import React from "react";
import { Button } from "../../ui/button";
import { CirclePlus } from "lucide-react";
import StoreRealEstateDialog from "@/components/organisms/Popups/StoreRealEstateDialog";

const AddRealEstateBtn = () => {
  return (
    <StoreRealEstateDialog>
      <Button className="!h-12 !px-10">
        <CirclePlus />
        إضافة إعلان جديد
      </Button>
    </StoreRealEstateDialog>
  );
};

export default AddRealEstateBtn;
