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
import { useUserLoginMutation } from "@/store/services/Auth";
import { LoginType } from "@/types/Auth";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";
import { useAppDispatch } from "@/store/hooks";
import { setUserData } from "@/store/features/Auth/userDataSlice";
import { AUTH_CHANGE_EVENT, setAuthTokenClient } from "@/lib/auth/auth-client";
import { ProfileType } from "@/types/Profile";
import { useRouter } from "next/navigation";

interface RegisterFormProps {
  setType: (value: RegisterType) => void;
  setOpen: (value: boolean) => void;
}

const LoginForm = ({ setType, setOpen }: RegisterFormProps) => {
  const [login, { isLoading }] = useUserLoginMutation();
  const router = useRouter();
  // const [SendCode] = useSendOtpMutation();
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);

    const data: LoginType = {
      phone: values.phone,
      password: values.password,
      device_type: "web",
    };

    try {
      const res = await login(data).unwrap();

      showSuccessToast({ title: "تم ارسال رمز التحقق" });
      console.log(res.user);
      setAuthTokenClient(res.token);
      dispatch(setUserData(res.user as unknown as ProfileType));
      setOpen(false);
      // await SendCode({ phone: values.phone }).unwrap();
      // setType("Otp");

      if (res.user.membership_type !== "property_seeker") {
        router.push("/profile");
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      }
    } catch (error: unknown) {
      const err = error as ErrorType;
      console.log(err);
      const firstError = err.data.message || "حدث خطأ غير متوقع";
      showFailedToast({ title: firstError });
    } finally {
      window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
    }
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
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
            onClick={() => setType("ForgetPassword")}
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
