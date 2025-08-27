import { RealEstesType } from "@/types/Real-estates";
import SelectCalendarDialog from "../../organisms/Popups/SelectCalendarDialog";
import { Card } from "../../ui/card";
import Image from "next/image";
import React from "react";
import RequestExaminationDialog from "@/components/organisms/Popups/RequestExaminationOrEvaluationDialog";

interface Props {
  realEstate: RealEstesType | undefined;
}

const ActionsCards = ({ realEstate }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <RequestExaminationDialog type="examination">
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
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
      </RequestExaminationDialog>

      <RequestExaminationDialog type="evaluation">
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
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
      </RequestExaminationDialog>

      {/* Select Calendar */}
      <SelectCalendarDialog
        realEstateId={realEstate?.id || 0}
        appointments={realEstate?.appointments || []}
      />
    </div>
  );
};

export default ActionsCards;
