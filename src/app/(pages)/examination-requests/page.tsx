"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import ExaminationRequestCard from "@/components/molecules/cards/ExaminationRequestCard";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import { useGetNearbyExaminationQuery } from "@/store/services/GetRequests";
import { SearchX } from "lucide-react";
import React from "react";

const EvaluationRequestsPage = () => {
  const { data, isLoading, isError } = useGetNearbyExaminationQuery();

  const ProjectsList = data?.data || [];

  if (isError) {
    return (
      <main className="Container pt-28 mb-16">
        <div className="h-[60vh] flex items-center justify-center">
          <DataNotFount
            title="حدث خطأ ما"
            description="يرجى تحديث الصفحة"
            icon={<SearchX className="w-10 h-10" />}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="طلبات الفحص" className="text-center" />

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            <GroupCardsSkeletons count={2} />
          </div>
        ) : ProjectsList.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {ProjectsList.map((item) => (
              <ExaminationRequestCard key={item.id} ExaminationRequest={item} />
            ))}
          </div>
        ) : (
          <DataNotFount
            title="لا يوجد طلبات"
            description="لا يوجد طلبات حاليا"
            icon={<SearchX className="w-10 h-10" />}
          />
        )}
      </div>
    </main>
  );
};

export default EvaluationRequestsPage;
