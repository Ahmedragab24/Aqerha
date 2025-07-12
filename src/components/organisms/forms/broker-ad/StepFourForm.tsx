"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { StepType } from "@/app/(pages)/broker-ad/page";
import { StepFourFormSchema } from "@/schemas/broker-ad";
import { Switch } from "@/components/ui/switch";
import { Percent } from "lucide-react";
import CustomToggleGroup from "@/components/molecules/btnsGroup/CustomToggleGroup";
import AgreeTermsCheckboxField from "@/components/molecules/checkboxs/AgreeTermsCheckboxField";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

interface Props {
  setStep: (value: StepType) => void;
}

const StepFourForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof StepFourFormSchema>>({
    resolver: zodResolver(StepFourFormSchema),
    defaultValues: {
      price: "",
      description: "",
      Capacity: false,
      capacityPercent: "",
      capacityType: "rate",
      AgreeTerms: [],
    },
  });

  function onSubmit(values: z.infer<typeof StepFourFormSchema>) {
    try {
      console.log(values);
      setStep("stepOne");
      showSuccessToast({ title: "تم إضافة الاعلان بنجاح" });
    } catch (error) {
      showFailedToast({ title: `${error}` });
    }
  }

  const isCapacity = form.watch("Capacity") as boolean;

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold">اكمل معلومات الاعلان</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="تحديد السعر"
                placeholder="الرجاء تحديد سعر العقار"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="وصف العقار"
                placeholder="يرجي إدخال تفاصيل حول العقار المطلوب"
                type="text"
                typeInput="textAria"
                className="h-32"
              />
            )}
          />
          <FormField
            control={form.control}
            name="Capacity"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>هل يوجد سعي ؟</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    dir="ltr"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {isCapacity && (
            <>
              <FormField
                control={form.control}
                name="capacityPercent"
                render={({ field }) => (
                  <div className="relative">
                    <CustomFormItem
                      field={{
                        ...field,
                        min: "0",
                        max: "100",
                      }}
                      placeholder="2.5"
                      type="number"
                      className="relative appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                    />
                    <Percent className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600" />
                  </div>
                )}
              />

              <FormField
                control={form.control}
                name="capacityType"
                render={({ field }) => (
                  <div className="w-full">
                    <CustomToggleGroup
                      Items={[
                        { label: "نسبة", value: "rate" },
                        { label: "ثابت", value: "static" },
                      ]}
                      value={field.value}
                      onValueChange={field.onChange}
                    />
                  </div>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="AgreeTerms"
            render={() => <AgreeTermsCheckboxField field={form.control} />}
          />

          <SubmitBtn title="نشر الإعلان" />
        </form>
      </div>
    </Form>
  );
};

export default StepFourForm;
