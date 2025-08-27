import Image from "next/image";
import React from "react";

interface Props {
  InspectionElementsList: {
    id: number;
    description: string;
    active: boolean;
  }[];
}

const InspectionElements = ({ InspectionElementsList }: Props) => {
  return (
    <div
      className={`grid ${
        InspectionElementsList.length > 1 ? "md:grid-cols-2" : ""
      } gap-6`}
    >
      {InspectionElementsList.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          <div className="w-8 h-8 min-w-[32px] min-h-[32px] relative">
            <Image
              src={
                item.active
                  ? "/Icons/Check Circle.svg"
                  : "/Icons/Close Circle.svg"
              }
              alt="Check"
              width={40}
              height={40}
            />
          </div>

          <p className="text-sm md:text-lg font-normal">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InspectionElements;
