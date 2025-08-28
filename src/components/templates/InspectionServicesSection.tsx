import { Suspense } from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import InspectionServiceCard from "../molecules/cards/InspectionServiceCard";
import Image from "next/image";
import RequestExaminationDialog from "../organisms/Popups/RequestExaminationOrEvaluationDialog";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";
import SeeMore from "../atoms/buttons/SeeMore";
import RegisterDialog from "../organisms/Popups/RegisterDialog";
import { Button } from "../ui/button";
import { getAuthTokenServer } from "@/lib/auth/auth-server";

const InspectionServices = [
  {
    id: 1,
    title: "الفحص الهندسي (مع تقرير)",
    image: "/Icons/tabler_report-search.svg",
    color: "bg-[#FFEBEB]",
  },
  {
    id: 2,
    title: "الفحص الهندسي (بدون تقرير)",
    image: "/Icons/tabler_report-off.svg",
    color: "bg-[#F3F7EC]",
  },
  {
    id: 3,
    title: "باقة الزيارة",
    image: "/Icons/material-symbols_nest-doorbell-visitor-outline.svg",
    color: "bg-[#E4EDFF]",
  },
];

const InspectionServicesSection = async () => {
  const token = await getAuthTokenServer();

  return (
    <section className="Container space-y-4 md:space-y-6">
      <div className="flex justify-between">
        <SectionTitle Title="خدمات الفحص" />
        <SeeMore path="/Inspection-services" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Suspense
          fallback={
            <GroupCardsSkeletons
              count={3}
              mainClassSkeleton="!h-[220px]"
              showThreeSkeletons={false}
              showTwoSkeletons={false}
            />
          }
        >
          {InspectionServices.map((item) => (
            <InspectionServiceCard key={item.id} InspectionService={item} />
          ))}
        </Suspense>
      </div>

      <div className="bg-primary-dark text-white rounded-2xl py-10 px-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="bg-white p-2 rounded-full">
            <Image
              src="/Icons/done-circle.svg"
              alt="done-circle"
              width={30}
              height={30}
              className="w-5 h-5 md:w-10 md:h-10"
            />
          </div>

          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            خدمات التقييم
          </h1>
          <p className="text-xs md:text-sm lg:text-lg font-medium text-center">
            ابدأ الآن واحصل على تقييم احترافي لعقارك في أقل من ٢٤ ساعة.
          </p>

          {token ? (
            <RequestExaminationDialog
              type="evaluation"
              title="طلب تقييم"
              styleTrigger="bg-secondary text-primary !w-fit hover:bg-secondary/80 rounded-sm px-8 md:px-16 py-6"
            />
          ) : (
            <RegisterDialog>
              <Button
                size="lg"
                className={`h-12 !w-fit bg-secondary text-primary hover:bg-secondary/80 rounded-sm px-8 md:px-16 py-6`}
              >
                طلب تقييم
              </Button>
            </RegisterDialog>
          )}
        </div>
      </div>
    </section>
  );
};

export default InspectionServicesSection;
