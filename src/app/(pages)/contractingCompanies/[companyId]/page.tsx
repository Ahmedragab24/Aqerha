import SectionTitle from "@/components/atoms/title/SectionTitle";
import ActionsCardsForCompanyPage from "@/components/molecules/cards/ActionsCardsForCompanyPage";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import { NewProjectsData } from "@/constants/cards/Projects";
import Image from "next/image";
import React from "react";

const CompanyDetailsPage = async ({
  params,
}: {
  params: Promise<{ companyId: string }>;
}) => {
  const { companyId } = await params;

  console.log(companyId);

  return (
    <main className="mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src="/Images/fb26c9dd2ccf7b3d03cad1fd6f64de34472c80e3.png"
          alt="PropertiesForRent"
          fill
          priority
          loading="eager"
          className="object-cover brightness-[70%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <h1 className="text-xl md:text-5xl font-medium md:font-semibold drop-shadow-2xl-sm text-center">
            بناة المستقبل للمقاولات
          </h1>
        </div>
      </div>

      <div className="Container mt-16 space-y-20">
        <div className="space-y-6">
          <SectionTitle Title="تعرف على بناة المستقبل" />

          <p className="text-lg text-gray-600 max-full leading-relaxed">
            تعتبر شركة بناة المستقبل للمقاولات رائدة في مجال البناء والتطوير
            العقاري، حيث تقدم مجموعة شاملة من الخدمات التي تلبي احتياجات
            عملائها. تأسست الشركة على مبادئ الجودة والابتكار، وتهدف إلى تحقيق
            أعلى معايير البناء من خلال استخدام أحدث التقنيات والمواد. تتميز
            الشركة بفريق عمل محترف ومؤهل، يسعى دائمًا لتقديم أفضل الحلول
            الهندسية والتصميمات المعمارية. كما تلتزم بناة المستقبل بالمواعيد
            المحددة والتسليم في الوقت المناسب، مما يجعلها الخيار المثالي
            للمشاريع السكنية والتجارية. تسعى الشركة إلى تعزيز شراكاتها مع
            العملاء والمستثمرين، وتوفير بيئة عمل مثالية تضمن النجاح والاستدامة.
            مع رؤية واضحة نحو المستقبل، تواصل بناة المستقبل للمقاولات تحقيق
            إنجازات جديدة في عالم البناء والتشييد.
          </p>
        </div>

        <div className="space-y-6">
          <SectionTitle Title="الخدمات المقدمة" />

          <ActionsCardsForCompanyPage />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="المشاريع المتاحة" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {NewProjectsData.map((item) => (
              <ProjectCard
                key={item.id}
                developerId={companyId}
                project={item}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDetailsPage;
