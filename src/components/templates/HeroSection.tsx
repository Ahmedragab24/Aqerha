import Image from "next/image";
import HeroFilter from "../organisms/filters/HeroFilter";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-screen mb-8 md:mb-14">
      <Image
        src="/Images/Hero.jpg"
        alt="Hero"
        fill
        priority
        loading="eager"
        className="object-cover brightness-[60%]"
      />

      <div className="relative md:pt-[320px] w-full h-full md:h-screen flex flex-col justify-center items-center gap-8">
        <div className="space-y-4 drop-shadow-sm">
          <h1 className="text-white text-2xl md:text-5xl font-semibold text-center">
            وجهتك الأولى للعقارات
          </h1>
          <h4 className="text-gray-200 text-md md:text-xl text-center">
            سواء كنت تشتري أو تستأجر، نحن هنا لمساعدتك!
          </h4>
        </div>

        <div className="hidden md:block">
          <HeroFilter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
