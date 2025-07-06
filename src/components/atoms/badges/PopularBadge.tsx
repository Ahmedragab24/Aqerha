import Image from "next/image";
import React from "react";

const PopularBadge = () => {
  return (
    <div className="bg-[#FFE95E] text-xs font-semibold text-primary flex items-center gap-1 py-2 px-4 rounded-sm">
      <Image
        src="/Icons/material-symbols_crown-rounded.svg"
        alt="crown"
        width={15}
        height={15}
      />
      <h6>ذهبي</h6>
    </div>
  );
};

export default PopularBadge;
