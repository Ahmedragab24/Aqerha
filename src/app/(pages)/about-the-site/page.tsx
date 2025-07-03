import SectionTitle from "@/components/atoms/title/SectionTitle";
import React from "react";

const AboutList = [
  {
    id: 1,
    title: "عقِّرها:",
    description:
      "موقع عقارات هو منصة رقمية شاملة تتيح للمستخدمين استكشاف، شراء، بيع، واستئجار العقارات بسهولة وسرعة. يهدف الموقع إلى تبسيط عملية البحث عن العقار المثالي من خلال واجهة مستخدم مريحة وأدوات ذكية.",
  },
  {
    id: 2,
    title: "مميزات التطبيق لمقدم الطلب:",
    description:
      "موقع عقارات هو منصة رقمية شاملة تتيح للمستخدمين استكشاف، شراء، بيع، واستئجار العقارات بسهولة وسرعة. يهدف الموقع إلى تبسيط عملية البحث عن العقار المثالي من خلال واجهة مستخدم مريحة وأدوات ذكية. ",
  },
  {
    id: 3,
    title: "مميزات التطبيق للعقاريين:",
    description:
      "موقع عقارات هو منصة رقمية شاملة تتيح للمستخدمين استكشاف، شراء، بيع، واستئجار العقارات بسهولة وسرعة. يهدف الموقع إلى تبسيط عملية البحث عن العقار المثالي من خلال واجهة مستخدم مريحة وأدوات ذكية. ",
  },
];

const AboutTheSitePage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="عن موقع عقِّرها" className="text-center" />

        <div className="flex flex-col gap-8 bg-secondary p-6 md:p-10 rounded-md shadow-md border">
          {AboutList.map((item) => (
            <div key={item.id} className="space-y-2">
              <h2 className="text-lg md:text-2xl font-medium text-primary-dark">
                {item.title}
              </h2>
              <p className="text-sm md:text-lg font-normal text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutTheSitePage;
