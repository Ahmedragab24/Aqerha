"use client";

import { useState, useEffect } from "react";
import Logo from "../atoms/images/Logo";
import NavMenu from "../molecules/menus/NavMenu";
import { Button } from "../ui/button";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { navbarBg } = useAppSelector((state) => state.navbarBg);

  return (
    <header
      className={`w-full py-4 fixed z-50 left-1/2 translate-x-[-50%] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="Container flex justify-between">
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
                isScrolled || navbarBg ? "text-foreground" : "text-white"
              }`}
            >
              من نحن
            </Button>
            <Button
              variant={"link"}
              className={`text-md !drop-shadow-sm transition-colors duration-300 ${
                isScrolled || navbarBg ? "text-foreground" : "text-white"
              }`}
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
