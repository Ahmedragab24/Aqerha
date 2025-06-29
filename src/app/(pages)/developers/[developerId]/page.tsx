import SectionTitle from "@/components/atoms/title/SectionTitle";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import { NewProjectsData } from "@/constants/cards/Projects";
import Image from "next/image";
import React from "react";

const DeveloperDetailsPage = async ({
  params,
}: {
  params: Promise<{ developerId: string }>;
}) => {
  const { developerId } = await params;

  console.log(developerId);

  return (
    <main className="mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src="/Images/4d94a4613bf0ea20d15367bbf8dfe8f76186d30e.png"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm text-center">
            مساكن للتطوير العقاري
          </h1>
        </div>

        <div className="absolute bottom-[-55px] md:bottom-[-85px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white overflow-hidden z-20">
          <Image
            src="/Images/asfegwarsafs.png"
            alt="User Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="Container mt-16 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title="تعرف على مساكن" />

          <p className="text-gray-600 max-w-5xl">
            مساكن هي شركة متخصصة في تطوير المشاريع العقارية، حيث تقدم حلولاً
            سكنية وتجارية مبتكرة تتماشى مع تطلعات العملاء. تركز الشركة على
            الجودة والتميز، مما يجعلها الخيار الأول للباحثين عن منازل تلبي
            احتياجاتهم بأسلوب عصري.
          </p>
        </div>

        <div className="space-y-6">
          <SectionTitle Title="المشاريع المتاحة" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {NewProjectsData.map((item) => (
              <ProjectCard
                key={item.id}
                developerId={developerId}
                project={item}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeveloperDetailsPage;
