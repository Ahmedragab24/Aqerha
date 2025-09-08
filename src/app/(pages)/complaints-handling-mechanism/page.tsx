"use client";

import { useGetComplaintsHandlingMechanismQuery } from "@/store/services/CompanyInfo";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import Image from "next/image";
import React from "react";

const formatText = (text: string) => {
  if (!text) return null;

  const lines = text.split("\n").filter((line) => line.trim() !== "");

  return lines.map((line, index) => {
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

    if (line.includes("المادة") || line.includes("المقدمة")) {
      return (
        <h3 key={index} className="text-lg font-bold mt-6 mb-2 text-primary">
          {line}
        </h3>
      );
    }

    return (
      <p key={index} className="text-gray-600 leading-relaxed">
        {line}
      </p>
    );
  });
};

const ComplaintsHandlingMechanismPage = () => {
  const { data: termsAndConditions } = useGetComplaintsHandlingMechanismQuery();

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
                سياسة معالجة الشكاوي
              </h2>
            </div>
          </div>
          <div className="border p-8 bg-secondary shadow-md rounded-sm space-y-3">
            {formatText(termsAndConditions?.data || "")}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComplaintsHandlingMechanismPage;
