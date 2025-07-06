import { z } from "zod";

export const CustomerServicesFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "الاسم طويل جدًا." }),

  phone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),

  message: z
    .string()
    .min(5, { message: "الرسالة يجب ان تحتوي علي 5 احرف علي الاقل" }),
});
