"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../ui/form";
import CustomFormItem from "../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../atoms/buttons/SubmitBtn";
import { RegisterEngineeringOfficeFormSchema } from "@/schemas/RegisterEngineeringOfficeFormSchema";

const RegisterEngineeringOfficeForm = () => {
  const form = useForm<z.infer<typeof RegisterEngineeringOfficeFormSchema>>({
    resolver: zodResolver(RegisterEngineeringOfficeFormSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(
    values: z.infer<typeof RegisterEngineeringOfficeFormSchema>
  ) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="الاسم"
                placeholder="أدخل الاسم بالكامل"
                type="text"
              />
            )}
          />

          <SubmitBtn title="إنشاء حساب" loading disabled />
        </form>
      </div>
    </Form>
  );
};

export default RegisterEngineeringOfficeForm;
