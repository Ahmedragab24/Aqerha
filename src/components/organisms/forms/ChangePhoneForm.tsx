"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { ChangePhoneFormSchema } from "@/schemas/ChangePhoneFormSchema";
import { useState } from "react";

import SendCodeForm from "./SendCodeForm";

export type StepType = "stepOne" | "stepTwo";

const ChangePhoneForm = () => {
  const [step, setStep] = useState<StepType>("stepOne");
  const form = useForm<z.infer<typeof ChangePhoneFormSchema>>({
    resolver: zodResolver(ChangePhoneFormSchema),
    defaultValues: {
      changePhone: "",
    },
  });

  async function onChangePhone(values: z.infer<typeof ChangePhoneFormSchema>) {
    try {
      console.log(values);

      // Here you would typically make an API call to change the password
      // await changePassword(values);

      // Show success toast after successful password change
      showSuccessToast({ title: "تم ارسال الكود  إلي الواتساب" });
      setStep("stepTwo");

      // Reset form after successful submission
      //   form.reset();
    } catch (error) {
      console.error("Error changing password:", error);
      showFailedToast({ title: `${error}` });
      // You could show an error toast here as well
    }
  }

  return (
    <>
      {step === "stepOne" ? (
        <Form {...form}>
          <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
            <form
              onSubmit={form.handleSubmit(onChangePhone)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="changePhone"
                render={({ field }) => (
                  <CustomPhoneInput field={field} label="رقم الجوال الجديد" />
                )}
              />

              <SubmitBtn title="استمرار" />
            </form>
          </div>
        </Form>
      ) : (
        <SendCodeForm setStep={setStep} />
      )}
    </>
  );
};

export default ChangePhoneForm;
