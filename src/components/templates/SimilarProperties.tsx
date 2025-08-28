"use client";

import SectionTitle from "../atoms/title/SectionTitle";
import { RealEstesType } from "@/types/Real-estates";
import RealEstateCard from "../molecules/cards/RealEstateCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarouselIndicators } from "@/hooks/use-carousel-indicators";

interface Props {
  RealEstesList: RealEstesType[];
}

const SimilarProperties = ({ RealEstesList }: Props) => {
  const carouselIndicators = useCarouselIndicators();

  return (
    <section className="Container space-y-4">
      {/* Section Title */}
      <div className="flex items-center gap-4">
        <SectionTitle Title="عقارات مشابهة" className="text-sm md:text-xl" />
        <div className="h-1 w-44 bg-primary rounded-full mt-2"></div>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={carouselIndicators.setApi}
        opts={{ align: "start", direction: "rtl" }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {RealEstesList.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <RealEstateCard product={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {RealEstesList.length > 3 && (
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>

      {/* Dots (Bullets) */}
      <div className="flex justify-center gap-2 ">
        {Array.from({ length: carouselIndicators.count }).map((_, i) => (
          <button
            key={i}
            aria-label={`انتقل إلى العقار ${i + 1}`}
            onClick={() => carouselIndicators.api?.scrollTo(i)}
            className={`w-3 h-3 rounded-full ${
              i === carouselIndicators.current ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProperties;
