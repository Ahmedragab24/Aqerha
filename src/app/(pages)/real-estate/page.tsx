import HeroFilter from "../../../components/organisms/filters/HeroFilter";
import PropertiesForRentSection from "../../../components/templates/PropertiesForRentSection";
import Image from "next/image";

const PropertiesForRentPage = () => {
  return (
    <main className="pt-10 mb-16 space-y-8">
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[95vh]">
        <Image
          src="/Images/PropertiesForRent.jpg"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[60%]"
        />

        <div className="Container md:pt-[280px] relative w-full h-full md:h-screen flex flex-col justify-center items-center gap-8">
          <div className="space-y-4 drop-shadow-sm">
            <h1 className="text-white text-2xl md:text-5xl font-semibold text-center">
              عَقْرُهَا؛ بَيْتٌ لِلْجَمِيعِ
            </h1>
            <h4 className="text-gray-200 text-md md:text-xl text-center">
              اختبر سهولة وسرعة العثور علي بيت جديد في عَقْرُهَا
            </h4>
          </div>

          <div className="hidden md:block">
            <HeroFilter />
          </div>
        </div>
      </div>

      <div className="Container">
        <PropertiesForRentSection />
      </div>
    </main>
  );
};

export default PropertiesForRentPage;
