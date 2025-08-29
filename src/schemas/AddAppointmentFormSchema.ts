import { date, z } from "zod";

export const AddAppointmentFormSchema = z.object({
  date: date().min(new Date(), { message: "التاريخ يجب أن يكون في المستقبل" }),
  time: z.string().min(1, { message: "الوقت مطلوب" }),
  location: z.object({
    latitude: z.string(),
    longitude: z.string(),
    city: z.string().min(1, "المدينة مطلوبة"),
  }),
});
