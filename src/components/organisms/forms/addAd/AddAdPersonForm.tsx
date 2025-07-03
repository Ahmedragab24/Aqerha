"use client";

import { stepType } from "@/app/(pages)/owner-ad/page";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import { Form, FormField } from "@/components/ui/form";
import { userTypeList } from "@/constants/forms/ad";
import { AddAdPersonFormSchema } from "@/schemas/AddAdPersonFormSchema";
import type { TypeUserType } from "@/types/ad";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

interface Props {
  setStep: (value: stepType) => void;
}

const AddAdPersonForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof AddAdPersonFormSchema>>({
    resolver: zodResolver(AddAdPersonFormSchema),
    defaultValues: {
      DeedRegisterNumber: "",
      DeedRegisterDate: "",
      idNumber: "",
      userType: "owner" as TypeUserType,
      birthDate: "",
      phone: "",
      whatsapp: "",
      agencyNumber: "",
      agencyHistory: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddAdPersonFormSchema>) {
    // Clean up the data before submission - remove agent fields if user is owner
    const cleanedValues = { ...values };
    if (values.userType === "owner") {
      delete cleanedValues.agencyNumber;
      delete cleanedValues.agencyHistory;
    }
    console.log(cleanedValues);

    setStep("stepTwo");
  }

  const UserType = form.watch("userType") as TypeUserType;

  // Reset agent fields when switching from agent to owner
  React.useEffect(() => {
    if (UserType === "owner") {
      form.setValue("agencyNumber", "");
      form.setValue("agencyHistory", "");
    }
  }, [UserType, form]);

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
              name="userType"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="صفة المستخدم"
                  placeholder="اختر صفة المستخدم"
                  options={userTypeList}
                />
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label={
                    UserType === "owner" ? "رقم هوية المالك" : "رقم هوية الوكيل"
                  }
                  placeholder={
                    UserType === "owner"
                      ? "أدخل رقم هوية المالك"
                      : "أدخل رقم هوية الوكيل"
                  }
                  type="number"
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

          {UserType === "agent" && (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="agencyNumber"
                  render={({ field }) => (
                    <CustomFormItem
                      field={field}
                      label="رقم الوكالة"
                      type="number"
                      placeholder="أدخل رقم الوكالة"
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="agencyHistory"
                  render={({ field }) => (
                    <CustomFormItem
                      field={field}
                      label="تاريخ الوكالة"
                      type="date"
                      placeholder="أدخل تاريخ الوكالة"
                    />
                  )}
                />
              </div>
            </>
          )}

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="تاريخ ميلاد المالك أو الوكيل"
                  placeholder="أدخل تاريخ ميلاد المالك أو الوكيل"
                  type="date"
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

export default AddAdPersonForm;
