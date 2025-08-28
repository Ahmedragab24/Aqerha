"use client";

import { useParams } from "next/navigation";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import ActionsCardsForProjectPage from "../../../../components/molecules/cards/ActionsCardsForProjectPage";

import Image from "next/image";
import { useGetProjectByIdQuery } from "@/store/services/Projects";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import React from "react";
import { useCarouselIndicators } from "@/hooks/use-carousel-indicators";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const { data } = useGetProjectByIdQuery(Number(projectId));
  const ProjectData = data?.data?.project;
  const OtherProjectsList = data?.data?.other_projects || [];
  const realEstatesCarousel = useCarouselIndicators();
  const otherProjectsCarousel = useCarouselIndicators();

  return (
    <main className="pt-13 mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] lg:h-[95vh]">
        <Image
          src={`${ProjectData?.cover_image || "/placeholder.svg"}`}
          alt={ProjectData?.name || "Project"}
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm lg:leading-20">
            {ProjectData?.developer_name}
          </h1>
        </div>
      </div>
      <div className="Container mt-10 space-y-20">
        <div className="space-y-4 md:space-y-6">
          <SectionTitle Title="التفاصيل" />

          <ActionsCardsForProjectPage project={ProjectData} />
        </div>

        <div className="space-y-4 md:space-y-6">
          <SectionTitle Title="حول المشروع" />

          <Card className="flex flex-col  gap-4  bg-secondary rounded-md p-2 lg:py-10 px-4 duration-300 group shadow-sm  border-none">
            {/* مطور المشروع */}
            <div>
              <h3 className="text-sm text-gray-500">مطور المشروع</h3>
              <p className="text-base font-medium text-gray-800">
                {ProjectData?.developer_name || "غير متوفر"}
              </p>
            </div>

            {/* حالة المشروع */}
            <div>
              <h3 className="text-sm text-gray-500">حالة المشروع</h3>
              <p className="text-base font-medium text-gray-800">
                {ProjectData?.project_status === "complete"
                  ? "مكتمل"
                  : "تحت الانشاء"}
              </p>
            </div>

            {/* وصف المشروع */}
            <div>
              <h3 className="text-sm text-gray-500">وصف المشروع</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {ProjectData?.description || "لا يوجد وصف متاح حالياً."}
              </p>
            </div>
          </Card>
        </div>

        {ProjectData?.real_estates && ProjectData?.real_estates.length > 0 && (
          <div className="space-y-6">
            <SectionTitle Title="الوحدات المتاحة" />

            <Carousel
              setApi={realEstatesCarousel.setApi}
              opts={{
                align: "start",
                direction: "rtl",
              }}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 2400,
                }),
              ]}
            >
              <CarouselContent className="pb-6">
                {ProjectData?.real_estates.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <RealEstateCard product={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden lg:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>

            <div className="flex justify-center gap-2">
              {Array.from({ length: realEstatesCarousel.count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => realEstatesCarousel.api?.scrollTo(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === realEstatesCarousel.current
                      ? "bg-primary"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {OtherProjectsList && OtherProjectsList.length > 0 && (
          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-between">
              <SectionTitle
                Title={`مشاريع أخرى من ${ProjectData?.developer_name}`}
              />
            </div>

            <Carousel
              setApi={otherProjectsCarousel.setApi}
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
            >
              <CarouselContent className="pb-6">
                {OtherProjectsList.map((item) => (
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

            <div className="flex justify-center gap-2 ">
              {Array.from({ length: otherProjectsCarousel.count }).map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => otherProjectsCarousel.api?.scrollTo(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === otherProjectsCarousel.current
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
