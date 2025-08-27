import { z } from "zod";

export const RegisterContractorCompanyFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
