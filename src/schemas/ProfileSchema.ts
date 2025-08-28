import { z } from "zod";

export const ProfileSchema = z.object({
  // ... باقي الحقول كما هي
  name: z.string().min(1, "الأسم مطلوب"),
  phone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
  whatsapp: z
    .string()
    .min(10, { message: "رقم الوتساب يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الوتساب غير صحيح." }),
  address: z.string().min(1, "العنوان مطلوب"),
  description: z.string().min(1, "الوصف مطلوب"),
  license_number: z.string().min(1, "رقم الترخيص مطلوب"),
  commercial_registration_number: z.string().min(1, "رقم السجل التجاري مطلوب"),
  service: z.string().optional(),
  services: z.array(z.string()).optional(),
  protfolio_link: z.string().optional(),

  brochure: z.any().optional(),
});
