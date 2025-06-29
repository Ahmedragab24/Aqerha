"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFountPage = () => {
  const router = useRouter();
  return (
    <main className="Container pt-28 mb-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src="/Icons/404 error with people holding the numbers-rafiki 1.svg"
          alt="not found"
          width={350}
          height={350}
        />

        <div className="space-y-6 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            الصفحة المطلوبة مفقودة!
          </h1>
          <h4 className="text-lg text-gray-500">
            العقارات تُشترى وتُباع وتُؤجر بسرعة، ابحث عن الخيار المطلوب من
            الصفحة الرئيسية.
          </h4>

          <Button
            size="lg"
            className="md:!px-10 h-12"
            onClick={() => router.push("/")}
          >
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFountPage;
