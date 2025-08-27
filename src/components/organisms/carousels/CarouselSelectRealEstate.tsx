"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { RealEstesType } from "@/types/Real-estates";
import { useGetUserRealEstatesQuery } from "@/store/services/RealEstate";
import RealEstateInPromotionCard from "@/components/molecules/cards/RealEstateInPromotionCard";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import AddRealEstateBtn from "@/components/atoms/buttons/AddRealEstateBtn";
import { CircleOff } from "lucide-react";

interface Props {
  selectedValue: RealEstesType | null;
  setSelectedValue: (value: RealEstesType) => void;
}

export default function CarouselSelectRealEstate({
  selectedValue,
  setSelectedValue,
}: Props) {
  const { data, isLoading } = useGetUserRealEstatesQuery();

  const RealEstatesList = data?.data || [];

  return (
    <>
      {isLoading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <GroupCardsSkeletons count={4} />
        </div>
      )}

      {RealEstatesList.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <DataNotFount
            title="لا يوجد إعلانات"
            description="قم بإضافة إعلانات جديدة"
            icon={<CircleOff className="w-16 h-16" />}
          />

          <AddRealEstateBtn />
        </div>
      ) : (
        <div>
          <h2 className="text-lg md:text-2xl font-semibold">
            قم باختيار الإعلان الذي تريده:
          </h2>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex-row-reverse -ml-4 p-2">
              {RealEstatesList.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="px-4 w-full basis-full md:basis-1/2 cursor-pointer"
                >
                  <RealEstateInPromotionCard
                    RealEstate={item}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
}
