"use client";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isScrolled?: boolean;
  navbarBg?: boolean;
}

const LogoAdvanced = ({ isScrolled, navbarBg }: LogoProps) => {
  const ToggleNavStyle = isScrolled || navbarBg;

  return (
    <div className="relative">
      <Link href={"/"}>
        <div
          className={`relative transition-all duration-700 ease-out transform ${
            ToggleNavStyle
              ? "bg-primary rounded-lg px-2 md:px-4 py-1 shadow-lg scale-105"
              : "bg-transparent rounded-none px-0 py-0 shadow-none scale-100"
          }`}
        >
          {/* Logo image with smooth transitions */}
          <Image
            src={"/Logo/Aqerha Logo.png"}
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
            loading="eager"
            className={`relative z-10 transition-all duration-500 ease-out w-[60px] md:w-[80px] ${
              ToggleNavStyle
                ? "brightness-110 drop-shadow-md hover:scale-110"
                : "brightness-100 hover:scale-105 hover:brightness-110"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};

export default LogoAdvanced;
