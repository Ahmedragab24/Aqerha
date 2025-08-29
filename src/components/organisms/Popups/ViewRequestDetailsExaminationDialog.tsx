"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExaminationType } from "@/types/Requests";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Props {
  ExaminationRequest: ExaminationType;
}

const ViewRequestDetailsExaminationDialog = ({ ExaminationRequest }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          className="font-semibold text-sm sm:text-base p-2 sm:p-3 h-auto min-h-[44px]"
        >
          عرض الطلب
          <Image
            src="/Icons/Alt Arrow Left.svg"
            alt="arrow left"
            width={16}
            height={16}
            className="sm:w-5 sm:h-5 mr-1"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95%] sm:max-w-2xl lg:max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800 text-center">
            تفاصيل طلب الفحص
          </DialogTitle>
        </DialogHeader>

        {/* بيانات العقار */}
        <section className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-primary">
            معلومات العقار
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InfoCard label="اسم العقار" value={ExaminationRequest.name} />
            <InfoCard
              label="نوع العقار"
              value={ExaminationRequest.real_estate_type}
            />
            <InfoCard
              label="تصنيف العقار"
              value={ExaminationRequest.real_estate_category}
            />
            <InfoCard
              label="الغرض"
              value={ExaminationRequest.examination_purpose}
            />
            <InfoCard label="المدينة" value={ExaminationRequest.city} />
            <InfoCard label="الحي" value={ExaminationRequest.district} />
            <InfoCard label="الموقع" value={ExaminationRequest.location} />
          </div>
        </section>

        {/* بيانات المستخدم */}
        <section className="space-y-3 sm:space-y-4 mt-5 sm:mt-6">
          <h3 className="text-base sm:text-lg font-semibold text-primary">
            معلومات المستخدم
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InfoCard label="الاسم" value={ExaminationRequest.name} />
            <InfoCard
              label="الرقم الوطني"
              value={ExaminationRequest.national_id}
            />
            <InfoCard
              label="البريد الإلكتروني"
              value={ExaminationRequest.email}
            />
            <InfoCard label="رقم الهاتف" value={ExaminationRequest.phone} />
            <InfoCard label="الحالة" value={ExaminationRequest.user_status} />
          </div>
        </section>

        {/* الدفع والفحص */}
        <section className="space-y-3 sm:space-y-4 mt-5 sm:mt-6">
          <h3 className="text-base sm:text-lg font-semibold text-primary">
            معلومات الفحص والدفع
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InfoCard
              label="حالة الفحص"
              value={ExaminationRequest.examination_status}
            />
            <InfoCard
              label="طريقة الدفع"
              value={ExaminationRequest.payment_method}
            />
            <InfoCard
              label="حالة الدفع"
              value={ExaminationRequest.payment_status}
            />
            <InfoCard
              label="رقم الفحص الهندسي"
              value={ExaminationRequest.engineering_examination_id}
            />
          </div>
        </section>

        {/* المتابعة */}
        <section className="space-y-3 sm:space-y-4 mt-5 sm:mt-6">
          <h3 className="text-base sm:text-lg font-semibold text-primary">
            المتابعة
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <InfoCard
              label="تاريخ الإنشاء"
              value={ExaminationRequest.created_at}
            />
          </div>
        </section>

        <DialogFooter className="mt-6 sm:mt-8">
          <DialogClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              إغلاق
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewRequestDetailsExaminationDialog;

// 🔹 كومبوننت صغير لعرض البيانات
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoCard = ({ label, value }: { label: string; value: any }) => (
  <Card className="p-3 sm:p-4 shadow-sm border rounded-lg bg-gray-50">
    <p className="text-xs sm:text-sm text-gray-500 mb-1">{label}</p>
    <p className="text-sm sm:text-base font-medium text-gray-800 break-words">
      {value ?? "غير متوفر"}
    </p>
  </Card>
);
