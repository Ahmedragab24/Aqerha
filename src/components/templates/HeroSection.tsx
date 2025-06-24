import Image from "next/image";
import HeroFilter from "../organisms/filters/HeroFilter";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/Images/Hero.jpg"
        alt="Hero"
        fill
        className="object-cover brightness-[60%]"
      />

      <div className="relative w-full h-screen flex flex-col justify-center items-center gap-8">
        <div className="space-y-4 drop-shadow-sm">
          <h1 className="text-white text-5xl font-semibold">
            وجهتك الأولى للعقارات
          </h1>
          <h4 className="text-white text-xl text-center">
            سواء كنت تشتري أو تستأجر، نحن هنا لمساعدتك!
          </h4>
        </div>

        <HeroFilter />
      </div>
    </section>
  );
};

export default HeroSection;
