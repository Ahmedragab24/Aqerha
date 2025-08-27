import React from "react";

interface Props {
  count: number;
}

const NumberCountBadge = ({ count }: Props) => {
  return (
    <>
      {count > 0 && (
        <div className="absolute -top-1 -right-1 rounded-full bg-red-500 w-4 h-4 text-[8px] text-white p-1">
          {count}
        </div>
      )}
    </>
  );
};

export default NumberCountBadge;
