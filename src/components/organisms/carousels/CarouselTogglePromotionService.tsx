import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PromotionServiceInDetailsCard from "@/components/molecules/cards/PromotionServiceInDetailsCard";
import { PromotionServiceType } from "@/app/(pages)/promotion-services/page";

interface Props {
  items: PromotionServiceType[];
  selectedValue: PromotionServiceType | null;
  setSelectedValue: (value: PromotionServiceType) => void;
}

export default function CarouselTogglePromotionService({
  items,
  selectedValue,
  setSelectedValue,
}: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="flex-row-reverse -ml-4 p-2">
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className="px-4 w-full basis-full md:basis-1/2 cursor-pointer"
          >
            <PromotionServiceInDetailsCard
              data={item}
              isSelected={selectedValue?.id === item.id}
              onSelect={() => setSelectedValue(item)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
