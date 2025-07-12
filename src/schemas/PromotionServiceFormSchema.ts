import { z } from "zod";

export const PromotionServiceFormSchema = z.object({
  price: z
    .string({
      required_error: "السعر مطلوب.",
    })
    .min(1, { message: "يجب أن يكون السعر أكبر من أو يساوي 1." })
    .max(1_000_000_000, { message: "السعر لا يمكن أن يتجاوز 1,000,000,000." }),

  DiscriminationPeriod: z.string({
    required_error: "يجب اختيار مدة تمييز واحدة.",
  }),
});
