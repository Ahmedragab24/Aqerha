"use client";

import { RegisterType } from "@/types/Register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import { registerFormSchema } from "@/schemas/register";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import ProvidersBtns from "@/components/molecules/btnsGroup/ProvidersBtns";

interface RegisterFormProps {
  setType: (value: RegisterType) => void;
}

const RegisterForm = ({ setType }: RegisterFormProps) => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md max-h-[80vh] overflow-y-scroll">
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="أعِد إدخال كلمة المرور"
                placeholder="أدخل كلمة المرور"
                type="password"
              />
            )}
          />
          <SubmitBtn title="إنشاء حساب" />
        </form>

        <ProvidersBtns />

        <div className="flex justify-center items-center gap-1 text-xs">
          <p className="text-foreground">هل لديك حساب بالفعل؟</p>
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => setType("login")}
          >
            سجل الدخول الآن
          </span>
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
