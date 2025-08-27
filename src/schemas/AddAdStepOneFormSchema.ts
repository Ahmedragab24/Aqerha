import { z } from "zod";

export const AddAdStepOneFormSchema = z
  .object({
    userType: z.string().min(1, { message: "نوع المستخدم مطلوب" }),
    user_role: z.string().min(1, { message: "صفة المستخدم مطلوبة" }),
    phone: z
      .string()
      .min(10, { message: "رقم الجوال يجب أن يتكون من 10 أرقام على الأقل." })
      .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
    whatsapp: z
      .string()
      .min(10, { message: "رقم الواتساب يجب أن يتكون من 10 أرقام على الأقل." })
      .regex(/^[0-9+\-\s()]+$/, { message: "رقم الجوال غير صحيح." }),
    birth_date: z.string().min(1, { message: "تاريخ الميلاد مطلوب" }),

    // السجل التجاري
    record_number: z.string().optional(),
    unified_commercial_registration_number: z.string().optional(),
    record_date: z.string().optional(),

    // الوكالة
    agency_number: z.string().optional(),
    agency_date: z.string().optional(),

    id_number: z
      .string()
      .optional()
      .refine((val) => !val || /^1\d{9}$/.test(val), {
        message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1",
      }),

    //   رقم هوية المالك
    owner_nation_id: z.string().optional(),
    //   رقم هوية احد المالك
    one_owner_id_number: z.string().optional(),

    //  رقم هوية الوكيل
    agent_nation_id: z.string().optional(),

    // رقم الترخيص
    licence_number: z.string().optional(),

    // رقم الصك
    instrument_number: z
      .string()
      .min(1, { message: "رقم الصك/السجل العيني مطلوب" }),
    instrument_date: z
      .string()
      .min(1, { message: "تاريخ الصك/السجل العيني مطلوب" }),
  })

  .refine(
    (data) => {
      // If userType is "agent", then agencyNumber and agencyHistory are required
      if (data.user_role === "agent") {
        return data.agency_number && data.agency_number.length > 0;
      }
      return true;
    },
    {
      message: "رقم الوكالة مطلوب",
      path: ["agency_number"], // This will show the error on the agencyNumber field
    }
  )
  .refine(
    (data) => {
      // If userType is "agent", then agencyHistory is required
      if (data.user_role === "agent") {
        return data.agency_date && data.agency_date.length > 0;
      }
      return true;
    },
    {
      message: "تاريخ الوكالة مطلوب",
      path: ["agency_date"], // This will show the error on the agencyHistory field
    }
  )
  .refine(
    (data) => {
      if (data.userType === "individual") {
        return data.id_number && data.id_number.length > 0;
      }
      return true;
    },
    {
      message: "رقم الهوية مطلوب",
      path: ["id_number"], // This will show the error on the agencyHistory field
    }
  )
  .refine(
    (data) => {
      if (data.userType === "company" || data.userType === "multi_owners") {
        return data.agent_nation_id && data.agent_nation_id.length > 0;
      }
      return true;
    },
    {
      message: "رقم هوية الوكيل مطلوب",
      path: ["agent_nation_id"], // This will show the error on the agencyHistory field
    }
  )
  // .refine(
  //   (data) => {
  //     if (data.userType === "multi_owners") {
  //       return data.owner_nation_id && data.owner_nation_id.length > 0;
  //     }
  //     return true;
  //   },
  //   {
  //     message: "رقم هوية المالك مطلوب",
  //     path: ["owner_nation_id"], // This will show the error on the agencyHistory field
  //   }
  // )
  .refine(
    (data) => {
      if (data.userType !== "individual") {
        return data.licence_number && data.licence_number.length > 0;
      }
      return true;
    },
    {
      message: "رقم الترخيص مطلوب",
      path: ["licence_number"], // This will show the error on the agencyHistory field
    }
  )
  .refine(
    (data) => {
      if (data.userType === "company") {
        return (
          data.unified_commercial_registration_number &&
          data.unified_commercial_registration_number.length > 0
        );
      }
      return true;
    },
    {
      message: "الرقم الموحد للسجل التجاري مطلوب",
      path: ["unified_commercial_registration_number"], // This will show the error on the agencyHistory field
    }
  )
  .refine(
    (data) => {
      if (data.userType === "multi_owners") {
        return data.one_owner_id_number && data.one_owner_id_number.length > 0;
      }
      return true;
    },
    {
      message: "رقم هوية احد الملاك مطلوب",
      path: ["one_owner_id_number"], // This will show the error on the agencyHistory field
    }
  );
