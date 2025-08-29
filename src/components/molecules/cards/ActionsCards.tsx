import { RealEstesType } from "@/types/Real-estates";
import SelectCalendarDialog from "../../organisms/Popups/SelectCalendarDialog";
import { Card } from "../../ui/card";
import Image from "next/image";
import React from "react";
import RequestExaminationDialog from "@/components/organisms/Popups/RequestExaminationOrEvaluationDialog";
import { getAuthTokenServer } from "@/lib/auth/auth-server";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";

interface Props {
  realEstate: RealEstesType | undefined;
}

const ActionsCards = async ({ realEstate }: Props) => {
  const token = await getAuthTokenServer();

  return (
    <div className="grid grid-cols-3 gap-4">
      {token ? (
        <RequestExaminationDialog type="examination">
          <Card
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/Icons/tabler_report-search-2.svg"
                alt="tabler_report"
                width={70}
                height={70}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                فحص
              </h2>
            </div>
          </Card>
        </RequestExaminationDialog>
      ) : (
        <RegisterDialog>
          <Card
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/Icons/tabler_report-search-2.svg"
                alt="tabler_report"
                width={70}
                height={70}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                فحص
              </h2>
            </div>
          </Card>
        </RegisterDialog>
      )}

      {token ? (
        <RequestExaminationDialog type="evaluation">
          <Card
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/Icons/codicon_feedback.svg"
                alt="tabler_report"
                width={70}
                height={70}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                تقييم
              </h2>
            </div>
          </Card>
        </RequestExaminationDialog>
      ) : (
        <RegisterDialog>
          <Card
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/Icons/codicon_feedback.svg"
                alt="tabler_report"
                width={70}
                height={70}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />

              <h2 className="text-sm md:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                تقييم
              </h2>
            </div>
          </Card>
        </RegisterDialog>
      )}

      {/* Select Calendar */}
      <SelectCalendarDialog
        realEstateId={realEstate?.id || 0}
        appointments={realEstate?.appointments || []}
      />
    </div>
  );
};

export default ActionsCards;
