import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
}

const NavMenu = ({ isScrolled, navbarBg }: NavMenuProps) => {
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
          <NavMenuItem Trigger="إيجار" Items={LoyerMenu} />
          <NavMenuItem Trigger="بيع" Items={SellingMenu} />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Fot Small Screen */}
      <div className="md:hidden flex justify-between gap-4">
        <CustomMenubar Trigger="بيع" Items={SellingMenu} />
        <CustomMenubar Trigger="إيجار" Items={LoyerMenu} />
        <CustomMenubar Trigger="الخدمات" Items={ServicesMenu} />
        <CustomMenubar Trigger="تصفح سريع" Items={quakilyMenu} />
      </div>
    </div>
  );
};

export default NavMenu;
