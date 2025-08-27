import { z } from "zod";

export const AssestFormSchema = z.object({
  real_estate_type: z.string().min(1, { message: "نوع العقار مطلوب" }),
  category: z.string().min(1, { message: "حالة المزاد مطلوبة" }),
  location: z.object({
    latitude: z.string(),
    longitude: z.string(),
    city: z.string().min(1, "المدينة مطلوبة"),
  }),
  meter_price: z.string().min(1, { message: "سعر المتر مطلوب" }),
  deposit: z.string().min(1, { message: "مبلغ دخول المزاد مطلوب" }),
  open_price: z.string().min(1, { message: "السعر الإفتتاحي مطلوب" }),
  asset_start_date: z.string().min(1, { message: "تاريخ بدأ المزاد مطلوب" }),
  asset_end_date: z.string().min(1, { message: "تاريخ انتهاء المزاد مطلوب" }),
  instrument_number: z.string().min(1, { message: "رقم الصك مطلوب" }),
  auction_number: z.string().min(1, { message: "رقم المزاد مطلوب" }),
  area: z.string().min(1, { message: "مساحة العقار مطلوبة" }),
  streets_num: z.string().min(1, { message: "عدد الشوارع مطلوب" }),
  rooms: z.string().optional(),
  bathrooms: z.string().optional(),
  floors: z.string().optional(),
  has_electricity: z.any(),
  has_water: z.any(),
  description: z.string().min(1, { message: "الوصف مطلوب" }),
  borders: z.array(
    z.object({
      direction: z.string(),
      border: z.string(),
      lengths: z.string(),
    })
  ),

  asset_image: z.any().optional(),
  brochure_image: z.any().optional(),
});

export type AssestFormType = z.infer<typeof AssestFormSchema>;
