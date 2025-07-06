import Image from "next/image";
import React from "react";

export interface featureListType {
  id: number;
  title: string;
}

interface Props {
  list: featureListType[];
}

const SubscriptionList = ({ list }: Props) => {
  return (
    <ul className="flex flex-col gap-2 md:gap-4">
      {list.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          <div className="bg-secondary p-1 rounded-full shadow-sm">
            <Image src="/Icons/check.svg" alt="check" width={25} height={25} />
          </div>
          <h3 className="md:text-xl">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SubscriptionList;
