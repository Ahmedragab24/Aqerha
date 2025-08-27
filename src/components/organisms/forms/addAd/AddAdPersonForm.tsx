"use client";

import { stepType } from "@/app/(pages)/add-advertisement/page";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import CustomSelectField from "../../../molecules/selects/CustomSelectField";
import { Form, FormField } from "../../../ui/form";
import { AddAdStepOneFormSchema } from "@/schemas/AddAdStepOneFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { TypeUserRoleType, TypeUserType } from "@/types/Auth";
import { userRoleList } from "@/constants/selects";
import { useStoreAdRealEstateMutation } from "@/store/services/RealEstate";
import { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { TypeUserRealEstateType } from "@/types/Real-estates";

interface Props {
  setStep: (value: stepType) => void;
}

const AddAdPersonForm = ({ setStep }: Props) => {
  const [StoreAd, { isLoading }] = useStoreAdRealEstateMutation();
  const form = useForm<z.infer<typeof AddAdStepOneFormSchema>>({
    resolver: zodResolver(AddAdStepOneFormSchema),
    defaultValues: {
      userType: "individual" as TypeUserType,
      user_role: "" as TypeUserRoleType,
      birth_date: "",
      phone: "",
      record_number: "",
      unified_commercial_registration_number: "",
      record_date: "",
      whatsapp: "",
      agency_number: "",
      agency_date: "",
      licence_number: "",
      instrument_number: "",
      instrument_date: "",
      id_number: "",
      owner_nation_id: "",
      agent_nation_id: "",
      one_owner_id_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AddAdStepOneFormSchema>) {
    const cleanedValues = {
      ...values,
      user_type: values.userType as TypeUserRealEstateType,
      user_role: values.user_role as TypeUserRoleType,
      userType: undefined,
    };
    delete cleanedValues.userType;

    try {
      const res = await StoreAd(cleanedValues).unwrap();
      showSuccessToast({ title: res.message });

      setStep("stepTwo");
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err.data.message || "حدث خطأ غير متوقع" });
    }
  }

  const user_role = form.watch("user_role") as TypeUserRoleType;

  // Reset agent fields when switching from agent to owner
  React.useEffect(() => {
    if (user_role === "owner") {
      form.setValue("agency_number", "");
      form.setValue("agency_date", "");
    }
  }, [user_role, form]);

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
              name="user_role"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="صفة المستخدم"
                  placeholder="اختر صفة المستخدم"
                  options={userRoleList}
                />
              )}
            />
            <FormField
              control={form.control}
              name="id_number"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label={
                    user_role === "owner"
                      ? "رقم هوية المالك"
                      : "رقم هوية الوكيل"
                  }
                  placeholder={
                    user_role === "owner"
                      ? "أدخل رقم هوية المالك"
                      : "أدخل رقم هوية الوكيل"
                  }
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
                  label={`تاريخ ميلاد ${
                    user_role === "owner" ? "المالك" : "الوكيل"
                  }`}
                  placeholder={`أدخل تاريخ ميلاد ${
                    user_role === "owner" ? "المالك" : "الوكيل"
                  }`}
                  type="date"
                />
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
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

          <div className="grid md:grid-cols-2 gap-8">
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

          {user_role === "agent" && (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="agency_number"
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
                  name="agency_date"
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

export default AddAdPersonForm;
