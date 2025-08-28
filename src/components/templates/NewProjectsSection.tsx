"use client";

import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import ProjectCard from "../molecules/cards/ProjectCard";
import { useGetHomeDataQuery } from "@/store/services/Home";
import GroupCardsSkeletons from "../molecules/Skeletons/GroupCardsSkeletons";

const NewProjectsSection = () => {
  const { data, isLoading } = useGetHomeDataQuery();
  const NewProjectsData = data?.data?.projects || [];

  return (
    <section className="Container space-y-4 md:space-y-6">
      <div className="flex justify-between">
        <SectionTitle Title="المشاريع الجديدة" />
        <SeeMore path="/projects" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <GroupCardsSkeletons
            count={4}
            showTwoSkeletons={false}
            showThreeSkeletons={false}
          />
        ) : (
          <>
            {NewProjectsData.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default NewProjectsSection;
