import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <Tooltip>
        <TooltipTrigger asChild>
          <Codesandbox
            className={`text-primary fill-primary/20 !w-6 !h-6 ${
              isScrolled || navbarBg
                ? "text-foreground "
                : "!text-primary !fill-primary"
            }`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>الطلبات</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
};

export default UserOrdersBtn;
