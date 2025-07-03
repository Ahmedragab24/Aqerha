import { z } from "zod";

export const AddAdPersonFormSchema = z
  .object({
    DeedRegisterNumber: z
      .string()
      .min(1, { message: "رقم الصك/السجل العيني مطلوب" }),
    DeedRegisterDate: z
      .string()
      .min(1, { message: "تاريخ الصك/السجل العيني مطلوب" }),
    idNumber: z
      .string()
      .min(1, { message: "رقم الهوية مطلوب" })
      .refine((val) => !val || /^1\d{9}$/.test(val), {
        message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1",
      }),
    userType: z.string().min(1, { message: "صفة المستخدم مطلوبة" }),
    birthDate: z.string().min(1, { message: "تاريخ الميلاد مطلوب" }),
    phone: z
      .string()
      .min(10, { message: "رقم الجوال يجب أن يتكون من 10 أرقام على الأقل." })
      .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
    whatsapp: z
      .string()
      .min(10, { message: "رقم الواتساب يجب أن يتكون من 10 أرقام على الأقل." })
      .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
    // Make these fields optional in the base schema
    agencyNumber: z.string().optional(),
    agencyHistory: z.string().optional(),
  })
  .refine(
    (data) => {
      // If userType is "agent", then agencyNumber and agencyHistory are required
      if (data.userType === "agent") {
        return data.agencyNumber && data.agencyNumber.length > 0;
      }
      return true;
    },
    {
      message: "رقم الوكالة مطلوب",
      path: ["agencyNumber"], // This will show the error on the agencyNumber field
    }
  )
  .refine(
    (data) => {
      // If userType is "agent", then agencyHistory is required
      if (data.userType === "agent") {
        return data.agencyHistory && data.agencyHistory.length > 0;
      }
      return true;
    },
    {
      message: "تاريخ الوكالة مطلوب",
      path: ["agencyHistory"], // This will show the error on the agencyHistory field
    }
  );
