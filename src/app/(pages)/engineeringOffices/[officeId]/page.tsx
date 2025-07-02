import SectionTitle from "@/components/atoms/title/SectionTitle";
import ActionsCardsForOfficePage from "@/components/molecules/cards/ActionsCardsForOfficePage";
import Image from "next/image";

const OfficeDetailsPage = async ({
  params,
}: {
  params: Promise<{ officeId: string }>;
}) => {
  const { officeId } = await params;

  console.log(officeId);

  return (
    <main className="pt-16 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src="/Images/a41d1a11395e2d52bce451ae4914a82c30c5d9dd.png"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm lg:leading-20">
            ماجيستيك للاستشارات الهندسية
          </h1>
        </div>
      </div>
      <div className="Container mt-10 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title="الخدمات المقدمة" />

          <ActionsCardsForOfficePage />
        </div>
      </div>
    </main>
  );
};

export default OfficeDetailsPage;
