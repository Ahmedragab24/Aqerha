"use client";

import Logo from "../atoms/images/Logo";
import { useState } from "react";
import AuthNav from "../templates/AuthNav";
import ActionNavBtn from "../molecules/btnsGroup/ActionNavBtn";
import { useGetProfileQuery } from "@/store/services/Profile";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import NavMenuMobile from "./NavMenuMobile";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavSmallScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const [open, setOpen] = useState(false);
  const { data } = useGetProfileQuery();
  const userType = data?.data?.membership_type as
    | MembershipType
    | ServicesProvidersType;

  return (
    <nav className="Container md:hidden">
      {/* LOGO & MENU */}
      <div className="flex items-center justify-between gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />

        <div className="flex items-center gap-2 md:gap-6">
          <NavMenuMobile
            isScrolled={isScrolled}
            navbarBg={navbarBg}
            setOpen={setOpen}
            open={open}
            userType={userType}
          />

          <ActionNavBtn
            isScrolled={isScrolled}
            navbarBg={navbarBg}
            userType={userType}
          />

          <AuthNav />
        </div>
      </div>
    </nav>
  );
};

export default NavSmallScreen;
