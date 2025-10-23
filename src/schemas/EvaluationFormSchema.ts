import { z } from "zod";

export const EvaluationFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "الاسم طويل جدًا." }),

  national_id: z
    .string()
    .min(10, { message: "رقم الهوية يجب أن يكون 10 أرقام." })
    .max(10, { message: "رقم الهوية يجب أن يكون 10 أرقام." })
    .regex(/^[0-9]+$/, { message: "رقم الهوية يجب أن يحتوي على أرقام فقط." }),

  user_status: z.string().min(1, { message: "يرجى اختيار صفة طالب الفحص." }),

  phone: z.object({
    iso_code: z.string().min(1, { message: "اختار كود الدولة." }),
    number: z
      .string()
      .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
      .regex(/^[0-9]+$/, { message: "رقم الجوال غير صحيح." }),
  }),
  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح." }),

  real_estate_type: z.string().min(1, { message: "يرجى اختيار نوع العقار." }),

  real_estate_category: z
    .string()
    .min(1, { message: "يرجى اختيار فئة العقار." }),

  city: z
    .string()
    .min(2, { message: "اسم المدينة يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "اسم المدينة طويل جدًا." }),

  district: z
    .string()
    .min(2, { message: "اسم الحي يجب أن يحتوي على حرفين على الأقل." })
    .max(50, { message: "اسم الحي طويل جدًا." }),

  location: z
    .string()
    .min(5, { message: "موقع العقار يجب أن يحتوي على 5 أحرف على الأقل." })
    .max(200, { message: "موقع العقار طويل جدًا." }),

  examination_purpose: z
    .string()
    .min(1, { message: "يرجى اختيار الغرض من الفحص." }),

  agency_number: z.string().optional(),
  agency_date: z.string().optional(),

  image_from_agancy: z.any().optional(),
  ownership_deed: z.any().optional(),
});
