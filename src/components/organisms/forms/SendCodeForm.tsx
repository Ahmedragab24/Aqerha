"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useState, useEffect, useCallback } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { SendCodeFormSchema } from "@/schemas/SendCodeFormSchema";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import type { StepType } from "./ChangePhoneForm";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Clock, RefreshCw } from "lucide-react";

interface Props {
  setStep?: (value: StepType) => void;
  phoneNumber?: string; // Add phone number prop for display
}

const SendCodeForm = ({ setStep, phoneNumber }: Props) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const form = useForm<z.infer<typeof SendCodeFormSchema>>({
    resolver: zodResolver(SendCodeFormSchema),
    defaultValues: {
      sendCode: "",
    },
  });

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Reset timer
  const resetTimer = useCallback(() => {
    setTimeLeft(60);
    setCanResend(false);
  }, []);

  // Handle resend code
  const handleResendCode = async () => {
    if (!canResend || isResending) return;

    setIsResending(true);
    try {
      // API call to resend verification code
      // await resendVerificationCode(phoneNumber);

      showSuccessToast({ title: "تم إرسال الرمز مرة أخرى" });
      resetTimer();
      form.setValue("sendCode", ""); // Clear the input
    } catch (error) {
      console.error("Error resending code:", error);
      showFailedToast({ title: "فشل في إرسال الرمز" });
    } finally {
      setIsResending(false);
    }
  };

  // Handle code verification
  async function onSendCode(values: z.infer<typeof SendCodeFormSchema>) {
    if (isVerifying) return;

    setIsVerifying(true);
    try {
      console.log(values);

      // API call to verify the code
      // await verifyCode(values.sendCode, phoneNumber);

      showSuccessToast({ title: "تم تأكيد الرمز بنجاح" });
      showSuccessToast({ title: "تم تغيير رقم الجوال" });
      setStep?.("stepOne");
    } catch (error) {
      console.error("Error verifying code:", error);
      showFailedToast({ title: "رمز التحقق غير صحيح" });
      form.setValue("sendCode", ""); // Clear invalid code
    } finally {
      setIsVerifying(false);
    }
  }

  // Auto-submit when code is complete
  const handleCodeChange = (value: string) => {
    form.setValue("sendCode", value);
    if (value.length === 4) {
      // Auto-submit after a short delay
      setTimeout(() => {
        form.handleSubmit(onSendCode)();
      }, 500);
    }
  };

  return (
    <Form {...form}>
      <div className="space-y-6 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">تأكيد رقم الجوال</h3>
          <p className="text-sm text-muted-foreground">
            تم إرسال رمز التحقق إلى {phoneNumber || "رقم الجوال"}
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSendCode)} className="space-y-6">
          <FormField
            control={form.control}
            name="sendCode"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-center block">
                  أدخل رمز التحقق المكون من 4 أرقام
                </FormLabel>
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

          {/* Timer and Resend Section */}
          <div className="text-center space-y-3">
            {!canResend ? (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>يمكنك إعادة الإرسال خلال {formatTime(timeLeft)}</span>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleResendCode}
                disabled={isResending}
                className="gap-2 bg-transparent"
              >
                {isResending ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                إعادة إرسال الرمز
              </Button>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:max-w-sm mx-auto">
            <SubmitBtn
              title={isVerifying ? "جاري التحقق..." : "تأكيد"}
              disabled={isVerifying || form.watch("sendCode").length !== 4}
            />
          </div>
        </form>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            لم تستلم الرمز؟ تأكد من رقم الجوال أو انتظر انتهاء المؤقت لإعادة
            الإرسال
          </p>
        </div>
      </div>
    </Form>
  );
};

export default SendCodeForm;
