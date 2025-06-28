"use client";

import { useState, useEffect } from "react";
// import { useAppSelector } from "@/store/hooks";
import NavLargeScreen from "./NavLageScreen";
import NavSmallScreen from "./NavSmallScreen";
import { usePathname } from "next/navigation";

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
  // const { navbarBg } = useAppSelector((state) => state.navbarBg);
  const pathname = usePathname();
  const navbarBg = pathname !== "/";

  const ToggleNavStyle = isScrolled || navbarBg;

  return (
    <header>
      <div
        className={`w-full py-4 fixed z-50 left-1/2 translate-x-[-50%] transition-all duration-300 ${
          ToggleNavStyle
            ? "bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Large Screen */}
        <NavLargeScreen isScrolled={isScrolled} navbarBg={navbarBg} />

        {/* Small Screen */}
        <nav className="Container md:hidden">
          <NavSmallScreen isScrolled={isScrolled} navbarBg={navbarBg} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
