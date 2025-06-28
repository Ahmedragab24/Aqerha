import SectionTitle from "@/components/atoms/title/SectionTitle";
import AdvertiserCard from "@/components/molecules/cards/AdvertiserCard";
import GalleryImages from "@/components/organisms/galleryImages/GalleryImages";
import { Badge } from "@/components/ui/badge";
import { AdvertiserType } from "@/types/Advertisers";
import Image from "next/image";
import SimilarProperties from "@/components/templates/SimilarProperties";
import PropertyDetailsBtnsGroup from "@/components/molecules/btnsGroup/PropertyDetailsBtnsGroup";
import PropertyFeatures from "@/components/templates/PropertyFeatures";
import ApartmentDrawing from "@/components/molecules/banners/ApartmentDrawing";
import ActionsCards from "@/components/molecules/cards/ActionsCards";
import LegalInfoProperty from "@/components/molecules/textGroup/LegalInfoProperty";
import LocationProperty from "@/components/molecules/Locations/LocationProperty";
import DescriptionProperty from "@/components/molecules/textGroup/DescriptionProperty";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";

const productImages = {
  mainImage: "/Images/Property Image slider.jpg",
  secondaryImages: [
    "/Images/Property Image slider.png",
    "/Images/Property Image slider.png",
    "/Images/Property Image slider.png",
    "/Images/Property Image slider.png",
  ],
};

export const AdvertiserData: AdvertiserType = {
  name: "علي سلامة",
  advertisementsNum: 500,
  phone: "01228317491",
  rating: 5,
};

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  console.log(propertyId);

  return (
    <main className="Container pt-28 pb-10">
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="space-y-4">
            <Badge className="bg-gray-100 text-[#1B76FF] rounded-sm px-8 py-2 text-sm">
              للبيع
            </Badge>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <SectionTitle Title="شقة حديثة مذهلة" />
              <h1 className="text-2xl md:text-4xl font-bold">$120,000</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 justify-between gap-4 lg:gap-20">
            <div className="col-span-6 space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Icons/Location.svg"
                    alt="location"
                    width={15}
                    height={15}
                  />
                  <h4 className="text-gray-600 text-sm md:text-md">
                    43 ويست ويلينغتون رود، فيرفوب، ألاباما 36532
                  </h4>
                </div>

                <PropertyDetailsBtnsGroup />
              </div>
              <GalleryImages productImages={productImages} />
            </div>
            <div className="col-span-6 space-y-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Badge
                    variant={"secondary"}
                    className="bg-black text-white rounded-sm px-6 py-2 text-sm"
                  >
                    مميز
                  </Badge>
                  <Badge
                    variant={"secondary"}
                    className="bg-primary-light text-white rounded-sm px-6 py-2 text-sm"
                  >
                    جديد
                  </Badge>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-gray-600 text-md">1200 دولار/قدم مربع</h4>
                </div>
              </div>

              <AdvertiserCard data={AdvertiserData} propertyId={propertyId} />

              <PropertyFeatures className="hidden lg:grid grid-cols-1 gap-8 mt-8" />
            </div>
          </div>
        </div>
        <div>
          {/* Property Details Header */}
          <div className="lg:hidden mb-8">
            <h1 className="text-2xl font-bold text-right mb-6">
              تفاصيل العقار
            </h1>

            {/* Property Features Grid */}
            <PropertyFeatures className="grid grid-cols-1 gap-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Description Section */}
            <DescriptionProperty />

            {/* Location Section */}
            <LocationProperty />
          </div>
        </div>
        <ApartmentDrawing />
        <ActionsCards />
        <LegalInfoProperty />
        <SimilarProperties />
        <CallUserBtns isText className="flex justify-center" />
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
