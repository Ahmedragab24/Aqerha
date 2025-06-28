import Image from "next/image";
import React from "react";

const LogoGreen = () => {
  return (
    <Image
      src="/Logo/Logo on Transparent BG.png"
      alt="Logo"
      width={100}
      height={100}
      quality={100}
      priority
      loading="eager"
      className={`relative z-10 transition-all duration-500 ease-out`}
    />
  );
};

export default LogoGreen;
