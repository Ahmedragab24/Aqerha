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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarouselIndicators } from "@/hooks/use-carousel-indicators";
import Autoplay from "embla-carousel-autoplay";
import { SearchX } from "lucide-react";

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

  const CompanyCarousel = useCarouselIndicators();

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
            {CompanyData?.profile?.name}
          </h1>
        </div>
      </div>

      <div className="Container mt-16 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title={`تعرف على ${CompanyData?.profile?.name}`} />

          <p className="text-lg text-gray-600 max-full leading-relaxed">
            {CompanyData?.profile?.description}
          </p>

          <CallUserBtns
            isText={true}
            userData={CompanyData?.profile || undefined}
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="الخدمات المقدمة" />

          <ServicesCardsForCompany
            Services={CompanyData?.profile?.services || []}
            userData={CompanyData?.profile || undefined}
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="المشاريع المتاحة" />

          {CompanyData?.real_estate_project &&
          CompanyData.real_estate_project.length > 0 ? (
            <div>
              <Carousel
                opts={{
                  align: "start",
                  direction: "rtl",
                }}
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 2800,
                  }),
                ]}
                setApi={CompanyCarousel.setApi}
              >
                <CarouselContent className="pb-6">
                  {CompanyData?.real_estate_project?.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-full md:basis-1/2 lg:basis-1/3"
                    >
                      <ProjectCard project={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden lg:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>

              <div className="flex justify-center gap-2 mt-2">
                {Array.from({ length: CompanyCarousel.count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => CompanyCarousel.api?.scrollTo(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === CompanyCarousel.current
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <DataNotFount
              title="لا توجد مشاريع حالياً"
              description=""
              icon={<SearchX className="w-10 h-10" />}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default CompanyDetailsPage;
