"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { ChangePasswordFormSchema } from "@/schemas/ChangePasswordFormSchema";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

const ChangePasswordForm = () => {
  const form = useForm<z.infer<typeof ChangePasswordFormSchema>>({
    resolver: zodResolver(ChangePasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ChangePasswordFormSchema>) {
    try {
      console.log(values);

      // Here you would typically make an API call to change the password
      // await changePassword(values);

      // Show success toast after successful password change
      showSuccessToast({ title: "تم تغيير كلمة المرور بنجاح" });

      // Reset form after successful submission
      //   form.reset();
    } catch (error) {
      console.error("Error changing password:", error);
      showFailedToast({ title: `${error}` });
      // You could show an error toast here as well
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
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
          <SubmitBtn title="حفظ" />
        </form>
      </div>
    </Form>
  );
};

export default ChangePasswordForm;
