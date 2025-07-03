import { z } from "zod";

export const ChangePhoneFormSchema = z.object({
  changePhone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
});
