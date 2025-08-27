import { Button } from "../../ui/button";
import React from "react";

const ProvidersBtns = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant={"outline"}
        className="w-full h-11 text-primary hover:text-primary-80"
      >
        التحقق بواسطة نفاذ
      </Button>
    </div>
  );
};

export default ProvidersBtns;
