import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/Logo/Aqerha Logo.png"}
      alt="Logo"
      width={100}
      height={100}
      quality={100}
      priority
    />
  );
};

export default Logo;
