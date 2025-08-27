import React from "react";
import CardSkeleton from "./CardSkeleton";

interface Props {
  count: number;
  className?: string;
  mainClassSkeleton?: string;
  showTwoSkeletons?: boolean;
  showThreeSkeletons?: boolean;
  twoClassSkeleton?: string;
  threeClassSkeleton?: string;
}

const GroupCardsSkeletons = ({
  count,
  className,
  mainClassSkeleton,
  showTwoSkeletons,
  showThreeSkeletons,
  threeClassSkeleton,
  twoClassSkeleton,
}: Props) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton
          key={index}
          className={className}
          mainClassSkeleton={mainClassSkeleton}
          showTwoSkeletons={showTwoSkeletons}
          showThreeSkeletons={showThreeSkeletons}
          threeClassSkeleton={threeClassSkeleton}
          twoClassSkeleton={twoClassSkeleton}
        />
      ))}
    </>
  );
};

export default GroupCardsSkeletons;
