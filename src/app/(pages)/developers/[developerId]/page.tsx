"use client";

import { useGetDeveloperByIdQuery } from "@/store/services/Developers";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const DeveloperDetailsPage = () => {
  const { developerId } = useParams();
  const { data } = useGetDeveloperByIdQuery(Number(developerId));
  const DeveloperData = data?.data;
  const ProjectsList = data?.data?.real_estate_project || [];

  return (
    <main className="mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src={`${DeveloperData?.image || "/placeholder.svg"}`}
          alt={DeveloperData?.name || "Developer"}
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm text-center">
            {DeveloperData?.name}
          </h1>
        </div>

        <div className="absolute bottom-[-55px] md:bottom-[-85px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white overflow-hidden z-20 shadow-lg">
          <Image
            src={`${DeveloperData?.profile?.image || "/placeholder.svg"}`}
            alt="User Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="Container mt-16 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title={`تعرف على ${DeveloperData?.name}`} />

          <p className="text-gray-600 max-w-5xl">
            {DeveloperData?.profile?.description}
          </p>
        </div>

        <div className="space-y-6">
          <SectionTitle Title="المشاريع المتاحة" />

          {ProjectsList && ProjectsList.length > 0 && (
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
            >
              <CarouselContent className="pb-6">
                {ProjectsList.map((item) => (
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
          )}
        </div>
      </div>
    </main>
  );
};

export default DeveloperDetailsPage;
