import { z } from "zod";

export const AdOrRequestFormSchema = z
  .object({
    propertyType: z.enum(
      [
        "apartment",
        "villa",
        "duplex-villa",
        "architecture",
        "land",
        "floor",
        "farm",
        "shop",
      ],
      {
        required_error: "نوع العقار مطلوب",
      }
    ),
    image: z.instanceof(File).optional().or(z.string().optional()),
    minPrice: z
      .number({
        required_error: "السعر الأدنى مطلوب",
      })
      .min(1, "السعر الأدنى يجب أن يكون أكبر من صفر"),
    maxPrice: z
      .number({
        required_error: "السعر الأقصى مطلوب",
      })
      .min(1, "السعر الأقصى يجب أن يكون أكبر من صفر"),
    minArea: z
      .number({
        required_error: "أقل مساحة مطلوبة",
      })
      .min(1, "المساحة يجب أن تكون أكبر من صفر"),
    maxArea: z
      .number({
        required_error: "أكبر مساحة مطلوبة",
      })
      .min(1, "المساحة يجب أن تكون أكبر من صفر"),
    facade: z.string().optional(),
    floorNumber: z.number().optional(),
    propertyAge: z.string().optional(),
    streetWidth: z.string().optional(),
    LeaseTerm: z.string().optional(),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
      address: z.string().min(1, "العنوان مطلوب"),
    }),
    bedrooms: z.number().optional(),
    bathrooms: z.number().optional(),
    description: z.string().optional(),
  })
  .refine((data) => data.maxPrice >= data.minPrice, {
    message: "السعر الأقصى يجب أن يكون أكبر من أو يساوي السعر الأدنى",
    path: ["maxPrice"],
  })
  .refine((data) => data.maxArea >= data.minArea, {
    message: "أكبر مساحة يجب أن تكون أكبر من أو تساوي أقل مساحة",
    path: ["maxArea"],
  });

export type AdOrRequestFormInput = z.infer<typeof AdOrRequestFormSchema>;
