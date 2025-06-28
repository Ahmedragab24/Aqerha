import SelectCalendarDialog from "@/components/organisms/Popups/SelectCalendarDialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ActionsCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        className={
          "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/tabler_report-search-2.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            فحص
          </h2>
        </div>
      </Card>

      <Card
        className={
          "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/codicon_feedback.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            تقييم
          </h2>
        </div>
      </Card>

      {/* Select Calendar */}
      <SelectCalendarDialog>
        <Card
          className={
            "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/solar_calendar-outline.svg"
              alt="tabler_report"
              width={70}
              height={70}
            />

            <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              احجز مقابلة
            </h2>
          </div>
        </Card>
      </SelectCalendarDialog>
    </div>
  );
};

export default ActionsCards;
