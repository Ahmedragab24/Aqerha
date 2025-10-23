import { z } from "zod";

export const ForgetPasswordSchema = z.object({
  phone: z.object({
    iso_code: z.string().min(1, { message: "اختار كود الدولة." }),
    number: z
      .string()
      .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
      .regex(/^[0-9]+$/, { message: "رقم الجوال غير صحيح." }),
  }),
  otp: z
    .string()
    .length(4, { message: "يجب أن يتكون الكود من 4 أرقام." })
    .regex(/^\d{4}$/, { message: "يجب أن يحتوي الكود على أرقام فقط." }),

  type: z.string().optional(),
});
