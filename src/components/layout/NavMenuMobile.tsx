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
import { LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import { MembershipType, ServicesProvidersType } from "@/types/Membership";
import SocialMediaIcons from "../molecules/iconsGroup/SoicalMediaIcons";
import DownloadAppICons from "../molecules/iconsGroup/DownloadAppICons";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  isScrolled: boolean;
  navbarBg: boolean;
  userType: MembershipType | ServicesProvidersType;
}

const NavMenuMobile = ({ open, setOpen, isScrolled, navbarBg }: Props) => {
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <LayoutGrid
          className={`${
            open ? "text-primary-light" : "text-primary"
          } cursor-pointer hover:text-primary-light transition-colors duration-300 ${
            isScrolled || navbarBg
              ? "text-foreground fill-primary"
              : "!text-primary !fill-primary"
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
        <div className="flex-1 mt-2 space-y-4">
          {/* NAV MENU */}
          <div>
            <NavMenu
              isScrolled={isScrolled}
              navbarBg={navbarBg}
              setOpen={setOpen}
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
            <div className="flex flex-col gap-2 items-center mt-4">
              <h4 className="text-sm text-gray-700">حمل التطبيق الأن</h4>
              <DownloadAppICons />
            </div>
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
          <p className="text-muted-foreground hover:text-gray-600 text-xs md:text-sm">
            تم التصميم والتطوير بواسطة
            <Link
              href="https://computinggate.com/ar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 transition-all duration-200 mx-1"
            >
              شركة بوابة الحوسبة
            </Link>
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
