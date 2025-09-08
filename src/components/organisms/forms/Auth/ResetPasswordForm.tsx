"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import { toast } from "sonner";
import { RegisterType } from "@/types/Register";
import { useResetPasswordMutation } from "@/store/services/Auth";
import { ResetPasswordFormSchema } from "@/schemas/ResetPasswordFormSchema";
import { ErrorType } from "@/types/errors";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";

interface Props {
  setType: (type: RegisterType) => void;
  phone: string;
}

const ResetPasswordForm = ({ phone, setType }: Props) => {
  const [ResetPassword, { isLoading }] = useResetPasswordMutation();
  const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ResetPasswordFormSchema>) {
    console.log(values);

    const data = new FormData();
    data.append("phone", phone);
    data.append("password", values.password);
    data.append("password_confirmation", values.password_confirmation);

    try {
      await ResetPassword(data).unwrap();

      toast.success("تم تغير كلمة السر");

      setType("login");
    } catch (error: unknown) {
      const err = error as ErrorType;
      const firstError =
        err?.data?.errors && Object.values(err.data.errors)[0]?.[0];

      toast.error(firstError || "حدث خطأ غير متوقع");
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-muted px-2 py-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label={"كلمة السر الجديدة"}
                placeholder={"ادخل كلمة السر الجديدة"}
                type="password"
              />
            )}
          />

          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label={"تأكيد كلمة السر الجديدة"}
                placeholder={"ادخل كلمة السر الجديدة"}
                type="password"
              />
            )}
          />

          <SubmitBtn title={"حفظ"} disabled={isLoading} loading={isLoading} />
        </form>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
