import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { NewProjectsData } from "@/constants/cards/Projects";
import ProjectCard from "../molecules/cards/ProjectCard";

const NewProjectsSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="المشاريع الجديدة" />
        <SeeMore path="/" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NewProjectsData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
};

export default NewProjectsSection;
