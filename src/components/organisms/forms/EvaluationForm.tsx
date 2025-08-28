"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { examinationDescriptionList } from "@/constants/Membership";
import { cities } from "@/constants/cities";
import type { examinationDescriptionType } from "@/types/Membership";
import {
  PropertyCategory,
  PropertyTypeList,
  purposesOfEvaluation,
} from "@/constants/selects";
import { EvaluationFormSchema } from "@/schemas/EvaluationFormSchema";
import type { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { useEvaluationRequestMutation } from "@/store/services/Examination&Evaluation";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";

interface Props {
  setOpen: (open: boolean) => void;
}

const EvaluationForm = ({ setOpen }: Props) => {
  const [EvaluationRequest, { isLoading }] = useEvaluationRequestMutation();
  const form = useForm<z.infer<typeof EvaluationFormSchema>>({
    resolver: zodResolver(EvaluationFormSchema),
    defaultValues: {
      name: "",
      national_id: "",
      user_status: "",
      phone: "",
      email: "",
      real_estate_type: "",
      real_estate_category: "",
      city: "",
      district: "",
      location: "",
      examination_purpose: "",
      image_from_agancy: undefined,
      ownership_deed: undefined,
      agency_number: "",
      agency_date: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof EvaluationFormSchema>) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("national_id", values.national_id);
    formData.append("user_status", values.user_status);
    formData.append("real_estate_type", values.real_estate_type);
    formData.append("real_estate_category", values.real_estate_category);
    formData.append("city", values.city);
    formData.append("district", values.district);
    formData.append("location", values.location);
    formData.append("examination_purpose", values.examination_purpose);
    formData.append("agency_number", values.agency_number || "");
    formData.append("agency_date", values.agency_date || "");

    if (values.image_from_agancy instanceof File) {
      formData.append("image_from_agancy", values.image_from_agancy);
    }

    if (values.ownership_deed instanceof File) {
      formData.append("ownership_deed", values.ownership_deed);
    }

    console.log(formData);

    try {
      const res = await EvaluationRequest(formData).unwrap();
      showSuccessToast({ title: res?.data?.message || "تم طلب التقييم بنجاح" });
      setOpen(false);
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err?.data?.message || "حدث خطأ" });
    }
  }

  const examinationDescriptionType = form.watch(
    "user_status"
  ) as examinationDescriptionType;

  return (
    <Card className="px-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          طلب تقييم
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4 bg-secondary p-2 md:p-6 rounded-xl shadow-md">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="أسم طالب التقييم"
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
                name="user_status"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="صفة طالب التقييم"
                    placeholder="اختر صفة طالب التقييم"
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
                    label="نوع العقار المُراد التقييم"
                    placeholder="إختر نوع العقار المراد التقييم"
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
                    label="فئة العقار المراد التقييم"
                    placeholder="إختر فئة العقار المراد التقييم"
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
                    label="الغرض من التقييم"
                    placeholder="إختر الغرض من التقييم"
                    className="!h-11 border-border"
                    options={purposesOfEvaluation}
                  />
                )}
              />

              {examinationDescriptionType === "agent" && (
                <>
                  <FormField
                    control={form.control}
                    name="agency_number"
                    render={({ field }) => (
                      <CustomFormItem
                        field={field}
                        label="رقم الوكالة"
                        placeholder="أدخل رقم الوكالة"
                        type="number"
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agency_date"
                    render={({ field }) => (
                      <CustomFormItem
                        field={field}
                        label="تاريخ الوكالة"
                        placeholder="أدخل تاريخ الوكالة"
                        type="date"
                      />
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image_from_agancy"
                    render={({ field }) => (
                      <div>
                        <FormLabel className="mb-2">صورة من الوكالة</FormLabel>
                        <ImageUpload
                          value={field.value as File}
                          onChange={(file: File | null) => field.onChange(file)}
                        />
                      </div>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="ownership_deed"
                render={({ field }) => (
                  <div>
                    <FormLabel className="mb-2">صورة صك الملكية</FormLabel>
                    <ImageUpload
                      value={field.value as File}
                      onChange={(file: File | null) => field.onChange(file)}
                    />
                  </div>
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

export default EvaluationForm;
