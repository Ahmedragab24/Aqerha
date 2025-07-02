import { z } from "zod";

export const ExaminationFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "الاسم طويل جدًا." })
    .regex(/^[\u0600-\u06FF\s]+$/, {
      message: "يجب أن يحتوي الاسم على أحرف عربية فقط.",
    }),

  nationalIdentity: z
    .string()
    .min(10, { message: "رقم الهوية يجب أن يكون 10 أرقام." })
    .max(10, { message: "رقم الهوية يجب أن يكون 10 أرقام." })
    .regex(/^[0-9]+$/, { message: "رقم الهوية يجب أن يحتوي على أرقام فقط." }),

  examinationDescription: z
    .string()
    .min(1, { message: "يرجى اختيار صفة طالب الفحص." }),

  phone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),

  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح." }),

  propertyType: z.string().min(1, { message: "يرجى اختيار نوع العقار." }),

  propertyCategory: z.string().min(1, { message: "يرجى اختيار فئة العقار." }),

  city: z
    .string()
    .min(2, { message: "اسم المدينة يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "اسم المدينة طويل جدًا." }),

  neighborhood: z
    .string()
    .min(2, { message: "اسم الحي يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "اسم الحي طويل جدًا." }),

  propertyLocation: z
    .string()
    .min(5, { message: "موقع العقار يجب أن يحتوي على 5 أحرف على الأقل." })
    .max(200, { message: "موقع العقار طويل جدًا." }),

  purpose: z.string().min(1, { message: "يرجى اختيار الغرض من الفحص." }),
});
