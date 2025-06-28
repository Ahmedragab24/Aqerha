import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PropertyDetailsBtnsGroup = () => {
  return (
    <div className="flex items-center gap-1 md:gap-4">
      <Button className="bg-[#EDF0F8] hover:bg-[#EDF0F8]/80 rounded-xl">
        <Image src="/Icons/Share.svg" alt="location" width={20} height={20} />
      </Button>
      <Button className="bg-[#EDF0F8] hover:bg-[#EDF0F8]/80 rounded-xl">
        <Image
          src="/Icons/MarkDown.svg"
          alt="location"
          width={20}
          height={20}
        />
      </Button>
      <Button className="bg-[#FFF0F0] hover:bg-[#FFF0F0]/80 rounded-xl">
        <span className="text-red-400">192</span>
        <Image src="/Icons/LoveRed.svg" alt="location" width={20} height={20} />
      </Button>
    </div>
  );
};

export default PropertyDetailsBtnsGroup;
