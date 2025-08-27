"use client";

import { Heart, Menu } from "lucide-react";
import Logo from "../atoms/images/Logo";
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
import Notifications from "../organisms/notifications/Notifications";
import { useState } from "react";
import Link from "next/link";
import AuthNav from "../templates/AuthNav";
import UserAdditionsBtn from "../atoms/buttons/UserAdditionsBtn";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const NavSmallScreen = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Container md:hidden">
      {/* LOGO & MENU */}
      <div className="flex items-center justify-between gap-6">
        <Logo isScrolled={isScrolled} navbarBg={navbarBg} />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu
              className={`${
                open ? "text-primary-light" : "text-primary"
              } cursor-pointer hover:text-primary-light duration-300`}
            />
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
            </SheetHeader>
            <div className="space-y-10 mt-4">
              {/* NAV MENU*/}
              <NavMenu
                isScrolled={isScrolled}
                navbarBg={navbarBg}
                setOpen={setOpen}
              />

              {/* ACTION BTN */}
              <div className="flex flex-col items-center gap-8">
                <div>
                  <Button
                    variant={"link"}
                    className={`text-md !drop-shadow-sm transition-colors duration-300 text-foreground`}
                    onClick={() => setOpen(false)}
                  >
                    من نحن
                  </Button>
                  <Button
                    variant={"link"}
                    className={`text-md !drop-shadow-sm transition-colors duration-300 text-foreground`}
                    onClick={() => setOpen(false)}
                  >
                    اتصل بنا
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Link href={"/favorites"} onClick={() => setOpen(false)}>
                    <Heart className="fill-primary text-primary !w-6 !h-6" />
                  </Link>
                  <Notifications isScrolled={isScrolled} navbarBg={navbarBg} />
                  <UserAdditionsBtn
                    isScrolled={isScrolled}
                    navbarBg={navbarBg}
                  />
                </div>

                <AuthNav />
              </div>
            </div>

            <SheetFooter>
              {/* Copyright */}
              <div className="text-gray-600 text-sm">
                جميع الحقوق محفوظة © عقريها {new Date().getFullYear()}
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavSmallScreen;
