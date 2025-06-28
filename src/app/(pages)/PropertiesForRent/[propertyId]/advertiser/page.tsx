import Image from "next/image";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";
import PropertiesBaseFilter from "@/components/organisms/filters/PropertiesBaseFilter";
import { RealEstesData } from "@/constants/cards/RealEstate";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";
import RateAdvertiser from "@/components/molecules/cards/RateAdvertiser";

const AdvertiserPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  console.log(propertyId);

  return (
    <main className="relative mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src="/Images/UserBGBanner.jpg"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[80%]"
        />

        <div className="absolute bottom-[-55px] md:bottom-[-85px] right-5 md:right-20 w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white overflow-hidden z-20">
          <Image
            src="/Images/UserProfile.jpg"
            alt="User Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Information */}
      <div className="Container mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <SectionTitle Title="علي سلامة" />
              <p className="text-gray-500">معدل رضا المستخدمين: ٤.٩ من ٥</p>
              <h3 className="text-2xl font-medium">
                تخصصنا هو العثور على المنزل المثالي لك
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/user-square.svg"
                  alt="user"
                  width={30}
                  height={30}
                />
                <h3 className="text-xl text-gray-600 font-semibold">
                  وكيل العقارات
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/home-trend-up.svg"
                  alt="user"
                  width={30}
                  height={30}
                />
                <h3 className="text-xl text-gray-600 font-semibold">
                  ٥٠٠ إعلان نشط
                </h3>
              </div>
            </div>

            <CallUserBtns isText classNameBtns="!px-10 md:!px-20" />
          </div>

          {/* Left Column - Rating Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer">
                <Image
                  src="/Icons/export.svg"
                  alt="export"
                  width={30}
                  height={30}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/Icons/save.svg"
                  alt="export"
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <RateAdvertiser />
          </div>
        </div>
      </div>

      {/* Advertisement List */}
      <div className="Container space-y-8 mt-16">
        <SectionTitle Title="قائمة الإعلانات" />

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
          <PropertiesBaseFilter />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {RealEstesData.map((item) => (
            <RealEstateCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AdvertiserPage;
