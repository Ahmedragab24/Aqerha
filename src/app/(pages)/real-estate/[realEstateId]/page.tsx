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
import { formatName, formatPrice, formatPurpose } from "@/lib/utils";
import PromotionSectionInRealPage from "@/components/templates/PromotionSectionInRealPage";
import { Metadata } from "next";
import Script from "next/script";

type Props = {
  params: Promise<{ realEstateId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { realEstateId } = await params;
  const FetchData = await getRealEstateById(Number(realEstateId));
  const RealEstate = FetchData?.data?.realEstate;

  const title =
    formatName(RealEstate?.real_estate_type || "apartment") +
    " " +
    formatPurpose(RealEstate?.purpose || "rent") +
    " في " +
    RealEstate?.city;
  const description =
    RealEstate?.description?.slice(0, 160) ||
    "تفاصيل العقار ومواصفاته وصور عالية الجودة.";
  const image = RealEstate?.main_image || "/default-property.jpg";

  return {
    title,
    description,
    keywords: [
      formatName(RealEstate?.real_estate_type || "apartment"),
      RealEstate?.city || "",
      formatPurpose(RealEstate?.purpose || "rent"),
      "عقار",
      "سعودية",
      "عقارات",
      "عقارات للبيع",
      "عقارات للإيجار",
      "عقارات في",
      "شقق",
      "شقق للبيع",
      "شقق للإيجار",
      "شقق في",
      "شقق",
    ],
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
      locale: "ar_SA",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/real-estate/${realEstateId}`,
    },
  };
}

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
    <>
      <Script
        id="property-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name:
              formatName(RealEstate?.real_estate_type || "apartment") +
              " " +
              formatPurpose(RealEstate?.purpose || "rent"),
            description: RealEstate?.description,
            image: RealEstate?.images?.map((img) => img.url) || [],
            offers: {
              "@type": "Offer",
              price: RealEstate?.main_price,
              priceCurrency: "SAR",
              availability: "https://schema.org/InStock",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: RealEstate?.city,
              addressCountry: "SA",
            },
          }),
        }}
      />

      <main className="Container pt-24 md:pt-28 pb-10">
        <div className="md:space-y-16 space-y-8">
          <div className="space-y-4">
            <div className="space-y-4">
              <RealEstatePurposeBadge purpose={RealEstate?.purpose} />
              <div className="flex lex-row md:items-center justify-between gap-4">
                <SectionTitle
                  Title={
                    formatName(RealEstate?.real_estate_type || "apartment") +
                    " " +
                    formatPurpose(RealEstate?.purpose || "rent")
                  }
                />
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold flex items-center gap-1">
                  {RealEstate && formatPrice(+RealEstate?.main_price)}
                  <SaudiRiyal className="md:!w-9 md:!h-9" />
                  {RealEstate?.purpose === "rent" && (
                    <span className="text-sm md:text-3xl">
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
                <div className="flex flex-row justify-between gap-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/Icons/Location.svg"
                      alt="location"
                      width={15}
                      height={15}
                      className="w-3 h-3 md:!w-6 md:!h-6"
                    />
                    <h4 className="text-gray-600 text-xs md:text-md">
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
                      dayjs().diff(dayjs(RealEstate.created_at), "month") <
                        1 && (
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
                  className="hidden lg:grid grid-cols-1 gap-8"
                />
              </div>
            </div>
          </div>
          <div>
            {/* Property Details Mobile */}
            <div className="lg:hidden ">
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
                <h2 className="text-lg font-bold text-gray-900 text-right mb-4">
                  الوصف
                </h2>
                <DescriptionProperty
                  description={RealEstate?.description || ""}
                />
              </div>

              {/* Location Section */}
              <div>
                <h1 className="text-lg font-bold text-right mb-6">الموقع</h1>
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
            userData={RealEstate?.user?.profile || undefined}
            productId={RealEstate?.id || 0}
          />

          {RelatedRealEstate && RelatedRealEstate?.length > 0 && (
            <SimilarProperties RealEstesList={RelatedRealEstate || []} />
          )}
        </div>
      </main>
    </>
  );
};

export default PropertyDetailsPage;
