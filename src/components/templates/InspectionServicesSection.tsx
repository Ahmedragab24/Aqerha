import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import { InspectionServicesData } from "@/constants/cards/InspectionServices";
import InspectionServiceCard from "../molecules/cards/InspectionServiceCard";
import Image from "next/image";
import { Button } from "../ui/button";
import RequestExaminationDialog from "../organisms/Popups/RequestExaminationDialog";

const InspectionServicesSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="خدمات الفحص" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {InspectionServicesData.map((item) => (
          <InspectionServiceCard key={item.id} InspectionService={item} />
        ))}
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

          <RequestExaminationDialog type="evaluation">
            <Button
              variant={"secondary"}
              className="hover:bg-secondary/80 rounded-sm px-16 py-6"
            >
              طلب تقييم
            </Button>
          </RequestExaminationDialog>
        </div>
      </div>
    </section>
  );
};

export default InspectionServicesSection;
