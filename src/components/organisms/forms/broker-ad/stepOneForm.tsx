"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import { StepType } from "@/app/(pages)/broker-ad/page";
import { StepOneFormSchema } from "@/schemas/broker-ad";

interface Props {
  setStep: (value: StepType) => void;
}

const StepOneForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof StepOneFormSchema>>({
    resolver: zodResolver(StepOneFormSchema),
    defaultValues: {
      LicenseNumber: "",
      IdNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof StepOneFormSchema>) {
    console.log(values);
    setStep("stepTow");
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="LicenseNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم الترخيص"
                placeholder="أدخل رقم الترخيص"
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="IdNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم هوية الوسيط (شركة/ فرد)"
                placeholder="أدخل رقم هوية الوسيط (شركة/ فرد)"
                type="number"
              />
            )}
          />
          <SubmitBtn title="التالي" loading={false} disabled={false} />
        </form>
      </div>
    </Form>
  );
};

export default StepOneForm;
