"use client";

import LogoUpload from "../../../molecules/uploads/UploadLogo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepsType } from "@/app/(pages)/register-developer/page";

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

const StepOneForm = ({ setSteps }: RegisterFormProps) => {
  const form = useForm<z.infer<typeof StepOneFormSchema>>({
    resolver: zodResolver(StepOneFormSchema),
    defaultValues: {
      logo: undefined,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof StepOneFormSchema>) {
    console.log(values);
    setSteps("step2");
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
                    <LogoUpload image={field.value as string | undefined} />
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
                typeInput="textarea"
                className="h-32"
              />
            )}
          />

          <SubmitBtn title="التالي" loading disabled />
        </form>
      </div>
    </Form>
  );
};

export default StepOneForm;
