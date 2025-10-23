import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
    .optional(),

  whatsapp: z
    .string()
    .min(10, { message: "رقم الوتساب يجب أن يكون 10 أرقام على الأقل." })
    .regex(/^[0-9+\-\s()]+$/, { message: "رقم الوتساب غير صحيح." })
    .optional(),
  address: z.string().optional(),
  description: z.string().optional(),
  license_number: z.string().optional(),
  commercial_registration_number: z.string().optional(),
  service: z.string().optional(),
  services: z.array(z.string()).optional(),
  protfolio_link: z.string().optional(),

  brochure: z.any().optional(),
});
