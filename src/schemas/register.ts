import { ServicesProvidersType } from "@/types/Membership";
import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." })
      .max(50, { message: "الاسم طويل جدًا." }),
    phone: z.object({
      iso_code: z.string().min(1, { message: "اختار كود الدولة." }),
      number: z
        .string()
        .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل." })
        .regex(/^[0-9]+$/, { message: "رقم الجوال غير صحيح." }),
    }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح." }),
    city: z.string().min(1, { message: "يرجى اختيار مدينة." }),
    membershipType: z.string().min(1, { message: "يرجى اختيار العضوية." }),

    // الحقول الشرطية
    IdNumber: z.string().optional(),
    ValLicenseNumber: z.string().optional(),
    ServicesProviderType: z.string().optional(),
    CommercialNumber: z.string().optional(),
    unifiedCommercialRegisterNumber: z.string().optional(),
    licence_number: z.string().optional(),

    Password: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل." }),

    acceptanceTerms: z.boolean().refine((val) => val === true, {
      message: "يجب الموافقة على الشروط والأحكام.",
    }),
  })
  .superRefine((values, ctx) => {
    // Owner or agent → IdNumber مطلوب
    if (values.membershipType === "Owner or agent") {
      if (!values.IdNumber?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "يرجى إدخال رقم الهوية الوطنية.",
          path: ["IdNumber"],
        });
      }
    }

    // Services Providers → تحقق إضافي
    if (values.membershipType === "Services Providers") {
      if (!values.ServicesProviderType?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "يرجى اختيار نوع مقدم الخدمات.",
          path: ["ServicesProviderType"],
        });
      }

      switch (values.ServicesProviderType as ServicesProvidersType) {
        case "individual_agent":
          if (!values.IdNumber?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال رقم الهوية الوطنية.",
              path: ["IdNumber"],
            });
          }
          if (!values.ValLicenseNumber?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال رقم رخصة فال.",
              path: ["ValLicenseNumber"],
            });
          }
          break;

        case "company_agent":
          if (!values.unifiedCommercialRegisterNumber?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال الرقم الموحد للسجل التجاري.",
              path: ["unifiedCommercialRegisterNumber"],
            });
          }
          if (!values.ValLicenseNumber?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال رقم رخصة فال.",
              path: ["ValLicenseNumber"],
            });
          }
          break;

        case "contracting_company":
        case "real_estate_developer":
          if (!values.CommercialNumber?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال رقم السجل التجاري.",
              path: ["CommercialNumber"],
            });
          }
          break;

        case "evaluator":
        case "inspector":
        case "auction_companies":
        case "engineering_offices":
          if (!values.licence_number?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "يرجى إدخال رقم الرخصة.",
              path: ["licence_number"],
            });
          }
          break;
      }
    }
  });
