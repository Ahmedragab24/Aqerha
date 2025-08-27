import { z } from "zod";

export const ProjectFormSchema = z.object({
  name: z.string().min(1, { message: "اسم المشروع مطلوب" }),
  developer_name: z.string().min(1, { message: "اسم مطور المشروع مطلوب" }),
  max_price: z.string().min(1, { message: "السعر الأقصى مطلوب" }),
  min_price: z.string().min(1, { message: "السعر الأدنى مطلوب" }),
  payment_plan: z.string().min(1, { message: "خطط الدفع مطلوبة" }),
  project_status: z.string().min(1, { message: "حالة المشروع مطلوبة" }),

  description: z.string().min(1, { message: "وصف المشروع مطلوب" }),

  location: z.object({
    latitude: z.string(),
    longitude: z.string(),
    city: z.string().min(1, "المدينة مطلوبة"),
  }),

  cover_image: z.any().optional(),
  project_diagram: z.any().optional(),
  proshor: z.any().optional(),
});

export type ProjectFormType = z.infer<typeof ProjectFormSchema>;
