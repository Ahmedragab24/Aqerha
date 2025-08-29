"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import UserAdditionsBtn from "@/components/atoms/buttons/UserAdditionsBtn";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import UserOrdersBtn from "@/components/atoms/buttons/UserOrdersBtn";
import { Button } from "@/components/ui/button";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";
import Notifications from "@/components/organisms/notifications/Notifications";
import ConversationBtn from "@/components/atoms/buttons/ConversationBtn";
import { useEffect, useState } from "react";

interface Props {
  isScrolled: boolean;
  navbarBg: boolean;
  userType: MembershipType | ServicesProvidersType;
}

const ActionNavBtn = ({ isScrolled, navbarBg, userType }: Props) => {
  const token = getAuthTokenClient();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 md:gap-6">
      {token &&
        (userType === "auction_companies" ||
          userType === "real_estate_developer" ||
          userType === "agent" ||
          userType === "contracting_company") && (
          <UserAdditionsBtn isScrolled={isScrolled} navbarBg={navbarBg} />
        )}

      {token &&
        (userType === "evaluator" ||
          userType === "inspector" ||
          userType === "company_agent") && (
          <UserOrdersBtn
            userType={userType}
            isScrolled={isScrolled}
            navbarBg={navbarBg}
          />
        )}

      <Tooltip>
        <TooltipTrigger asChild>
          {token ? (
            <Button variant={"noneBg"} className="relative !p-0 !m-0" asChild>
              <Link href={"/favorites"}>
                <Heart
                  className={`fill-primary text-primary !w-6 !h-6 ${
                    isScrolled || navbarBg
                      ? "text-foreground fill-primary"
                      : "!text-primary !fill-primary"
                  }`}
                />
              </Link>
            </Button>
          ) : (
            <RegisterDialog>
              <Button variant={"noneBg"} className="relative !p-0 !m-0" asChild>
                <Heart
                  className={`fill-primary text-primary !w-6 !h-6 ${
                    isScrolled || navbarBg
                      ? "text-foreground fill-primary"
                      : "!text-primary !fill-primary"
                  }`}
                />
              </Button>
            </RegisterDialog>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>المفضلة</p>
        </TooltipContent>
      </Tooltip>

      <Notifications isScrolled={isScrolled} navbarBg={navbarBg} />

      <ConversationBtn isScrolled={isScrolled} navbarBg={navbarBg} />
    </div>
  );
};

export default ActionNavBtn;
