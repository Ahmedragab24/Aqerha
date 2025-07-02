"use client";

import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import { Form, FormField } from "@/components/ui/form";
import { AddAdPersonFormSchema } from "@/schemas/AddAdPersonFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddAdPersonForm = () => {
  const form = useForm<z.infer<typeof AddAdPersonFormSchema>>({
    resolver: zodResolver(AddAdPersonFormSchema),
    defaultValues: {
      DeedRegisterNumber: "",
      DeedRegisterDate: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddAdPersonFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="space-y-4 p-4 md:p-6 rounded-xl shadow-md">
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

          <div className="md:w-[30%] mx-auto">
            <SubmitBtn title="التالي" />
          </div>
        </form>
      </div>
    </Form>
  );
};

export default AddAdPersonForm;
