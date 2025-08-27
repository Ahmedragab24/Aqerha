"use client";

import SectionTitle from "../../../components/atoms/title/SectionTitle";
import React from "react";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";
import { useGetProjectsByUserQuery } from "@/store/services/Projects";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import { useAppSelector } from "@/store/hooks";
import PaginationProducts from "@/components/organisms/paginations/PaginationList";

const MyProjectsPage = () => {
  const { page } = useAppSelector((state) => state.page);
  const { data, isLoading, isError } = useGetProjectsByUserQuery(page);

  const ProjectsList = data?.data || [];

  if (isError) {
    return (
      <main className="Container pt-28 mb-16">
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<SearchX className="w-10 h-10" />}
        />
      </main>
    );
  }

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-10">
        <SectionTitle Title="مشاريعي" className="text-center" />

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GroupCardsSkeletons count={3} />
          </div>
        ) : ProjectsList.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ProjectsList.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        ) : (
          <DataNotFount
            title="لا يوجد مشاريع"
            description="لا يوجد مشاريع حاليا"
            icon={<SearchX className="w-10 h-10" />}
          />
        )}

        {data?.meta && data?.meta?.last_page > 1 && (
          <PaginationProducts
            currentPage={page}
            totalPages={data?.meta?.last_page || 1}
          />
        )}
      </div>
    </main>
  );
};

export default MyProjectsPage;
