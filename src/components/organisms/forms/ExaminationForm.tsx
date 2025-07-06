"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { ExaminationFormSchema } from "@/schemas/examination";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  type: "inspection" | "evaluation";
}

const ExaminationForm = ({ type }: Props) => {
  const form = useForm<z.infer<typeof ExaminationFormSchema>>({
    resolver: zodResolver(ExaminationFormSchema),
    defaultValues: {
      username: "",
      nationalIdentity: "",
      examinationDescription: "",
      phone: "",
      email: "",
      propertyType: "",
      propertyCategory: "",
      city: "",
      neighborhood: "",
      propertyLocation: "",
      purpose: "",
    },
  });

  function onSubmit(values: z.infer<typeof ExaminationFormSchema>) {
    console.log(values);
  }

  const textTypeName = type === "inspection" ? "الفحص" : "التقييم";
  const textTypeVerb = type === "inspection" ? "فحصه" : "تقييمه";

  return (
    <Card className="h-[70vh] overflow-hidden overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          {type === "inspection" ? "طلب فحص" : "طلب تقييم"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="الاسم"
                    placeholder="أدخل الاسم بالكامل"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="nationalIdentity"
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
                name="examinationDescription"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label={`صفة طالب ${textTypeName}`}
                    placeholder={`اختر صفة طالب ${textTypeName}`}
                    className="!h-11 border-border"
                    options={[
                      { label: "مهندس", value: "engineer" },
                      { label: "مالك العقار", value: "owner" },
                      { label: "وكيل عقاري", value: "agent" },
                      { label: "مقاول", value: "contractor" },
                    ]}
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
                name="propertyType"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label={`نوع العقار المُراد ${textTypeVerb}`}
                    placeholder={`إختر نوع العقار المراد ${textTypeVerb}`}
                    className="!h-11 border-border"
                    options={[
                      { label: "شقة سكنية", value: "apartment" },
                      { label: "فيلا", value: "villa" },
                      { label: "مكتب تجاري", value: "office" },
                      { label: "محل تجاري", value: "shop" },
                      { label: "مستودع", value: "warehouse" },
                    ]}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="propertyCategory"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label={`فئة العقار المراد ${textTypeVerb}`}
                    placeholder={`إختر فئة العقار المراد ${textTypeVerb}`}
                    className="!h-11 border-border"
                    options={[
                      { label: "جديد", value: "new" },
                      { label: "مستعمل", value: "used" },
                      { label: "تحت الإنشاء", value: "under_construction" },
                      { label: "يحتاج ترميم", value: "needs_renovation" },
                    ]}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="المدينة"
                    placeholder="أدخل المدينة"
                    type="text"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="neighborhood"
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
                name="propertyLocation"
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
                name="purpose"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label={`الغرض من ${textTypeName}`}
                    placeholder={`إختر الغرض من ${textTypeName}`}
                    className="!h-11 border-border"
                    options={[
                      { label: "شراء العقار", value: "purchase" },
                      { label: "بيع العقار", value: "sale" },
                      { label: "تأجير العقار", value: "rent" },
                      { label: "تقييم العقار", value: "evaluation" },
                      { label: "صيانة دورية", value: "maintenance" },
                    ]}
                  />
                )}
              />

              <SubmitBtn title="إرسال الطلب" />
            </form>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExaminationForm;
