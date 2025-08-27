"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useGetHomeDataQuery } from "@/store/services/Home";

export default function BannersCarousel() {
  const { data } = useGetHomeDataQuery();
  const banners = data?.data?.banners || [];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect); // تنظيف الحدث
    };
  }, [api]);

  return (
    <div className="relative w-full mx-auto" dir="rtl">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full relative"
        opts={{
          align: "center",
          direction: "rtl",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {banners.map(({ id, image, title }) => (
            <CarouselItem key={id} className="w-full">
              <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[75vh]">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title || "Banner"}
                  fill
                  priority
                  quality={100}
                  className="object-cover"
                />

                {/* Overlay للنص */}
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white p-4 sm:p-8 drop-shadow-lg">
                    {title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70" />
      </Carousel>

      <div className="text-muted-foreground py-2 text-center text-sm">
        إعلان {current} من {count}
      </div>
    </div>
  );
}
