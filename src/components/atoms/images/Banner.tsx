import Image from "next/image";

interface BannerProps {
  className?: string;
  image: string;
}

const Banner = ({ image, className }: BannerProps) => {
  return (
    <div className={`relative w-full h-[30vh] md:h-[85vh] ${className}`}>
      <Image
        src={image}
        alt="Banner"
        fill
        quality={100}
        loading="lazy"
        className="w-fll h-full object-contain"
      />
    </div>
  );
};

export default Banner;
