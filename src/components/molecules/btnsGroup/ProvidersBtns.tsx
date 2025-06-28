import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProvidersBtns = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Google */}
      <Button variant={"outline"} className="w-full h-11">
        <Image src="/Icons/Google.svg" alt="google" width={20} height={20} />
        انضم من خلال جوجل
      </Button>

      {/* Facebook */}
      <Button variant={"outline"} className="w-full h-11">
        <Image
          src="/Icons/Facebook.svg"
          alt="facebook"
          width={20}
          height={20}
        />
        انضم من خلال جوجل
      </Button>
    </div>
  );
};

export default ProvidersBtns;
