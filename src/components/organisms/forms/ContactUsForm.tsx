"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";
import { ContactUsFormSchema } from "@/schemas/ContactUsFormSchema";
import { useContactUsMutation } from "@/store/services/CompanyInfo";
import { Form, FormField } from "@/components/ui/form";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";

const ContactUsForm = () => {
  const [ContactUs, { isLoading }] = useContactUsMutation();
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactUsFormSchema>) {
    console.log(values);

    const Data = new FormData();
    Data.append("name", values.name);
    Data.append("phone", values.phone);
    Data.append("message", values.message);

    try {
      await ContactUs(Data).unwrap();
      showSuccessToast({ title: "تم ارسال الرسالة بنجاح" });
      form.reset();
    } catch (error: unknown) {
      const err = error as ErrorType;
      console.log(err);
      const firstError = err.data.message || "حدث خطأ غير متوقع";
      showFailedToast({ title: firstError });
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
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

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <CustomPhoneInput field={field} label="رقم الهاتف" />
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="الرسالة"
                    placeholder="أدخل الرسالة"
                    type="text"
                    typeInput="textarea"
                  />
                )}
              />
            </div>

            <SubmitBtn title="إرسال" disabled={isLoading} loading={isLoading} />
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ContactUsForm;
