"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Form, FormField } from "../../ui/form";
import CustomFormItem from "../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../atoms/buttons/SubmitBtn";
import CustomPhoneInput from "../../atoms/inputs/CustomPhoneInput";
import { ExaminationFormSchema } from "@/schemas/examination";
import CustomSelectField from "../../molecules/selects/CustomSelectField";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { examinationDescriptionList } from "@/constants/Membership";
import { cities } from "@/constants/cities";
import {
  inspectionServiceList,
  paymentMethodsList,
  PropertyCategory,
  PropertyTypeList,
  purposesOfExamination,
} from "@/constants/selects";
import { useExaminationRequestMutation } from "@/store/services/Examination&Evaluation";
import { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import {
  ExaminationRequestState,
  examinationRequestType,
} from "@/types/inspection-and-evaluation-requests";
import { TypePropertyType, TypeUsedRealEstateType } from "@/types/Real-estates";

interface Props {
  setOpen: (open: boolean) => void;
  ExaminationType: ExaminationRequestState;
}

const ExaminationForm = ({ setOpen, ExaminationType }: Props) => {
  const [examinationRequest, { isLoading }] = useExaminationRequestMutation();
  const form = useForm<z.infer<typeof ExaminationFormSchema>>({
    resolver: zodResolver(ExaminationFormSchema),
    defaultValues: {
      name: "",
      national_id: "",
      user_type: "",
      phone: "",
      email: "",
      real_estate_type: "",
      real_estate_category: "",
      city: "",
      district: "",
      location: "",
      examination_purpose: "",
      payment_method: "",
      inspection_service_type: ExaminationType || "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof ExaminationFormSchema>) {
    const data: examinationRequestType = {
      name: values.name,
      national_id: values.national_id,
      user_status: values.user_type,
      phone: values.phone,
      email: values.email,
      real_estate_type: values.real_estate_type as TypePropertyType,
      real_estate_category:
        values.real_estate_category as TypeUsedRealEstateType,
      city: values.city,
      district: values.district,
      location: values.location,
      examination_purpose:
        values.examination_purpose as ExaminationRequestState,
      payment_method: values.payment_method,
      payment_status: "pending",
      inspection_service_type:
        ExaminationType ||
        (values.inspection_service_type as ExaminationRequestState),
    };

    try {
      const res = await examinationRequest(data).unwrap();
      showSuccessToast({ title: res?.data?.message || "تم إرسال الطلب بنجاح" });
      setOpen(false);
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err?.data?.message || "حدث خطأ" });
    }
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          طلب فحص
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="inspection_service_type"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="نوع الخدمة"
                    placeholder="إختر نوع الخدمة"
                    className="!h-11 border-border"
                    options={inspectionServiceList}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="أسم طالب الفحص"
                    placeholder="أدخل الاسم بالكامل"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="national_id"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="رقم الهوية الوطنية"
                    placeholder="أدخل رقم الهوية الوطنية"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="user_type"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="صفة طالب الفحص"
                    placeholder="اختر صفة طالب الفحص"
                    className="!h-11 border-border"
                    options={examinationDescriptionList}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <CustomPhoneInput field={field} label="رقم الجوال" />
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="البريد الإلكتروني"
                    placeholder="أدخل بريدك الإلكتروني"
                    type="email"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="real_estate_type"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="نوع العقار المُراد فحصه"
                    placeholder="إختر نوع العقار المراد فحصه"
                    className="!h-11 border-border"
                    options={PropertyTypeList}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="real_estate_category"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="فئة العقار المراد فحصه"
                    placeholder="إختر فئة العقار المراد فحصه"
                    className="!h-11 border-border"
                    options={PropertyCategory}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="المدينة"
                    placeholder="أدخل المدينة"
                    options={cities}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="الحي"
                    placeholder="أدخل الحي"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="موقع العقار"
                    placeholder="أدخل موقع العقار"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="examination_purpose"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="الغرض من الفحص"
                    placeholder="إختر الغرض من الفحص"
                    className="!h-11 border-border"
                    options={purposesOfExamination}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="payment_method"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="طريقة الدفع"
                    placeholder="إختر طريقة الدفع"
                    className="!h-11 border-border"
                    options={paymentMethodsList}
                  />
                )}
              />

              <SubmitBtn
                title="إرسال الطلب"
                loading={isLoading}
                disabled={isLoading}
              />
            </form>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExaminationForm;
