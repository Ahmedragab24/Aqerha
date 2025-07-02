import SectionTitle from "@/components/atoms/title/SectionTitle";
import GradientEvaluationCard from "@/components/molecules/cards/GradientEvaluationCard";
import InspectionElements from "@/components/molecules/textGroup/InspectionElements";
import RequestExaminationDialog from "@/components/organisms/Popups/RequestExaminationDialog";
import React from "react";

const PackagesInspectionElements = {
  InspectionElementsList1: [
    {
      id: 1,
      description:
        "فحص جميع العناصر الأساسية الإنشائية و المعمارية و الكهربائية و الميكانيكية.",
      active: true,
    },
    {
      id: 2,
      description:
        "بيان جميع الميزات الظاهرة علي العنصر و ذكر جودة المواد المستخدمة بالتقرير.",
      active: true,
    },
    {
      id: 3,
      description: "التحقق من أوراق الضمان المقدمة من المالك.",
      active: true,
    },
    {
      id: 4,
      description: "بيان جميع العيوب الظاهرة علي العنصر.",
      active: true,
    },
    {
      id: 5,
      description: "تقرير تفصيلي شامل بجميع وحدات المبني.",
      active: true,
    },
  ],
  InspectionElementsList2: [
    {
      id: 1,
      description:
        "فحص جميع العناصر الأساسية الإنشائية و المعمارية و الكهربائية و الميكانيكية.",
      active: true,
    },
    {
      id: 2,
      description:
        "بيان جميع الميزات الظاهرة علي العنصر و ذكر جودة المواد المستخدمة بالتقرير.",
      active: true,
    },
    {
      id: 3,
      description: "التحقق من أوراق الضمان المقدمة من المالك.",
      active: true,
    },
    {
      id: 4,
      description: "بيان جميع العيوب الظاهرة علي العنصر.",
      active: false,
    },
    {
      id: 5,
      description: "تقرير تفصيلي شامل بجميع وحدات المبني.",
      active: false,
    },
  ],
  InspectionElementsList3: [
    {
      id: 1,
      description:
        "تقديم خدمة استشارية هندسية فى معرفة أسباب المشاكل التي تطرأ علي المجالات ذات الصلة بالوحدات العقارية و إيجاد الحلول بالأنظمة الإنشائية و المعمارية والكهربائية و الميكانيكية.",
      active: true,
    },
  ],
};

const ExaminationAndEvaluationPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="text-center mb-10">
        <SectionTitle Title="الفحص الهندسي" />
      </div>

      <div className="space-y-20">
        <div className="space-y-6">
          <SectionTitle
            Title="الفحص الهندسي مع تقرير"
            className="!text-lg md:!text-2xl"
          />

          <GradientEvaluationCard
            title="هذه الباقة للمشتريين أو المستأجرين أو المالكين للشقق السكنية الجاهزة و الفلل و المباني التجارية"
            price="سعر الفحص 650"
            image="/Images/Frame 1171275641.png"
            gradientColor="Gradient_Linear_Red"
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="عناصر الفحص" className="!text-lg md:!text-2xl" />

          <InspectionElements
            InspectionElementsList={
              PackagesInspectionElements.InspectionElementsList1
            }
          />
          <RequestExaminationDialog />
        </div>

        <div className="space-y-6">
          <SectionTitle
            Title="الفحص الهندسي بدون تقرير"
            className="!text-lg md:!text-2xl"
          />

          <GradientEvaluationCard
            title="هذه الباقة للمشتريين أو المستأجرين أو المالكين للشقق السكنية الجاهزة و الفلل و المباني التجارية"
            price="سعر الفحص 550"
            image="/Images/Frame 1171275644.png"
            gradientColor="Gradient_Linear_Yellow"
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="عناصر الفحص" className="!text-lg md:!text-2xl" />

          <InspectionElements
            InspectionElementsList={
              PackagesInspectionElements.InspectionElementsList2
            }
          />
          <RequestExaminationDialog />
        </div>

        <div className="space-y-6">
          <SectionTitle
            Title="باقة الزيارة"
            className="!text-lg md:!text-2xl"
          />

          <GradientEvaluationCard
            title="خدمة استشارية هندسية تقدم زيارة من الفاحص و مناقشة العيب الظاهر بطلب من العميل و إعداد التقرير بالعيوب و إيجاد الحلول"
            price="سعر الفحص 300"
            image="/Images/Frame 1171275645.png"
            gradientColor="Gradient_Linear_Purple"
          />
        </div>

        <div className="space-y-6">
          <SectionTitle Title="عناصر الفحص" className="!text-lg md:!text-2xl" />

          <InspectionElements
            InspectionElementsList={
              PackagesInspectionElements.InspectionElementsList3
            }
          />
          <RequestExaminationDialog />
        </div>
      </div>
    </main>
  );
};

export default ExaminationAndEvaluationPage;
