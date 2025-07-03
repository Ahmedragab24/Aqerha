"use client";

import { stepType } from "@/app/(pages)/owner-ad/page";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import { Form, FormField } from "@/components/ui/form";
import { AddAdCompanyFormSchema } from "@/schemas/AddAdCompanyFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  setStep: (value: stepType) => void;
}

const AddAdCompanyForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof AddAdCompanyFormSchema>>({
    resolver: zodResolver(AddAdCompanyFormSchema),
    defaultValues: {
      DeedRegisterNumber: "",
      DeedRegisterDate: "",
      commercialRegistrationNumber: "",
      idNumber: "",
      agencyNumber: "",
      LicenseNumber: "",
      birthDate: "",
      phone: "",
      whatsapp: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddAdCompanyFormSchema>) {
    console.log(values);
    setStep("stepTwo");
  }

  return (
    <Form {...form}>
      <div className="space-y-4 p-4 md:px-8 md:py-10 rounded-xl shadow-md border border-gray-300">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          dir="rtl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="DeedRegisterNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم الصك/السجل العيني"
                  placeholder="أدخل رقم الصك أو السجل العيني"
                  type="text"
                />
              )}
            />
            <FormField
              control={form.control}
              name="DeedRegisterDate"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="تاريخ الصك"
                  placeholder="أدخل تاريخ الصك"
                  type="date"
                />
              )}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="commercialRegistrationNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="الرقم الموحد للسجل التجاري"
                  placeholder="أدخل الرقم الموحد للسجل التجاري"
                  type="number"
                />
              )}
            />
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم هوية الوكيل"
                  placeholder="أدخل رقم هوية الوكيل"
                  type="number"
                />
              )}
            />
            <FormField
              control={form.control}
              name="agencyNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم الوكالة"
                  placeholder="أدخل رقم الوكالة"
                  type="number"
                />
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="LicenseNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم الترخيص"
                  placeholder="أدخل رقم الترخيص"
                  type="number"
                />
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="تاريخ ميلاد الوكيل"
                  placeholder="أدخل تاريخ ميلاد الوكيل"
                  type="date"
                />
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <CustomPhoneInput field={field} label="رقم الجوال" />
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <CustomPhoneInput field={field} label="رقم الواتساب" />
              )}
            />
          </div>

          <div className="md:w-[30%] mx-auto">
            <SubmitBtn title="التالي" />
          </div>
        </form>
      </div>
    </Form>
  );
};

export default AddAdCompanyForm;
