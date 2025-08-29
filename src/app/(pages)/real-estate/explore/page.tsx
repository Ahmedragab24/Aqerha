"use client";

import React from "react";
import SeeMore from "../../../../components/atoms/buttons/SeeMore";
import SectionTitle from "../../../../components/atoms/title/SectionTitle";
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
import { useCarouselIndicators } from "@/hooks/use-carousel-indicators";

interface CarouselSectionProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  indicators: ReturnType<typeof useCarouselIndicators>;
  delay?: number;
}

const CarouselSection = ({
  title,
  data,
  indicators,
  delay = 2500,
}: CarouselSectionProps) => (
  <section>
    <div className="flex justify-between">
      <SectionTitle Title={title} />
      <SeeMore path="/real-estate" />
    </div>

    {data.length === 0 ? (
      <p className="text-center text-gray-500 py-6">لا توجد بيانات متاحة</p>
    ) : (
      <>
        <Carousel
          setApi={indicators.setApi}
          opts={{
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            direction: "rtl",
          }}
          className="w-full"
          plugins={[Autoplay({ delay })]}
        >
          <CarouselContent className="py-4">
            {data.map((item) => (
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: indicators.count }).map((_, i) => (
            <button
              key={i}
              aria-label={`انتقل إلى العقار ${i + 1}`}
              onClick={() => indicators.api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full ${
                i === indicators.current ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </>
    )}
  </section>
);

const ExplorePage = () => {
  const { data } = useExploreRealEstatesQuery();

  const featuredRealEstatesData = data?.explore?.featured || [];
  const limitedRealEstatesData = data?.explore?.limited_units || [];
  const topSellingRealEstatesData = data?.explore?.top_selling || [];

  const featuredIndicators = useCarouselIndicators();
  const limitedIndicators = useCarouselIndicators();
  const topSellingIndicators = useCarouselIndicators();

  return (
    <main className="Container pt-24 md:pt-28 mb-16">
      <SectionTitle Title="استكشف" className="text-center mb-10" />

      <div className="space-y-10">
        <CarouselSection
          title="دليل عقار الآن"
          data={featuredRealEstatesData}
          indicators={featuredIndicators}
          delay={2400}
        />

        <CarouselSection
          title="الأكثر مبيعا"
          data={topSellingRealEstatesData}
          indicators={topSellingIndicators}
          delay={2600}
        />

        <CarouselSection
          title="وحدات محدودة"
          data={limitedRealEstatesData}
          indicators={limitedIndicators}
          delay={2800}
        />
      </div>
    </main>
  );
};

export default ExplorePage;
