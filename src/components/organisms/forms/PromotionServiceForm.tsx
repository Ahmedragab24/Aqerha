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
  FormMessage,
} from "@/components/ui/form";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import Riyal from "@/components/atoms/Icons/Riyal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PromotionServiceFormSchema } from "@/schemas/PromotionServiceFormSchema";
import { OptionType } from "@/types/selects";
import { StepType } from "../Popups/PromotionServiceDialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DiscriminationPeriodList: OptionType[] = [
  {
    label: "حتي إغلاق الإعلان",
    value: "Until-the-ad-closes",
  },
  {
    label: "تاريخ محدد",
    value: "specific date",
  },
];

interface PromotionServiceFormProps {
  setStep: (step: StepType) => void;
}

const PromotionServiceForm = ({ setStep }: PromotionServiceFormProps) => {
  const form = useForm<z.infer<typeof PromotionServiceFormSchema>>({
    resolver: zodResolver(PromotionServiceFormSchema),
    defaultValues: {
      price: "",
      DiscriminationPeriod: "Until-the-ad-closes",
    },
  });

  function onSubmit(values: z.infer<typeof PromotionServiceFormSchema>) {
    console.log(values);
    setStep("Payment");
  }
  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <Label>الميزانية اليومية</Label>
                <div className="relative w-full">
                  <Input
                    {...field}
                    type="number"
                    placeholder="يُرجى الإدخال"
                    className="h-12 pl-12 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                    required
                    min={0}
                  />

                  <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full">
                    <Riyal className="text-primary !w-5 !h-5" />
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="DiscriminationPeriod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base">مدة التمييز:</FormLabel>
                <FormControl>
                  <RadioGroup
                  dir="rtl"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {DiscriminationPeriodList.map((item) => (
                      <FormItem
                        key={item.value}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={item.value} />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ul className="list-disc flex flex-col gap-4 text-sm">
            <li>الحد الأدني للميزانية اليومية هو 30 ريال</li>
            <li>نوصي أن لا تقل مدة التمييز عن 3 أيام </li>
            <li>نوصي أن لا تقل مدة التمييز عن 3 أيام </li>
          </ul>

          <SubmitBtn title="ابدأ الخدمة" />
        </form>
      </div>
    </Form>
  );
};

export default PromotionServiceForm;
