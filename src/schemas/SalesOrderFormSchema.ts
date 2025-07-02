import { z } from "zod";

export const SalesOrderFormSchema = z.object({
  propertyType: z.string().min(1, { message: "يرجى اختيار نوع العقار" }),
  minPrice: z.string().min(1, { message: "يرجى إدخال السعر الأدنى" }),
  maxPrice: z.string().min(1, { message: "يرجى إدخال السعر الأقصى" }),
  minArea: z.string().min(1, { message: "يرجى إدخال أقل مساحة" }),
  maxArea: z.string().min(1, { message: "يرجى إدخال أكبر مساحة" }),
  minPricePerMeter: z.string().optional(),
  maxPricePerMeter: z.string().optional(),
  purpose: z.string().min(1, { message: "يرجى اختيار الغرض" }),
  facade: z.string().min(1, { message: "يرجى اختيار الواجهة" }),
  apartments: z.string().optional(),
  rooms: z.string().min(1, { message: "يرجى اختيار عدد الغرف" }),
  halls: z.string().optional(),
  bathrooms: z.string().min(1, { message: "يرجى اختيار عدد دورات المياه" }),
  propertyAge: z.string().min(1, { message: "يرجى اختيار عمر العقار" }),
  streetWidth: z.string().optional(),
  floorNumber: z.string().optional(),
  totalFloors: z.string().optional(),
  elevators: z.string().optional(),
  shops: z.string().optional(),
  LeaseTerm: z.string().optional(),
  features: z.array(z.string()),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string().min(1, { message: "يرجى تحديد الموقع" }),
    city: z.string().min(1, { message: "يرجى إدخال المدينة" }),
    district: z.string().min(1, { message: "يرجى إدخال الحي" }),
  }),
  description: z
    .string()
    .min(10, { message: "يرجى إدخال وصف مفصل (10 أحرف على الأقل)" }),
});
