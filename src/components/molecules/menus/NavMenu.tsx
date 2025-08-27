"use client";

import { NavigationMenu, NavigationMenuList } from "../../ui/navigation-menu";
import NavMenuItem from "./NavMenuItem";
import {
  LoyerMenu,
  quakilyMenu,
  SellingMenu,
  ServicesMenu,
} from "@/constants/navMenu";
import CustomMenubar from "./CustomMenubar";

interface NavMenuProps {
  isScrolled: boolean;
  navbarBg: boolean;
  setOpen?: (value: boolean) => void;
}

const NavMenu = ({ isScrolled, navbarBg, setOpen }: NavMenuProps) => {
  const ToggleNavStyle = isScrolled || navbarBg;

  return (
    <div>
      {/* Fot Large Screen */}
      <NavigationMenu viewport={false} className="hidden md:block">
        <NavigationMenuList
          className={` ${
            ToggleNavStyle ? "text-foreground" : "!text-white"
          } drop-shadow-sm`}
        >
          <NavMenuItem Trigger="تصفح سريع" Items={quakilyMenu} />
          <NavMenuItem Trigger="الخدمات" Items={ServicesMenu} />
          <NavMenuItem Trigger="إيجار" Items={LoyerMenu} seeMore />
          <NavMenuItem Trigger="بيع" Items={SellingMenu} seeMore />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Fot Small Screen */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        <CustomMenubar
          Trigger="بيع"
          Items={SellingMenu}
          setOpen={setOpen || (() => {})}
        />
        <CustomMenubar
          Trigger="إيجار"
          Items={LoyerMenu}
          setOpen={setOpen || (() => {})}
        />
        <CustomMenubar
          Trigger="الخدمات"
          Items={ServicesMenu}
          setOpen={setOpen || (() => {})}
        />
        <CustomMenubar
          Trigger="تصفح سريع"
          Items={quakilyMenu}
          setOpen={setOpen || (() => {})}
        />
      </div>
    </div>
  );
};

export default NavMenu;
