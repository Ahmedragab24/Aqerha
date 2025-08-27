import { z } from "zod";

export const AuctionFormSchema = z.object({
  name: z.string().min(1, { message: "اسم الشركة مطلوب" }),
  category: z.string().min(1, { message: "حالة المزاد مطلوبة" }),
  type: z.string().min(1, { message: "نوع المزاد مطلوب" }),
  deposit: z.string().min(1, { message: "مبلغ دخول المزاد مطلوب" }),
  start_date: z.string().min(1, { message: "تاريخ بدأ المزاد مطلوب" }),
  end_date: z.string().min(1, { message: "تاريخ انتهاء المزاد مطلوب" }),

  location: z.object({
    latitude: z.string(),
    longitude: z.string(),
    city: z.string().min(1, "المدينة مطلوبة"),
  }),

  image: z.any().optional(),
});

export type AuctionFormType = z.infer<typeof AuctionFormSchema>;
