import { z } from "zod";

export const PhoneFormSchema = z.object({
  phone: z
    .string()
    .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
});
