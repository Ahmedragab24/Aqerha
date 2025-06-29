"use client";

import LogoUpload from "@/components/molecules/uploads/UploadLogo";
import type { StepsType } from "../../Popups/RegisterDeveloperDialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const StepOneFormSchema = z.object({
  logo: z.any().optional(),
  description: z
    .string()
    .min(10, { message: "النبذة يجب أن تحتوي على 10 أحرف على الأقل." })
    .max(500, { message: "النبذة طويلة جدًا." }),
});

interface RegisterFormProps {
  setSteps: (value: StepsType) => void;
}

const StepTwoForm = ({ setSteps }: RegisterFormProps) => {
  const form = useForm<z.infer<typeof StepOneFormSchema>>({
    resolver: zodResolver(StepOneFormSchema),
    defaultValues: {
      logo: undefined,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof StepOneFormSchema>) {
    console.log(values);
    setSteps("step3");
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Logo Upload Field */}
          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <div className="flex flex-col items-center justify-center gap-2">
                <FormItem>
                  <FormLabel>أرفق الشعار الخاص بالمطور العقاري</FormLabel>
                  <FormControl>
                    <LogoUpload value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="نبذة عن المطور"
                placeholder="يرجي إدخال نبذة حول المطور العقاري"
                type="text"
                typeInput="textAria"
              />
            )}
          />

          <SubmitBtn title="التالي" />
        </form>
      </div>
    </Form>
  );
};

export default StepTwoForm;
