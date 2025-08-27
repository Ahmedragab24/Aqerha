import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NewType } from "@/types/News";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  News: NewType;
}

const MainNewsCard = ({ News }: Props) => {
  return (
    <Card className="overflow-hidden bg-secondary border-none p-0">
      <CardContent className="p-0">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Property Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[420px]">
            <div className="space-y-6">
              <div className="w-fit text-sm bg-gray-200 rounded-sm px-3 py-2">
                مدة القراءة: ٥ دقائق
              </div>

              <div className="flex flex-col gap-8 justify-center h-full">
                <h2 className="text-xl lg:text-2xl font-bold leading-tight">
                  {News?.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-4 lg:line-clamp-3">
                  {News?.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm bg-gray-200 rounded-sm px-3 py-2">
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
          </div>

          {/* Property Image */}
          <div className="lg:w-1/2">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[420px]">
              <Image
                src={News?.image || "/placeholder.svg"}
                alt="منظر المدينة مع الجبال"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainNewsCard;
