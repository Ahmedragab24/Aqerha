import { z } from "zod";

export const AddAdPersonFormSchema = z.object({
  DeedRegisterNumber: z.string().optional(),
  DeedRegisterDate: z.string().optional(),
});
