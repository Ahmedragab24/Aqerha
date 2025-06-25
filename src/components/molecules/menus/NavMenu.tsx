import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from "./NavMenuItem";
import { LoyerMenu, SellingMenu, ServicesMenu } from "@/constants/navMenu";

interface NavMenuProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavMenu = ({ isScrolled, navbarBg }: NavMenuProps) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList
        className={` ${
          isScrolled || navbarBg ? "text-foreground" : "!text-white"
        } drop-shadow-sm`}
      >
        <NavMenuItem Trigger="بيع" Items={SellingMenu} />
        <NavMenuItem Trigger="إيجار" Items={LoyerMenu} />
        <NavMenuItem Trigger="الخدمات" Items={ServicesMenu} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
