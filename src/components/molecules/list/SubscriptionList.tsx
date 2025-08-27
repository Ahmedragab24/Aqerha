import Image from "next/image";
import React from "react";

export interface featureListType {
  key: string;
  value: string;
}

interface Props {
  packageFeatures: featureListType[];
}

const SubscriptionList = ({ packageFeatures }: Props) => {
  return (
    <ul className="flex flex-col gap-2 md:gap-4">
      {packageFeatures.map((item) => (
        <li key={item.key} className="flex items-center gap-4">
          <div className="bg-secondary p-1 rounded-full shadow-sm">
            <Image
              src="/Icons/check.svg"
              alt="check"
              width={25}
              height={25}
              className="md:w-6 md:h-6 w-4 h-4"
            />
          </div>
          <h3 className="md:text-xl text-sm">{item.value}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SubscriptionList;
