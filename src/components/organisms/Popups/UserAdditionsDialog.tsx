"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StoreAuctionForm from "../forms/UserAdditions/StoreAuctionForm";
import StoreProjectForm from "../forms/UserAdditions/StoreProjectForm";
import { useGetProfileQuery } from "@/store/services/Profile";
import { ServicesProvidersType } from "@/types/Membership";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const UserAdditionsDialog = ({ children }: Props) => {
  const { data } = useGetProfileQuery();
  const MemberType = data?.data?.membership_type as ServicesProvidersType;
  const [open, changeOpen] = useState(false);

  console.log("MemberType", MemberType);

  const handlerTitle = () => {
    if (MemberType === "auction_companies") {
      return "إضافة مزاد";
    } else if (
      MemberType === "contracting_company" ||
      MemberType === "real_estate_developer"
    ) {
      return "إضافة مشروع";
    } else {
      return "إضافة عقار";
    }
  };

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[90vh] rounded-lg overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-center">{handlerTitle()}</DialogTitle>
        </DialogHeader>

        {/* Forms Section */}
        {MemberType === "auction_companies" && (
          <StoreAuctionForm changeOpen={changeOpen} />
        )}

        {(MemberType === "contracting_company" ||
          MemberType === "real_estate_developer") && (
          <StoreProjectForm changeOpen={changeOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserAdditionsDialog;
