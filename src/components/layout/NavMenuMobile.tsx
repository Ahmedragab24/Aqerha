"use client";

import NavMenu from "../molecules/menus/NavMenu";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import ActionNavBtn from "../molecules/btnsGroup/ActionNavBtn";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import SocialMediaIcons from "../molecules/iconsGroup/SoicalMediaIcons";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  isScrolled: boolean;
  navbarBg: boolean;
  userType: MembershipType | ServicesProvidersType;
}

const NavMenuMobile = ({
  open,
  setOpen,
  isScrolled,
  navbarBg,
  userType,
}: Props) => {
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu
          className={`${
            open ? "text-primary-light" : "text-primary"
          } cursor-pointer hover:text-primary-light transition-colors duration-300 ${
            isScrolled || navbarBg ? "text-foreground" : "text-primary-light"
          }`}
        />
      </SheetTrigger>
      <SheetContent className="px-6 py-8 flex flex-col justify-between">
        {/* ====== Header ====== */}
        <SheetHeader className="text-center space-y-2 border-b pb-6">
          <div className="mx-auto">
            <Image
              src="/Logo/Logo on Transparent BG.png"
              alt="logo"
              width={90}
              height={90}
              className="drop-shadow-md"
            />
          </div>
          <SheetTitle className="text-lg font-semibold text-primary">
            وجهتك الأولى للعقارات
          </SheetTitle>
          <SheetDescription className="text-sm text-gray-500">
            سواء كنت تشتري أو تستأجر، نحن هنا لمساعدتك!
          </SheetDescription>
        </SheetHeader>

        {/* ====== Main Content ====== */}
        <div className="flex-1 overflow-y-auto mt-6 space-y-10">
          {/* NAV MENU */}
          <div>
            <NavMenu
              isScrolled={isScrolled}
              navbarBg={navbarBg}
              setOpen={setOpen}
            />
          </div>

          {/* ACTION BUTTONS (Login/Register/Post Ad) */}
          <div className="flex justify-center">
            <ActionNavBtn
              isScrolled={isScrolled}
              navbarBg={navbarBg}
              userType={userType}
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="link"
              className="text-sm text-gray-700 hover:text-primary transition"
              onClick={() => {
                setOpen(false);
                router.push("/aboutUs");
              }}
            >
              من نحن
            </Button>
            <Button
              variant="link"
              className="text-sm text-gray-700 hover:text-primary transition"
              onClick={() => {
                setOpen(false);
                router.push("/contact");
              }}
            >
              اتصل بنا
            </Button>
            <Button
              variant="link"
              className="text-sm text-gray-700 hover:text-primary transition"
              onClick={() => {
                setOpen(false);
                router.push("/contact");
              }}
            >
              <a
                href="https://apps.apple.com/eg/app/%D8%B9%D9%82%D8%B1%D9%87%D8%A7-aqrha/id6743926325?l=ar"
                target="_blank"
                dir="rtl"
              >
                حمل التطبيق
              </a>
            </Button>
          </div>
        </div>

        {/* ====== Footer ====== */}
        <div className="mx-auto">
          <SocialMediaIcons />
        </div>
        <SheetFooter className="pt-4 border-t text-center">
          <p className="text-gray-500 text-xs">
            جميع الحقوق محفوظة © عقرها {new Date().getFullYear()}
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
