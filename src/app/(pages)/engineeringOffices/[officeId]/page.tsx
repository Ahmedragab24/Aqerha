"use client";

import { useParams } from "next/navigation";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import Image from "next/image";
import { useGetOfficeByIdQuery } from "@/store/services/EngineeringOffices";
import PosherPdf from "@/components/molecules/uploads/PosherPdf";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";
import ServicesCardsForCompany from "@/components/molecules/cards/ServicesCardsForCompany";

const OfficeDetailsPage = () => {
  const { officeId } = useParams();
  const OfficeId = officeId ? +officeId : 0;
  const { data } = useGetOfficeByIdQuery(OfficeId);
  const OfficeData = data?.data?.office;

  console.log(OfficeData);

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
            {OfficeData?.profile?.name}
          </h1>
        </div>
      </div>
      <div className="Container mt-10 space-y-20">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <SectionTitle Title={`تعرف على ${OfficeData?.profile?.name}`} />
            <PosherPdf brochureUrl={OfficeData?.profile?.brochure || ""} />
          </div>

          <p className="text-gray-600 max-w-5xl">
            {OfficeData?.profile?.description || "لا يوجد وصف متاح حالياً."}
          </p>

          <CallUserBtns isText userData={OfficeData?.profile} />
        </div>

        <div className="space-y-4 md:space-y-6">
          <SectionTitle Title="التفاصيل" />

          <ServicesCardsForCompany
            Services={OfficeData?.profile?.services || []}
            userData={OfficeData?.profile}
          />
        </div>
      </div>
    </main>
  );
};

export default OfficeDetailsPage;
