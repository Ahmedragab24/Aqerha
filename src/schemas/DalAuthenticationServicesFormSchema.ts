import { z } from "zod";

export const DalAuthenticationServicesFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "الاسم طويل جدًا." })
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "الاسم يجب أن يحتوي على أحرف عربية فقط.",
    }),

  ServiceType: z.string().min(1, { message: "يرجى اختيار نوع الخدمة." }),

  ServiceApplicantType: z
    .string()
    .min(1, { message: "يرجى اختيار صفة طالب الخدمة." }),

  NationalIDNumber: z
    .string()
    .regex(/^[0-9]{10}$/, {
      message: "رقم الهوية الوطنية يجب أن يحتوي على 10 أرقام.",
    })
    .refine(
      (val) => {
        // Additional validation for Saudi National ID format
        const firstDigit = Number.parseInt(val[0]);
        return firstDigit === 1 || firstDigit === 2;
      },
      { message: "رقم الهوية الوطنية غير صحيح." }
    ),

  phone: z.string().regex(/^(\+966|0)?5[0-9]{8}$/, {
    message: "رقم الجوال يجب أن يبدأ بـ 05 ويحتوي على 10 أرقام.",
  }),

  email: z
    .string()
    .email({ message: "يرجى إدخال بريد إلكتروني صحيح." })
    .min(1, { message: "البريد الإلكتروني مطلوب." }),

  city: z.string().min(1, { message: "يرجى اختيار المدينة." }),

  TheNeighborhood: z
    .string()
    .min(2, { message: "اسم الحي يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "اسم الحي طويل جدًا." }),

  AgencyNumber: z
    .string()
    .min(1, { message: "رقم الوكالة يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "رقم الوكالة طويل جدًا." }),

  AgencyImage: z.string().optional(),
});

export type DalAuthenticationServicesFormData = z.infer<
  typeof DalAuthenticationServicesFormSchema
>;
