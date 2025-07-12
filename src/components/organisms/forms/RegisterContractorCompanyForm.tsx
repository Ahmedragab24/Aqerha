"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { loginFormSchema } from "@/schemas/login";

const RegisterContractorCompanyForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
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
            name="email"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="عنوان البريد الالكتروني"
                placeholder="ahmed.adel@gmail.com"
                type="email"
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="كلمة المرور"
                placeholder="أدخل كلمة المرور"
                type="password"
              />
            )}
          />
          <SubmitBtn title="إنشاء حساب" />
        </form>
      </div>
    </Form>
  );
};

export default RegisterContractorCompanyForm;
