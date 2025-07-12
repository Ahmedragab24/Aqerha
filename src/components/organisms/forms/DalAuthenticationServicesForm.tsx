"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import {
  DalAuthenticationServicesList,
  DalServicesType,
} from "@/constants/DalAuthenticationServices";
import { userTypeList } from "@/constants/forms/ad";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { cities } from "@/constants/cities";
import { DalAuthenticationServicesFormSchema } from "@/schemas/DalAuthenticationServicesFormSchema";
import { TypeUserType } from "@/types/ad";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";

interface Props {
  typeService: DalServicesType;
}

const DalAuthenticationServicesForm = ({ typeService }: Props) => {
  const form = useForm<z.infer<typeof DalAuthenticationServicesFormSchema>>({
    resolver: zodResolver(DalAuthenticationServicesFormSchema),
    defaultValues: {
      username: "",
      ServiceType: typeService,
      ServiceApplicantType: "",
      NationalIDNumber: "",
      phone: "",
      email: "",
      city: "",
      TheNeighborhood: "",
    },
    mode: "onChange",
  });

  function onSubmit(
    values: z.infer<typeof DalAuthenticationServicesFormSchema>
  ) {
    console.log(values);
  }

  const ServiceApplicantType = form.watch(
    "ServiceApplicantType"
  ) as TypeUserType;

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md h-[80vh] overflow-y-scroll">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="الإسم كاملاً"
                placeholder="الرجاء إدخال إسمك كاملاً"
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="ServiceType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="إختر الخدمة"
                placeholder="الرجاء اختيار الخدمة"
                options={DalAuthenticationServicesList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="ServiceApplicantType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="صفة طالب الخدمة"
                placeholder="الرجاء اختيار الصفة"
                options={userTypeList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="NationalIDNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم الهوية الوطنية"
                placeholder="الرجاء إدخال رقم الهوية الوطنية"
                type="number"
              />
            )}
          />
          {ServiceApplicantType === "agent" && (
            <>
              <FormField
                control={form.control}
                name="AgencyNumber"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="رقم الوكالة"
                    placeholder="الرجاء إدخال رقم الوكالة"
                    type="number"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="AgencyImage"
                render={({ field }) => (
                  <div>
                    <FormLabel className="mb-2">
                      الرجاء إدخال صورة الوكالة
                    </FormLabel>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomPhoneInput field={field} label="الرجاء إدخال رقم جوالك" />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="البريد الإلكتروني"
                placeholder="الرجاء إدخال البريد الإلكتروني"
                type="email"
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
                placeholder="اختر المدينة"
                options={cities}
              />
            )}
          />
          <FormField
            control={form.control}
            name="TheNeighborhood"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="الحي"
                placeholder="ادخل الحي"
                type="text"
              />
            )}
          />
          <SubmitBtn title="إرسال الطلب" />
        </form>
      </div>
    </Form>
  );
};

export default DalAuthenticationServicesForm;
