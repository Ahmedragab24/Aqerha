"use client";

import { useParams } from "next/navigation";
import SeeMore from "../../../../components/atoms/buttons/SeeMore";
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

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const { data } = useGetProjectByIdQuery(Number(projectId));
  const ProjectData = data?.data?.project;
  const OtherProjectsList = data?.data?.other_projects || [];

  return (
    <main className="pt-10 mb-16">
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
        <div className="space-y-6">
          <SectionTitle Title="التفاصيل" />

          <ActionsCardsForProjectPage project={ProjectData} />
        </div>

        {ProjectData?.real_estates && ProjectData?.real_estates.length > 0 && (
          <div className="space-y-6">
            <SectionTitle Title="الوحدات المتاحة" />

            <Carousel
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
          </div>
        )}

        {OtherProjectsList && OtherProjectsList.length > 0 && (
          <div className="space-y-6">
            <div className="flex justify-between">
              <SectionTitle
                Title={`مشاريع أخرى من ${ProjectData?.developer_name}`}
              />
              <SeeMore path="/developers" />
            </div>

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
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
