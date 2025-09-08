import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل." }),
  phone: z
    .string()
    .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." }),
  message: z
    .string()
    .min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل." }),
});
