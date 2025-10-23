"use client";

import { getAuthTokenClient } from "@/lib/auth/auth-client";
import UserAdditionsBtn from "@/components/atoms/buttons/UserAdditionsBtn";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import UserOrdersBtn from "@/components/atoms/buttons/UserOrdersBtn";

import Notifications from "@/components/organisms/notifications/Notifications";
import ConversationBtn from "@/components/atoms/buttons/ConversationBtn";
import { useEffect, useState } from "react";
import FavoritesIcon from "@/components/atoms/buttons/FavoritesIcon";

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

      <FavoritesIcon isScrolled={isScrolled} navbarBg={navbarBg} />
      <Notifications isScrolled={isScrolled} navbarBg={navbarBg} />
      <ConversationBtn isScrolled={isScrolled} navbarBg={navbarBg} />
    </div>
  );
};

export default ActionNavBtn;
