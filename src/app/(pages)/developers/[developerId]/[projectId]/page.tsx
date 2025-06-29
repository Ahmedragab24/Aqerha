import SeeMore from "@/components/atoms/buttons/SeeMore";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import ActionsCardsForProjectPage from "@/components/molecules/cards/ActionsCardsForProjectPage";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";
import { NewProjectsData } from "@/constants/cards/Projects";
import { RealEstesData } from "@/constants/cards/RealEstate";
import Image from "next/image";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ developerId: string; projectId: string }>;
}) => {
  const { developerId, projectId } = await params;

  console.log(projectId);

  return (
    <main className="pt-16 mb-16">
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm lg:leading-20">
            بالم هيلز جدة فى جدة، الرياض من مساكن للتطوير العقاري
          </h1>
        </div>
      </div>
      <div className="Container mt-10 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title="التفاصيل" />

          <ActionsCardsForProjectPage />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="الوحدات المتاحة" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {RealEstesData.map((item) => (
              <RealEstateCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between">
            <SectionTitle Title="مشاريع أخرى من مساكن للتطوير العقاري" />
            <SeeMore path="/developers" />
          </div>

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

export default ProjectDetailsPage;
