import React from "react";
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

interface Props {
  RealEstesList: RealEstesType[];
}

const SimilarProperties = ({ RealEstesList }: Props) => {
  return (
    <section className="Container space-y-2">
      <div className="flex items-center gap-4">
        <SectionTitle Title="عقارات مشابهة" />
        <div className="h-1 w-44 bg-primary rounded-full mt-2"></div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {RealEstesList.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <RealEstateCard product={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {RealEstesList.length > 3 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </section>
  );
};

export default SimilarProperties;
