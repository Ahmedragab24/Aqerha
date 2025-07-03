import { z } from "zod";

export const ChangePasswordFormSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل." })
      .regex(/[a-z]/, { message: "يجب أن تحتوي على حرف صغير على الأقل." })
      .regex(/[A-Z]/, { message: "يجب أن تحتوي على حرف كبير على الأقل." })
      .regex(/[0-9]/, { message: "يجب أن تحتوي على رقم واحد على الأقل." })
      .regex(/[\W_]/, {
        message: "يجب أن تحتوي على رمز خاص (!@#$...) واحد على الأقل.",
      }),

    newPassword: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل." })
      .regex(/[a-z]/, { message: "يجب أن تحتوي على حرف صغير على الأقل." })
      .regex(/[A-Z]/, { message: "يجب أن تحتوي على حرف كبير على الأقل." })
      .regex(/[0-9]/, { message: "يجب أن تحتوي على رقم واحد على الأقل." })
      .regex(/[\W_]/, {
        message: "يجب أن تحتوي على رمز خاص (!@#$...) واحد على الأقل.",
      }),

    confirmPassword: z.string({
      required_error: "يرجى تأكيد كلمة المرور الجديدة.",
    }),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });
