import { Menu } from "lucide-react";
import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import RegisterDialog from "../organisms/Popups/RegisterDialog";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavSmallScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  return (
    <nav className="Container md:hidden">
      {/* LOGO & MENU */}
      <div className="flex items-center justify-between gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-primary cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="px-4 py-8">
            <SheetHeader className="text-center space-y-1">
              <div className="mx-auto">
                <Image
                  src="/Logo/Logo on Transparent BG.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <SheetTitle>وجهتك الأولى للعقارات</SheetTitle>
              <SheetDescription>
                سواء كنت تشتري أو تستأجر، نحن هنا لمساعدتك!
              </SheetDescription>
              <div className="space-y-8 mt-4">
                {/* NAV MENU*/}
                <NavMenu isScrolled={isScrolled} navbarBg={navbarBg} />

                {/* ACTION BTN */}
                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Button
                      variant={"link"}
                      className={`text-md !drop-shadow-sm transition-colors duration-300 text-foreground`}
                    >
                      من نحن
                    </Button>
                    <Button
                      variant={"link"}
                      className={`text-md !drop-shadow-sm transition-colors duration-300 text-foreground`}
                    >
                      اتصل بنا
                    </Button>
                  </div>
                  <RegisterDialog />
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavSmallScreen;
