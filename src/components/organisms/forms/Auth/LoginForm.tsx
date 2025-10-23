"use client";

import { RegisterType } from "@/types/Register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import ProvidersBtns from "../../../molecules/btnsGroup/ProvidersBtns";
import { loginFormSchema } from "@/schemas/login";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import OrBadge from "../../../atoms/badges/OrBadge";
import {
  useSendOtpMutation,
  useUserLoginMutation,
} from "@/store/services/Auth";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";

interface RegisterFormProps {
  setType: (value: RegisterType) => void;
  setPhone: (value: string) => void;
}

const LoginForm = ({ setType, setPhone }: RegisterFormProps) => {
  const [login, { isLoading }] = useUserLoginMutation();
  const [SendCode] = useSendOtpMutation();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phone: {
        iso_code: "",
        number: "",
      },
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const data = new FormData();
    data.append("phone", values.phone.iso_code + values.phone.number);
    data.append("password", values.password);
    data.append("device_type", "web");

    try {
      await login(data).unwrap();

      try {
        await SendCode({
          phone: values.phone.iso_code + values.phone.number,
        }).unwrap();
        showSuccessToast({ title: "تم ارسال رمز التحقق" });
        setPhone(values.phone.iso_code + values.phone.number);
        setType("Otp");
      } catch {
        showFailedToast({ title: "حدث خطأ أثناء إرسال رمز التحقق" });
      }
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <CustomPhoneInput field={field} label="رقم الهاتف" />
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
          </div>

          <p
            className="mt-2 mb-4 text-sm text-primary font-light hover:underline cursor-pointer"
            onClick={() => setType("PhoneForForgetPassword")}
          >
            نسيت كلمة المرور؟
          </p>

          <SubmitBtn
            title="تسجيل الدخول"
            disabled={isLoading}
            loading={isLoading}
          />
        </form>

        <OrBadge />

        <ProvidersBtns />

        <div className="flex justify-center items-center gap-1 text-xs">
          <p className="text-foreground">ليس لديك حساب؟</p>
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => setType("register")}
          >
            قم بالتسجيل الآن
          </span>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
