"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PropertiesNotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/Images/House searching-bro 1.png"
        alt="not found"
        width={400}
        height={400}
      />

      <div className="space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl">
          لم يتم العثور على ملكية بالمواصفات المطلوبة!
        </h1>
        <h4 className="text-lg text-gray-500">
          في الصفحة الرئيسية، هناك عقارات مشابهة في انتظارك
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
  );
};

export default PropertiesNotFound;
