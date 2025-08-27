import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import AdvertiserCard from "../../../../components/molecules/cards/AdvertiserCard";
import GalleryImages from "../../../../components/organisms/galleryImages/GalleryImages";
import { Badge } from "../../../../components/ui/badge";
import Image from "next/image";
import SimilarProperties from "../../../../components/templates/SimilarProperties";
import PropertyDetailsBtnsGroup from "../../../../components/molecules/btnsGroup/PropertyDetailsBtnsGroup";
import PropertyFeatures from "../../../../components/templates/PropertyFeatures";
import ActionsCards from "../../../../components/molecules/cards/ActionsCards";
import LegalInfoProperty from "../../../../components/molecules/textGroup/LegalInfoProperty";
import LocationProperty from "../../../../components/molecules/Locations/LocationProperty";
import DescriptionProperty from "../../../../components/molecules/textGroup/DescriptionProperty";
import CallUserBtns from "../../../../components/molecules/btnsGroup/CallUserBtns";
import { getRealEstateById } from "@/lib/api/RealEstate";
import RealEstatePurposeBadge from "@/components/atoms/badges/RealEstatePurposeBadge";
import { SaudiRiyal } from "lucide-react";
import dayjs from "dayjs";
import { formatName, formatPurpose } from "@/lib/utils";
import PromotionSectionInRealPage from "@/components/templates/PromotionSectionInRealPage";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ realEstateId: string }>;
}) => {
  const { realEstateId } = await params;

  const FetchData = await getRealEstateById(Number(realEstateId));
  const RealEstate = FetchData?.data?.realEstate;
  const RelatedRealEstate = FetchData?.data?.related_realEstates;

  console.log("RealEstate", RealEstate);

  return (
    <main className="Container pt-28 pb-10">
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="space-y-4">
            <RealEstatePurposeBadge purpose={RealEstate?.purpose} />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <SectionTitle
                Title={
                  formatName(RealEstate?.real_estate_type || "apartment") +
                  " " +
                  formatPurpose(RealEstate?.purpose || "rent")
                }
              />
              <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-1">
                {RealEstate?.main_price}
                <SaudiRiyal className="md:!w-9 md:!h-9" />
                {RealEstate?.purpose === "rent" && (
                  <span className="text-xl md:text-3xl">
                    /{" "}
                    {RealEstate?.rental_period === "daily"
                      ? "يوم"
                      : RealEstate?.rental_period === "weekly"
                      ? "اسبوع"
                      : RealEstate?.rental_period === "monthly"
                      ? "شهر"
                      : RealEstate?.rental_period === "yearly"
                      ? "سنة"
                      : ""}
                  </span>
                )}
              </h1>
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
                    {RealEstate?.city} , {RealEstate?.user?.profile?.address}
                  </h4>
                </div>

                <PropertyDetailsBtnsGroup
                  RealStateId={RealEstate?.id || 0}
                  count={RealEstate?.views || 0}
                />
              </div>
              <GalleryImages
                productImages={{
                  mainImage: RealEstate?.main_image || "",
                  secondaryImages:
                    RealEstate?.images?.map((img) => img.url) || [],
                }}
                productName={RealEstate?.real_estate_type}
              />
            </div>
            <div className="col-span-6 space-y-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  {RealEstate?.ad?.promotion && (
                    <Badge
                      variant={"secondary"}
                      className="bg-orange-300 text-white shadow-sm rounded-sm px-6 py-2 text-sm"
                    >
                      <span className="drop-shadow-sm drop-shadow-gray-700">
                        مميز
                      </span>
                    </Badge>
                  )}

                  {RealEstate?.created_at &&
                    dayjs().diff(dayjs(RealEstate.created_at), "month") < 1 && (
                      <Badge
                        variant={"secondary"}
                        className="bg-primary-light text-white shadow-sm rounded-sm px-6 py-2 text-sm"
                      >
                        <span className="drop-shadow-sm drop-shadow-gray-700">
                          جديد
                        </span>
                      </Badge>
                    )}
                </div>
                <div className="flex items-center justify-between gap-4">
                  {RealEstate?.main_meter_price && (
                    <h4 className="text-gray-600 text-md">
                      {RealEstate?.main_meter_price} دولار/قدم مربع
                    </h4>
                  )}
                </div>
              </div>

              <AdvertiserCard
                data={RealEstate?.user}
                productId={RealEstate?.id || 0}
              />

              <PropertyFeatures
                realEstate={RealEstate}
                className="hidden lg:grid grid-cols-1 gap-8 mt-8"
              />
            </div>
          </div>
        </div>
        <div>
          {/* Property Details Mobile */}
          <div className="lg:hidden mb-8">
            <h1 className="text-2xl font-bold text-right mb-6">
              تفاصيل العقار
            </h1>

            {/* Property Features Grid */}
            <PropertyFeatures
              realEstate={RealEstate}
              className="grid grid-cols-1 gap-8"
            />
          </div>

          <PromotionSectionInRealPage RealEstate={RealEstate} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Description Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 text-right mb-4">
                الوصف
              </h2>
              <DescriptionProperty
                description={RealEstate?.description || ""}
              />
            </div>

            {/* Location Section */}
            <div>
              <h1 className="text-2xl font-bold text-right mb-6">الموقع</h1>
              <LocationProperty
                location={{
                  latitude: Number(RealEstate?.latitude || 0),
                  longitude: Number(RealEstate?.longitude || 0),
                }}
                address={RealEstate?.city || ""}
                height="300px"
              />
            </div>
          </div>
        </div>

        {/* {RealEstate?.ad?.promotion && <ApartmentDrawing />} */}

        <ActionsCards realEstate={RealEstate} />
        <LegalInfoProperty realEstate={RealEstate} />
        <CallUserBtns
          isText
          className="flex"
          phone={RealEstate?.user?.profile?.phone || ""}
          whatsapp={RealEstate?.user?.profile?.whatsapp || ""}
        />

        {RelatedRealEstate && RelatedRealEstate?.length > 0 && (
          <SimilarProperties RealEstesList={RelatedRealEstate || []} />
        )}
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
