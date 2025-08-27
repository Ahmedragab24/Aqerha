"use client";

import SeeMore from "../../../../components/atoms/buttons/SeeMore";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
import React from "react";
import { useExploreRealEstatesQuery } from "@/store/services/RealEstate";
import RealEstateGuideCard from "@/components/molecules/cards/RealEstateGuideCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ExplorePage = () => {
  const { data } = useExploreRealEstatesQuery();

  const featuredRealEstesData = data?.explore?.featured || [];
  const limitedRealEstesData = data?.explore?.limited_units || [];
  const topSellingRealEstesData = data?.explore?.top_selling || [];

  return (
    <main className="Container pt-28 mb-16">
      <SectionTitle Title="استكشف" className="text-center mb-10" />
      <div className="space-y-16">
        <section className="space-y-4">
          <div className="flex justify-between">
            <SectionTitle Title="دليل عقار الآن" />
            <SeeMore path="/" />
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            dir="ltr"
            plugins={[
              Autoplay({
                delay: 2400,
              }),
            ]}
          >
            <CarouselContent className="py-4">
              {featuredRealEstesData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <RealEstateGuideCard ExploreRealEstate={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between">
            <SectionTitle Title="الأكثر مبيعا" />
            <SeeMore path="/" />
          </div>

          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            dir="ltr"
            plugins={[
              Autoplay({
                delay: 2600,
              }),
            ]}
          >
            <CarouselContent className="py-4">
              {topSellingRealEstesData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <RealEstateGuideCard ExploreRealEstate={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between">
            <SectionTitle Title="وحدات محدودة" />
            <SeeMore path="/" />
          </div>

          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            dir="ltr"
            plugins={[
              Autoplay({
                delay: 2800,
              }),
            ]}
          >
            <CarouselContent className="py-4">
              {limitedRealEstesData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <RealEstateGuideCard ExploreRealEstate={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
      </div>
    </main>
  );
};

export default ExplorePage;
