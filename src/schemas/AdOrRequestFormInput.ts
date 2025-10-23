import { z } from "zod";

export const AdOrRequestFormSchema = z.object({
  propertyType: z.string().min(1, "نوع العقار مطلوب"),
  purpose: z.string().min(1, "الغرض مطلوب"),
  purpose_type: z.string().min(1, "نوع الاستخدام مطلوب"),
  image: z.any().optional(),
  images: z.any().optional(),
  mainPrice: z
    .string({
      required_error: "السعر الأساسي مطلوب",
    })
    .min(1, "السعر الأساسي يجب أن يكون أكبر من صفر"),
  maxPrice: z
    .string({
      required_error: "السعر الأقصى مطلوب",
    })
    .min(1, "السعر الأقصى يجب أن يكون أكبر من صفر"),
  mainArea: z
    .string({
      required_error: "المساحة الأساسية مطلوبة",
    })
    .min(1, "المساحة الأساسية يجب أن تكون أكبر من صفر"),
  maxArea: z
    .string({
      required_error: "المساحة الأقصى مطلوبة",
    })
    .min(1, "المساحة الأقصى يجب أن تكون أكبر من صفر"),
  interface: z.string().min(1, "واجهة العقار مطلوبة"),
  floorNumber: z.string().optional(),
  number_of_floor: z.string().optional(),
  propertyAge: z.string().optional(),
  location: z.object({
    latitude: z.string(),
    longitude: z.string(),
    city: z.string().min(1, "المدينة مطلوبة"),
  }),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  salons: z.string().optional(),
  number_of_shops: z.string().optional(),
  number_of_units: z.string().optional(),
  number_of_streets: z.string().optional(),
  number_of_elevators: z.string().optional(),
  street_width: z.string().optional(),
  rental_period: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  terms_acceptance: z.boolean().refine((val) => val === true, {
    message: "قبول الشروط مطلوب",
  }),
  phone: z
    .object({
      iso_code: z.string().min(1, { message: "اختار كود الدولة." }),
      number: z
        .string()
        .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
        .regex(/^[0-9]+$/, { message: "رقم الجوال غير صحيح." }),
    })
    .optional(),
  whatsapp: z.string().optional(),
  is_marketing_request: z.boolean().optional(),
});

export type AdOrRequestFormInput = z.infer<typeof AdOrRequestFormSchema>;
