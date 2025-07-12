"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { CustomerServicesFormSchema } from "@/schemas/CustomerServicesFormSchema";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

const CustomerServicesForm = () => {
  const form = useForm<z.infer<typeof CustomerServicesFormSchema>>({
    resolver: zodResolver(CustomerServicesFormSchema),
    defaultValues: {
      username: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof CustomerServicesFormSchema>) {
    try {
      console.log(values);
      showSuccessToast({
        title: "تم إرسال الطلب و سيتم التواصل معكم فى أقرب وقت",
      });
    } catch (error) {
      showFailedToast({
        title: `${error}`,
      });
    }
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
                label="الاسم كاملاً"
                placeholder="أدخل الاسم بالكامل"
                type="text"
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
            name="message"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="أكتب رسالتك هنا"
                placeholder="ادخل رسالتك هنا"
                type="text"
                typeInput="textAria"
              />
            )}
          />
          <SubmitBtn title="إرسال" />
        </form>
      </div>
    </Form>
  );
};

export default CustomerServicesForm;
