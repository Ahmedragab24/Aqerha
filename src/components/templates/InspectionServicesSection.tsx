import { Suspense } from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import InspectionServiceCard from "../molecules/cards/InspectionServiceCard";
import Image from "next/image";
import RequestExaminationDialog from "../organisms/Popups/RequestExaminationOrEvaluationDialog";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

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

const InspectionServicesSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="خدمات الفحص" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold">خدمات التقييم</h1>
          <p className="text-sm md:text-lg font-medium text-center">
            ابدأ الآن واحصل على تقييم احترافي لعقارك في أقل من ٢٤ ساعة.
          </p>

          <RequestExaminationDialog
            type="evaluation"
            title="طلب تقييم"
            styleTrigger="bg-secondary text-primary !w-fit hover:bg-secondary/80 rounded-sm px-16 py-6"
          />
        </div>
      </div>
    </section>
  );
};

export default InspectionServicesSection;
