import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface props {
  className?: string;
  mainClassSkeleton?: string;
  showTwoSkeletons?: boolean;
  showThreeSkeletons?: boolean;
  twoClassSkeleton?: string;
  threeClassSkeleton?: string;
}

const CardSkeleton = ({
  className,
  mainClassSkeleton,
  showTwoSkeletons,
  showThreeSkeletons,
  twoClassSkeleton,
  threeClassSkeleton,
}: props) => {
  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <Skeleton
        className={`h-[250px] w-full rounded-xl ${mainClassSkeleton}`}
      />

      <div className="space-y-2">
        {showTwoSkeletons ?? (
          <Skeleton className={`h-4 w-[250px] ${twoClassSkeleton}`} />
        )}
        {showThreeSkeletons ?? (
          <Skeleton className={`h-4 w-[200px] ${threeClassSkeleton}`} />
        )}
      </div>
    </div>
  );
};

export default CardSkeleton;
