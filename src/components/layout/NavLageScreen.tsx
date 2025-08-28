import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import AuthNav from "../templates/AuthNav";
import { useGetProfileQuery } from "@/store/services/Profile";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import { useEffect, useState } from "react";

import ActionNavBtn from "../molecules/btnsGroup/ActionNavBtn";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavLargeScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const [mounted, setMounted] = useState(false);
  const { data } = useGetProfileQuery();
  const userType = data?.data?.membership_type as
    | MembershipType
    | ServicesProvidersType;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className="Container hidden md:flex justify-between"
      suppressHydrationWarning
    >
      {/* LOGO & MENU */}
      <div className="flex items-center gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />
        <NavMenu isScrolled={isScrolled} navbarBg={navbarBg} />
      </div>

      {/* ACTION BTN */}
      <div className="flex items-center gap-8">
        <ActionNavBtn
          isScrolled={isScrolled}
          navbarBg={navbarBg}
          userType={userType}
        />

        <AuthNav />
      </div>
    </nav>
  );
};

export default NavLargeScreen;
