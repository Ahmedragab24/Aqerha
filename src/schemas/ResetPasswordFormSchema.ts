import { z } from "zod";

export const ResetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "كلمة السر الجديدة مطلوبة ويجب أن تكون 8 أحرف على الأقل"),
    password_confirmation: z.string().min(8, "تأكيد كلمة السر الجديدة مطلوب"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "كلمتا السر غير متطابقتين",
    path: ["password_confirmation"], // حدد مكان الخطأ
  });
