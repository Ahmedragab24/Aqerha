import { z } from "zod";

export const StepOneFormSchema = z.object({
  LicenseNumber: z.string().min(1, { message: "رقم الترخيص مطلوب" }),
  IdNumber: z
    .string()
    .min(1, { message: "رقم الهوية مطلوب" })
    .refine((val) => !val || /^1\d{9}$/.test(val), {
      message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1",
    }),
});

export const StepTowFormSchema = z
  .object({
    // Identity and License Numbers
    IdNumber: z
      .string()
      .min(1, { message: "رقم الهوية مطلوب" })
      .refine((val) => !val || /^[12]\d{9}$/.test(val), {
        message: "رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1 أو 2",
      }),

    AdvertisingLicenseNumber: z
      .string()
      .min(1, { message: "رقم ترخيص الإعلان مطلوب" })
      .refine((val) => !val || /^\d+$/.test(val), {
        message: "رقم ترخيص الإعلان يجب أن يحتوي على أرقام فقط",
      }),

    TitleDeedNumber: z
      .string()
      .min(1, { message: "رقم صك الملكية مطلوب" })
      .refine((val) => !val || /^\d+$/.test(val), {
        message: "رقم صك الملكية يجب أن يحتوي على أرقام فقط",
      }),

    contactNumber: z
      .string()
      .min(1, { message: "رقم التواصل مطلوب" })
      .refine((val) => !val || /^(05|5)\d{8}$/.test(val), {
        message: "رقم التواصل يجب أن يبدأ بـ 05 ويتكون من 10 أرقام",
      }),

    RealEstateLicenseNumber: z
      .string()
      .min(1, { message: "رقم رخصة الوساطة والتسويق العقاري مطلوب" })
      .refine((val) => !val || /^\d+$/.test(val), {
        message: "رقم رخصة الوساطة يجب أن يحتوي على أرقام فقط",
      }),

    // Property Details
    PropertyArea: z
      .string()
      .min(1, { message: "مساحة العقار مطلوبة" })
      .refine((val) => !val || (!isNaN(Number(val)) && Number(val) > 0), {
        message: "مساحة العقار يجب أن تكون رقم موجب",
      }),

    UnitPrice: z
      .string()
      .min(1, { message: "سعر الوحدة مطلوب" })
      .refine((val) => !val || (!isNaN(Number(val)) && Number(val) > 0), {
        message: "سعر الوحدة يجب أن يكون رقم موجب",
      }),

    RoomsNumber: z.string().min(1, { message: "عدد الغرف مطلوب" }),

    PropertyType: z.string().min(1, { message: "نوع العقار مطلوب" }),

    PropertyAge: z.string().min(1, { message: "عمر العقار مطلوب" }),

    AdvertisementPurpose: z.string().min(1, { message: "غرض الإعلان مطلوب" }),

    // Address Information
    TheAddress: z
      .string()
      .min(1, { message: "المنطقة مطلوبة" })
      .min(2, { message: "المنطقة يجب أن تحتوي على حرفين على الأقل" }),

    AddressNumber: z
      .string()
      .min(1, { message: "رقم المنطقة مطلوب" })
      .refine((val) => !val || /^\d+$/.test(val), {
        message: "رقم المنطقة يجب أن يحتوي على أرقام فقط",
      }),

    City: z
      .string()
      .min(1, { message: "المدينة مطلوبة" })
      .min(2, { message: "المدينة يجب أن تحتوي على حرفين على الأقل" }),

    TheNeighborhood: z
      .string()
      .min(1, { message: "الحي مطلوب" })
      .min(2, { message: "الحي يجب أن يحتوي على حرفين على الأقل" }),

    zipCode: z
      .string()
      .min(1, { message: "الرمز البريدي مطلوب" })
      .refine((val) => !val || /^\d{5}$/.test(val), {
        message: "الرمز البريدي يجب أن يتكون من 5 أرقام",
      }),

    AdditionalNumber: z
      .string()
      .min(1, { message: "الرقم الإضافي مطلوب" })
      .refine((val) => !val || /^\d{4}$/.test(val), {
        message: "الرقم الإضافي يجب أن يتكون من 4 أرقام",
      }),

    StreetName: z
      .string()
      .min(1, { message: "اسم الشارع مطلوب" })
      .min(2, { message: "اسم الشارع يجب أن يحتوي على حرفين على الأقل" }),

    BuildingNumber: z
      .string()
      .min(1, { message: "رقم المبني مطلوب" })
      .refine((val) => !val || /^\d+$/.test(val), {
        message: "رقم المبني يجب أن يحتوي على أرقام فقط",
      }),

    // Coordinates
    Longitude: z
      .string()
      .min(1, { message: "خط الطول مطلوب" })
      .refine(
        (val) => {
          if (!val) return true;
          const num = Number(val);
          return !isNaN(num) && num >= -180 && num <= 180;
        },
        {
          message: "خط الطول يجب أن يكون بين -180 و 180",
        }
      ),

    latitude: z
      .string()
      .min(1, { message: "خط العرض مطلوب" })
      .refine(
        (val) => {
          if (!val) return true;
          const num = Number(val);
          return !isNaN(num) && num >= -90 && num <= 90;
        },
        {
          message: "خط العرض يجب أن يكون بين -90 و 90",
        }
      ),

    // Additional Information
    ObligationsProperty: z
      .string()
      .min(1, { message: "الالتزامات على العقار مطلوبة" }),

    AdvertisingChannels: z.string().min(1, { message: "قنوات الإعلان مطلوبة" }),

    PropertyServices: z.string().min(1, { message: "خدمات العقار مطلوبة" }),

    // Dates
    LicenseCreationDate: z
      .string()
      .min(1, { message: "تاريخ انشاء الرخصة مطلوب" })
      .refine(
        (val) => {
          if (!val) return true;
          const date = new Date(val);
          return !isNaN(date.getTime()) && date <= new Date();
        },
        {
          message: "تاريخ انشاء الرخصة يجب أن يكون تاريخ صحيح وليس في المستقبل",
        }
      ),

    LicenseExpirationDate: z
      .string()
      .min(1, { message: "تاريخ نهاية الرخصة مطلوب" })
      .refine(
        (val) => {
          if (!val) return true;
          const date = new Date(val);
          return !isNaN(date.getTime()) && date > new Date();
        },
        {
          message: "تاريخ نهاية الرخصة يجب أن يكون تاريخ صحيح وفي المستقبل",
        }
      ),
  })
  .refine(
    (data) => {
      // Cross-field validation: License expiration should be after creation
      if (data.LicenseCreationDate && data.LicenseExpirationDate) {
        const creationDate = new Date(data.LicenseCreationDate);
        const expirationDate = new Date(data.LicenseExpirationDate);
        return expirationDate > creationDate;
      }
      return true;
    },
    {
      message: "تاريخ نهاية الرخصة يجب أن يكون بعد تاريخ الإنشاء",
      path: ["LicenseExpirationDate"],
    }
  );

export type StepTowFormType = z.infer<typeof StepTowFormSchema>;

export const StepThreeFormSchema = z.object({
  image: z.union([
    z.instanceof(File),
    z.string().min(1, { message: "صورة العقار مطلوبة" }),
  ]),
  images: z.array(z.union([z.instanceof(File), z.string()])),
});

export type StepThreeFormType = z.infer<typeof StepFourFormSchema>;

export const StepFourFormSchema = z.object({
  price: z.string().min(1, { message: "سعر الإعلان مطلوب" }),
  description: z.string().min(1, { message: "وصف الإعلان مطلوب" }),
  Capacity: z.boolean(),
  capacityPercent: z.string().optional(),
  capacityType: z.enum(["rate", "static"]).optional(),
  AgreeTerms: z
    .array(z.string())
    .min(1, { message: "الموافقة على الشروط مطلوبة" }),
});

export type StepFourFormType = z.infer<typeof StepFourFormSchema>;
