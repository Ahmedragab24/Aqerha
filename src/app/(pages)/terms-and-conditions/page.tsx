"use client";

import {
  useGetPrivacyPolicyQuery,
  useGetTermsAndConditionsQuery,
} from "@/store/services/CompanyInfo";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import Image from "next/image";
import React from "react";

// 🔹 دالة لتنسيق النصوص القادمة من الـ API
const formatText = (text: string) => {
  if (!text) return null;

  // تقسيم النص على أساس الأسطر
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  return lines.map((line, index) => {
    // إذا السطر يبدأ بـ "•" أو رقم => نعرضه كـ <li>
    if (line.trim().startsWith("•") || /^\d+[\.\-)]/.test(line.trim())) {
      return (
        <li
          key={index}
          className="list-disc ms-6 text-gray-700 leading-relaxed"
        >
          {line.replace(/^•|\d+[\.\-)]/, "").trim()}
        </li>
      );
    }

    // إذا السطر يحتوي على "المادة" أو "المقدمة" => نخليه عنوان فرعي
    if (line.includes("المادة") || line.includes("المقدمة")) {
      return (
        <h3 key={index} className="text-lg font-bold mt-6 mb-2 text-primary">
          {line}
        </h3>
      );
    }

    // الباقي فقرة عادية
    return (
      <p key={index} className="text-gray-600 leading-relaxed">
        {line}
      </p>
    );
  });
};

const TermsAndConditionsPage = () => {
  const { data: termsAndConditions } = useGetTermsAndConditionsQuery();
  const { data: privacyPolicy } = useGetPrivacyPolicyQuery();

  return (
    <main className="pt-28 mb-16">
      <div className="Container space-y-16">
        {/* العنوان الرئيسي */}
        <div className="flex items-center justify-center gap-4">
          <SectionTitle Title="الحصول على مساعدة" />
          <Image
            src="/Icons/awdwdaw.svg"
            alt="Terms And Conditions"
            width={35}
            height={35}
          />
        </div>

        {/* الشروط والأحكام */}
        <div className="space-y-4 overflow-hidden" id="termsAndConditions">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Policy.svg"
                alt="Policy"
                width={20}
                height={20}
              />
              <h2 className="text-xl md:text-2xl font-semibold">
                الشروط والأحكام
              </h2>
            </div>
            <p className="text-gray-500">
              الاتفاقيات و الشروط التي تحكم العلاقة بين عقار و المستخدمين
            </p>
          </div>
          <div className="border p-8 bg-secondary shadow-md rounded-sm space-y-3">
            {formatText(termsAndConditions?.data || "")}
          </div>
        </div>

        {/* سياسة الخصوصية */}
        <div className="space-y-4 overflow-hidden" id="privacyPolicy">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Policy.svg"
                alt="Policy"
                width={20}
                height={20}
              />
              <h2 className="text-xl md:text-2xl font-semibold">
                سياسة الخصوصية
              </h2>
            </div>
            <p className="text-gray-500">
              سياسة الخصوصية التي تحكم العلاقة بين عقار و المستخدمين
            </p>
          </div>
          <div className="border p-8 bg-secondary shadow-md rounded-sm space-y-3">
            {formatText(privacyPolicy?.data || "")}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
