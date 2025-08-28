import Image from "next/image";
import React from "react";

const PurposeBadge = () => {
  return (
    <div>
      <div className="absolute top-56 translate-middle-x -right-[10px] bg-primary text-white pl-6 pr-2 md:px-6 py-2 md:py-[6px] rounded-t-md rounded-bl-md flex items-center gap-2 text-xs md:text-sm font-medium">
        <Image
          src="/Icons/Stars.svg"
          alt="Triangle"
          width={15}
          height={15}
          className="w-4 h-4"
        />
        <span>رائجة</span>
      </div>

      <div className="absolute top-64 translate-middle-x -right-[10px] -rotate-[360deg]">
        <Image
          src="/Icons/Triangle.svg"
          alt="Triangle"
          width={11}
          height={11}
        />
      </div>
    </div>
  );
};

export default PurposeBadge;
