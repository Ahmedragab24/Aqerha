import React, { useEffect } from "react";

export const useCarouselIndicators = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return { api, setApi, current, count };
};
