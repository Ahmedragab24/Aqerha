import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import RegisterDialog from "../organisms/Popups/RegisterDialog";
import { Button } from "../ui/button";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavLargeScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const ToggleNavStyle = isScrolled || navbarBg;
  return (
    <nav className="Container  hidden md:flex justify-between">
      {/* LOGO & MENU */}
      <div className="flex items-center gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />
        <NavMenu isScrolled={isScrolled} navbarBg={navbarBg} />
      </div>

      {/* ACTION BTN */}
      <div className="flex items-center gap-4">
        <div>
          <Button
            variant={"link"}
            className={`text-md !drop-shadow-sm transition-colors duration-300 ${
              ToggleNavStyle ? "text-foreground" : "text-white"
            }`}
          >
            من نحن
          </Button>
          <Button
            variant={"link"}
            className={`text-md !drop-shadow-sm transition-colors duration-300 ${
              ToggleNavStyle ? "text-foreground" : "text-white"
            }`}
          >
            اتصل بنا
          </Button>
        </div>
        <RegisterDialog />
      </div>
    </nav>
  );
};

export default NavLargeScreen;
