"use client";

import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import { Button } from "../../ui/button";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ShareButton from "@/components/atoms/buttons/ShareBtn";

interface Props {
  RealStateId: number;
  count: number;
}

const PropertyDetailsBtnsGroup = ({ RealStateId, count }: Props) => {
  return (
    <div className="flex items-center gap-1 md:gap-4">
      <Tooltip>
        <TooltipTrigger>
          <ShareButton />
        </TooltipTrigger>
        <TooltipContent>مشاركة العقار</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button className="bg-[#EDF0F8] hover:bg-[#EDF0F8]/80 rounded-xl">
            {count && count > 0 ? (
              <span className="text-[#0e6c8b]">{count}</span>
            ) : null}
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZTZjOGIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZS1pY29uIGx1Y2lkZS1leWUiPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=="
              alt="location"
              width={20}
              height={20}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>عدد المشاهدات</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <FavoriteBtn type="page" RealStateId={RealStateId} />
        </TooltipTrigger>
        <TooltipContent>إضافة للمفضلة</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default PropertyDetailsBtnsGroup;
