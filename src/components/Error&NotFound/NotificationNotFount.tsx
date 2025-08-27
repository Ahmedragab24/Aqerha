"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NotificationNotFount = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/Icons/carbon_notification.svg"
        alt="not found"
        width={180}
        height={180}
      />

      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          لا توجد إشعارات حتي الان
        </h1>
        <h4 className="text-lg text-gray-500">
          سنقوم بإعلامك عندما يكون هناك إشعار جديد
        </h4>

        <Button
          size="lg"
          className="md:!px-10 h-12"
          onClick={() => router.push("/")}
        >
          الانتقال إلى الصفحة الرئيسية
        </Button>
      </div>
    </div>
  );
};

export default NotificationNotFount;
