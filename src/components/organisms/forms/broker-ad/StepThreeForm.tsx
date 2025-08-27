"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import { StepType } from "@/app/(pages)/broker-ad/page";
import { StepThreeFormSchema } from "@/schemas/broker-ad";
import ImageUpload from "../../../molecules/uploads/ImageUpload";
import MultiImageUpload from "../../../molecules/uploads/MulitImageUpload";

interface Props {
  setStep: (value: StepType) => void;
}

const StepThreeForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof StepThreeFormSchema>>({
    resolver: zodResolver(StepThreeFormSchema),
    defaultValues: {
      image: undefined,
      images: [],
    },
  });

  function onSubmit(values: z.infer<typeof StepThreeFormSchema>) {
    console.log(values);
    setStep("stepFour");
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-semibold">إرفاق صور للعقار</h2>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>صورة العقار</FormLabel>
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>صور إضافية</FormLabel>
                <MultiImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitBtn title="التالي" loading disabled />
        </form>
      </div>
    </Form>
  );
};

export default StepThreeForm;
