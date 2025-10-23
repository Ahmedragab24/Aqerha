"use client";

import { RegisterType } from "@/types/Register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import { useSendOtpMutation } from "@/store/services/Auth";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";
import { PhoneFormSchema } from "@/schemas/PhoneFormSchema";

interface RegisterFormProps {
  setType: (value: RegisterType) => void;
  setPhone: (value: string) => void;
}

const PhoneForForgetPassword = ({ setType, setPhone }: RegisterFormProps) => {
  const [SendOtp, { isLoading }] = useSendOtpMutation();
  const [SendCode] = useSendOtpMutation();

  const form = useForm<z.infer<typeof PhoneFormSchema>>({
    resolver: zodResolver(PhoneFormSchema),
    defaultValues: {
      phone: {
        iso_code: "",
        number: "",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof PhoneFormSchema>) {
    console.log(values);

    try {
      await SendOtp({
        phone: values.phone.iso_code + values.phone.number,
      }).unwrap();

      showSuccessToast({ title: "تم ارسال رمز التحقق" });
      setPhone(values.phone.iso_code + values.phone.number);
      await SendCode({
        phone: values.phone.iso_code + values.phone.number,
      }).unwrap();
      setType("ForgetPassword");
    } catch (error: unknown) {
      const err = error as ErrorType;
      const firstError =
        err?.data?.errors && Object.values(err.data.errors)[0]?.[0];

      showFailedToast({
        title: firstError || err?.data?.message,
      });
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary px-2 py-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomPhoneInput field={field} label="رقم الهاتف" />
            )}
          />

          <SubmitBtn
            title="تسجيل الدخول"
            disabled={isLoading}
            loading={isLoading}
          />
        </form>
      </div>
    </Form>
  );
};

export default PhoneForForgetPassword;
