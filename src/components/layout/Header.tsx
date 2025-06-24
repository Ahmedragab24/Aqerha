import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="Container mx-auto w-full py-4 fixed z-50 left-1/2 translate-x-[-50%]">
      <nav className="flex justify-between">
        {/* LOGO & MENU */}
        <div className="flex items-center gap-6">
          <Logo />
          <NavMenu />
        </div>

        {/* ACTION BTN */}
        <div className="flex items-center gap-4">
          <div>
            <Button
              variant={"link"}
              className="text-md text-white !drop-shadow-sm"
            >
              من نحن
            </Button>
            <Button
              variant={"link"}
              className="text-md text-white !drop-shadow-sm"
            >
              اتصل بنا
            </Button>
          </div>
          <Button>الدخول</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
