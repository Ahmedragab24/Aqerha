import { z } from "zod";

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "الاسم طويل جدًا." }),

  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح." }),

  password: z
    .string()
    .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل." })
    .regex(/[a-z]/, { message: "يجب أن تحتوي على حرف صغير على الأقل." })
    .regex(/[A-Z]/, { message: "يجب أن تحتوي على حرف كبير على الأقل." })
    .regex(/[0-9]/, { message: "يجب أن تحتوي على رقم واحد على الأقل." })
    .regex(/[\W_]/, {
      message: "يجب أن تحتوي على رمز خاص (!@#$...) واحد على الأقل.",
    }),
});
