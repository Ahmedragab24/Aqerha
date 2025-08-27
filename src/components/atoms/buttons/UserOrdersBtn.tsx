import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import { Codesandbox } from "lucide-react";
import Link from "next/link";
import React from "react";

interface UserAdditionsBtnProps {
  isScrolled: boolean;
  navbarBg: boolean;
  userType: MembershipType | ServicesProvidersType;
}

const UserOrdersBtn = ({
  isScrolled,
  navbarBg,
  userType,
}: UserAdditionsBtnProps) => {
  return (
    <Link
      className="relative"
      href={
        userType === "evaluator"
          ? "/evaluation-requests"
          : userType === "inspector"
          ? "/examination-requests"
          : "/MarketerOrBrokerRequests"
      }
    >
      <Codesandbox
        className={`text-primary fill-[#248f6a] !w-6 !h-6 ${
          isScrolled || navbarBg ? "text-foreground " : "text-primary-light "
        }`}
      />
    </Link>
  );
};

export default UserOrdersBtn;
