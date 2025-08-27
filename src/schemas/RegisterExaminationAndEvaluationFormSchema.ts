import { z } from "zod";

export const RegisterExaminationAndEvaluationFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
