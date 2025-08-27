"use client";

import { stepType } from "@/app/(pages)/add-advertisement/page";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import { Form, FormField } from "../../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddAdStepOneFormSchema } from "@/schemas/AddAdStepOneFormSchema";
import { TypeUserRoleType, TypeUserType } from "@/types/Auth";
import { useStoreAdRealEstateMutation } from "@/store/services/RealEstate";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";
import { TypeUserRealEstateType } from "@/types/Real-estates";

interface Props {
  setStep: (value: stepType) => void;
}

const AddAdMultipleAngelsForm = ({ setStep }: Props) => {
  const [StoreAd, { isLoading }] = useStoreAdRealEstateMutation();
  const form = useForm<z.infer<typeof AddAdStepOneFormSchema>>({
    resolver: zodResolver(AddAdStepOneFormSchema),
    defaultValues: {
      userType: "multiple_angels" as TypeUserType,
      user_role: "agent" as TypeUserRoleType,
      one_owner_id_number: "",
      agent_nation_id: "",
      phone: "",
      whatsapp: "",
      birth_date: "",
      instrument_number: "",
      instrument_date: "",
      agency_number: "",
      agency_date: "",
      licence_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AddAdStepOneFormSchema>) {
    try {
      const cleanedValues = {
        ...values,
        user_type: values.userType as TypeUserRealEstateType,
        user_role: values.user_role as TypeUserRoleType,
        userType: undefined,
      };
      delete cleanedValues.userType;

      const res = await StoreAd(cleanedValues).unwrap();
      showSuccessToast({ title: res.message });

      setStep("stepTwo");
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err.data.message || "حدث خطأ غير متوقع" });
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-4 p-4 md:px-8 md:py-10 rounded-xl shadow-md border border-gray-300">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          dir="rtl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="one_owner_id_number"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم هوية أحد المُلاك"
                  placeholder="أدخل رقم هوية أحد المُلاك"
                  type="number"
                />
              )}
            />
            <FormField
              control={form.control}
              name="agent_nation_id"
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
              name="birth_date"
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
                <CustomPhoneInput field={field} label="رقم جوال الوكيل" />
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

          <div className="grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="licence_number"
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
              name="instrument_number"
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
              name="instrument_date"
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

          <div className="grid md:grid-cols-2 gap-8">
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
          </div>

          <div className="md:w-[30%] mx-auto">
            <SubmitBtn
              title="التالي"
              loading={isLoading}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </Form>
  );
};

export default AddAdMultipleAngelsForm;
