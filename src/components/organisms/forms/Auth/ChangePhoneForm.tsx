"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "../../../ui/form";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import { showSuccessToast } from "../../../Successfully/DoneToast";
import { showFailedToast } from "../../../Error&NotFound/FailedToast";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import { ChangePhoneFormSchema } from "@/schemas/ChangePhoneFormSchema";
import { RegisterType } from "@/types/Register";
import { useChangePhoneMutation } from "@/store/services/Profile";
import { ErrorType } from "@/types/errors";

interface Props {
  setType: (value: RegisterType) => void;
  setPhone: (value: string) => void;
}

const ChangePhoneForm = ({ setPhone, setType }: Props) => {
  const [changePhone, { isLoading }] = useChangePhoneMutation();
  const form = useForm<z.infer<typeof ChangePhoneFormSchema>>({
    resolver: zodResolver(ChangePhoneFormSchema),
    defaultValues: {
      changePhone: "",
    },
  });

  async function onChangePhone(values: z.infer<typeof ChangePhoneFormSchema>) {
    try {
      const res = await changePhone(values.changePhone).unwrap();

      showSuccessToast({ title: `${res?.massage}` });
      setPhone(values.changePhone);
      setType("Otp");
      form.reset();
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: `${err?.data?.message}` });
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-primary">
          تغيير رقم الجوال
        </h1>
      </div>

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

            <SubmitBtn
              title="استمرار"
              loading={isLoading}
              disabled={isLoading}
              className="!h-12"
            />
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ChangePhoneForm;
