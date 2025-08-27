"use client";

import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../ui/button";
import { Form, FormField, FormItem, FormMessage } from "../../../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { showSuccessToast } from "../../../Successfully/DoneToast";
import { showFailedToast } from "../../../Error&NotFound/FailedToast";
import type { RegisterType } from "@/types/Register";
import {
  useVerifyOtpMutation,
  useVerifyResetOtpMutation,
} from "@/store/services/Auth";
import { OtpType } from "@/types/Auth";
import { ErrorType } from "@/types/errors";

const OtpFormSchema = z.object({
  code: z.string().min(4, "الرمز مطلوب"),
});

interface Props {
  setType: (value: RegisterType) => void;
  phone: string;
}

export default function OtpForm({ setType, phone }: Props) {
  const [VerifyOtp] = useVerifyOtpMutation();
  const [VerifyResetOtp] = useVerifyResetOtpMutation();
  const [resendTimer, setResendTimer] = useState(90);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: { code: "" },
  });

  // Timer countdown effect
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Reset timer
  const resetTimer = useCallback(() => {
    setResendTimer(90); // Reset to initial 90 seconds
    setCanResend(false);
  }, []);

  // Handle resend code
  const handleResendCode = async () => {
    if (!canResend || isResending) return;
    setIsResending(true);

    try {
      await VerifyResetOtp({ phone } as OtpType).unwrap();
      showSuccessToast({ title: "تم إرسال الرمز مرة أخرى" });
      resetTimer();
      form.setValue("code", "", { shouldValidate: true });
    } catch (error) {
      console.error("Error resending code:", error);
      showFailedToast({ title: "فشل في إرسال الرمز" });
    } finally {
      setIsResending(false);
    }
  };

  // Handle code verification
  async function onSendCode(values: z.infer<typeof OtpFormSchema>) {
    if (isVerifying) return;
    setIsVerifying(true);

    const data: OtpType = {
      otp: +values.code,
      phone,
      type: "register",
    };

    try {
      await VerifyOtp(data).unwrap();
      showSuccessToast({ title: "تم تأكيد الرمز بنجاح" });
      setType("login");
    } catch (error) {
      const err = error as ErrorType;
      const firstError = err.data?.message || "حدث خطأ غير متوقع";
      showFailedToast({ title: firstError });
    } finally {
      setIsVerifying(false);
      form.setValue("code", "", { shouldValidate: true });
    }
  }

  // Auto-submit when code is complete
  const handleCodeChange = (value: string) => {
    form.setValue("code", value, { shouldValidate: true });
    if (value.length === 4) {
      setTimeout(() => {
        form.handleSubmit(onSendCode)();
      }, 400);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2">إرسال رمز التحقق</h2>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="text-muted-foreground text-sm">
          يرجى إدخال الرمز المُرسل إلى رقم هاتفك لتأكيد هويتك على الرقم
        </p>
        <span className="text-primary font-semibold">{phone}</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSendCode)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={4}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={field.value}
                    onChange={handleCodeChange}
                    disabled={isVerifying}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full h-11" disabled={isVerifying}>
            استمرار
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-sm text-muted-foreground">
        {canResend ? (
          <Button
            variant="link"
            className="text-primary underline"
            onClick={handleResendCode}
            disabled={isResending}
          >
            إعادة الإرسال مرة أخرى
          </Button>
        ) : (
          <span>
            لم تتلقَ رمز التأكيد؟ إعادة الإرسال بعد {formatTime(resendTimer)}
          </span>
        )}
      </div>
      <div className="mt-3 text-sm">
        <span>رقم الجوال غير صحيح؟ </span>
        <Button
          variant="link"
          className="text-primary underline cursor-pointer"
          onClick={() => setType("ChangPhone")}
          disabled={isVerifying}
        >
          تعديل رقم الجوال
        </Button>
      </div>
    </div>
  );
}
