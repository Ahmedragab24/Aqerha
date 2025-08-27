import React from "react";
import { NewType } from "@/types/News";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  News: NewType;
  ImageStyle?: string;
}

const SecondeNewsCard = ({ News, ImageStyle }: Props) => {
  return (
    <Card className="overflow-hidden p-0 border-gray-300">
      <CardContent className="p-0">
        <div
          className={`relative w-full h-[250px] sm:h-[300px] lg:h-[400px] ${ImageStyle}`}
        >
          <Image
            src={News?.image || "/placeholder.svg"}
            alt="مباني سكنية"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 lg:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-fit flex items-center gap-2 text-sm bg-gray-200 rounded-sm px-3 py-2">
              <Image
                src="/Icons/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
              />
              {News?.created_at}
            </div>
            <Link href={`/news/${News?.id}`}>
              <Button size="lg" className="px-6 lg:px-8 w-full sm:w-auto">
                تابع القراءة
              </Button>
            </Link>
          </div>

          <h2 className="text-lg lg:text-xl font-bold leading-tight">
            {News?.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
            {News?.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecondeNewsCard;
