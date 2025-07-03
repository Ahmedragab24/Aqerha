import { z } from "zod";

export const AddAdMultipleAngelsFormSchema = z.object({
  DeedRegisterNumber: z
    .string()
    .min(1, { message: "رقم الصك/السجل العيني مطلوب" }),
  DeedRegisterDate: z
    .string()
    .min(1, { message: "تاريخ الصك/السجل العيني مطلوب" }),
  idNumberOwner: z
    .string()
    .min(1, { message: "رقم الهوية مطلوب" })
    .refine((val) => !val || /^1\d{9}$/.test(val), {
      message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1",
    }),
  idNumberAgent: z
    .string()
    .min(1, { message: "رقم الهوية مطلوب" })
    .refine((val) => !val || /^1\d{9}$/.test(val), {
      message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1",
    }),
  birthDate: z.string().min(1, { message: "تاريخ الميلاد مطلوب" }),
  phone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يتكون من 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
  whatsapp: z
    .string()
    .min(10, { message: "رقم الواتساب يجب أن يتكون من 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
  // Make these fields optional in the base schema
  agencyNumber: z.string().min(1, { message: "رقم الوكالة مطلوب" }),
});
