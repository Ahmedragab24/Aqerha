"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import { ChangePasswordFormSchema } from "@/schemas/ChangePasswordFormSchema";
import { showSuccessToast } from "../../../Successfully/DoneToast";
import { showFailedToast } from "../../../Error&NotFound/FailedToast";
import { useChangePasswordMutation } from "@/store/services/Profile";
import { ChangePasswordType } from "@/types/Profile";
import { ErrorType } from "@/types/errors";

const ChangePasswordForm = () => {
  const [ChangePassword, { isLoading }] = useChangePasswordMutation();
  const form = useForm<z.infer<typeof ChangePasswordFormSchema>>({
    resolver: zodResolver(ChangePasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ChangePasswordFormSchema>) {
    const data: ChangePasswordType = {
      old_password: values.oldPassword,
      new_password: values.newPassword,
      new_password_confirmation: values.confirmPassword,
    };
    try {
      await ChangePassword(data).unwrap();
      showSuccessToast({ title: "تم تغيير كلمة المرور بنجاح" });
      form.reset();
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({
        title: `${err?.data?.massage}`,
      });
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-primary">
          تغيير كلمة المرور
        </h1>
      </div>
      <Form {...form}>
        <div className="space-y-4 max-w-2xl mx-auto bg-secondary p-4 md:p-6 rounded-xl shadow-md">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="كلمة المرور الحالية"
                  placeholder="أدخل كلمة المرور"
                  type="password"
                />
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="كلمة المرور الجديدة"
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
                  label="تأكيد كلمة المرور الجديدة"
                  placeholder="أدخل كلمة المرور"
                  type="password"
                />
              )}
            />
            <SubmitBtn
              title="حفظ"
              disabled={isLoading}
              loading={isLoading}
              className="!h-12"
            />
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
