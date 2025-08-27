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
import { EvaluationType } from "@/types/Requests";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Props {
  EvaluationRequest: EvaluationType;
}

const ViewRequestDetailsDialog = ({ EvaluationRequest }: Props) => {
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
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800 text-center">
            تفاصيل الطلب
          </DialogTitle>
        </DialogHeader>

        {/* بيانات العقار */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">معلومات العقار</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard
              label="نوع العقار"
              value={EvaluationRequest.real_estate_type}
            />
            <InfoCard
              label="تصنيف العقار"
              value={EvaluationRequest.real_estate_category}
            />
            <InfoCard
              label="الغرض"
              value={EvaluationRequest.examination_purpose}
            />
            <InfoCard label="المدينة" value={EvaluationRequest.city} />
            <InfoCard label="الحي" value={EvaluationRequest.district} />
            <InfoCard label="الموقع" value={EvaluationRequest.location} />
          </div>
        </section>

        {/* بيانات التوكيل */}
        <section className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-primary">
            مستندات الملكية
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard
              label="رقم الوكالة"
              value={EvaluationRequest.agency_number}
            />
            <InfoCard
              label="تاريخ الوكالة"
              value={EvaluationRequest.agency_date}
            />
            <InfoCard
              label="صك الملكية"
              value={EvaluationRequest.ownership_deed}
            />
          </div>
        </section>

        {/* بيانات المستخدم */}
        <section className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-primary">
            معلومات المستخدم
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard label="الاسم" value={EvaluationRequest.user?.name} />
            <InfoCard label="البريد" value={EvaluationRequest.user?.email} />
            <InfoCard
              label="رقم الجوال"
              value={EvaluationRequest.user?.phone}
            />
            <InfoCard
              label="نوع العضوية"
              value={EvaluationRequest.user?.membership_type}
            />
            <InfoCard label="المدينة" value={EvaluationRequest.user?.city} />
            <InfoCard
              label="الرقم الوطني"
              value={EvaluationRequest.user?.identity_id}
            />
          </div>
        </section>

        {/* التواريخ */}
        <section className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-primary">المتابعة</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard
              label="تاريخ الإنشاء"
              value={EvaluationRequest.created_at}
            />
            <InfoCard
              label="تاريخ التحديث"
              value={EvaluationRequest.updated_at}
            />
            <InfoCard
              label="حالة التقييم"
              value={EvaluationRequest.evaluation_status}
            />
          </div>
        </section>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button variant="outline">إغلاق</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewRequestDetailsDialog;

// 🔹 كومبوننت صغير للعرض بشكل موحد
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoCard = ({ label, value }: { label: string; value: any }) => (
  <Card className="p-4 shadow-sm border rounded-lg bg-gray-50">
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <p className="text-sm font-medium text-gray-800 break-words">
      {value ?? "غير متوفر"}
    </p>
  </Card>
);
