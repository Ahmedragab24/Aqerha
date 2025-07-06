import { TabsTrigger } from "@/components/ui/tabs";
import React from "react";

interface Props {
  value: string;
  title: string;
}

const MainTabTriggerBtn = ({ title, value }: Props) => {
  return (
    <TabsTrigger
      value={value}
      className=" flex-shrink-0  px-3 sm:px-4 md:px-6  py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap  rounded-none bg-secondary/80  text-secondary-foreground shadow-none transition-all duration-200 ease-in-out hover:bg-secondary hover:shadow-md hover:scale-[1.02] data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:border-primary/20 data-[state=active]:scale-[1.02] focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring  focus-visible:ring-offset-2 active:scale-[0.98] min-h-[44px] sm:min-h-[48px]"
    >
      {title}
    </TabsTrigger>
  );
};

export default MainTabTriggerBtn;
