"use client";

import { useParams } from "next/navigation";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import Image from "next/image";
import React from "react";
import { useGetContractingCompanyByIdQuery } from "@/store/services/ContractingCompany";
import ServicesCardsForCompany from "../../../../components/molecules/cards/ServicesCardsForCompany";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import CallUserBtns from "@/components/molecules/btnsGroup/CallUserBtns";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";

const CompanyDetailsPage = () => {
  const params = useParams();
  const companyId = params?.companyId ? Number(params.companyId) : undefined;

  const { data, isLoading, isError } = useGetContractingCompanyByIdQuery(
    companyId ?? 0,
    {
      skip: !companyId,
    }
  );

  const CompanyData = data?.data?.["Contracting Company"];

  if (isLoading) {
    return (
      <main className="mb-16">
        <GroupCardsSkeletons count={4} />
      </main>
    );
  }

  if (isError || !CompanyData) {
    return (
      <main className="mb-16">
        <DataNotFount
          title="لم يتم العثور علي الشركة"
          description="هناك خطأ ما، حاول مرة أخرى"
        />
      </main>
    );
  }

  return (
    <main className="mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[100vh]">
        <Image
          src={CompanyData?.profile?.image || "/placeholder.svg"}
          alt={CompanyData?.name || "Company Image"}
          fill
          priority
          loading="eager"
          className="brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm text-center">
            {CompanyData?.name}
          </h1>
        </div>
      </div>

      <div className="Container mt-16 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title={`تعرف على ${CompanyData?.name}`} />

          <p className="text-lg text-gray-600 max-full leading-relaxed">
            {CompanyData?.profile?.description}
          </p>

          <CallUserBtns
            isText={true}
            phone={CompanyData?.phone}
            whatsapp={CompanyData?.profile?.whatsapp}
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="الخدمات المقدمة" />

          <ServicesCardsForCompany
            Services={CompanyData?.profile?.services || []}
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="المشاريع المتاحة" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CompanyData?.real_estate_project?.length ? (
              CompanyData.real_estate_project.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))
            ) : (
              <p className="text-gray-500">لا توجد مشاريع حالياً</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDetailsPage;
