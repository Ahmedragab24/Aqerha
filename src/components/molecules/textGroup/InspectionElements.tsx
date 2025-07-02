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
          <div className="relative w-10 h-10">
            {item.active ? (
              <Image src="/Icons/Check Circle.svg" alt="Check" fill />
            ) : (
              <Image src="/Icons/Close Circle.svg" alt="Check" fill />
            )}
          </div>

          <p className="text-lg font-medium">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InspectionElements;
