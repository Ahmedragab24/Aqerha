import {
  TypeInterfaceType,
  TypePropertyType,
  TypePurposeType,
  TypeRentalPeriodType,
  TypeUsedRealEstateType,
} from "@/types/Real-estates";
import { OptionType } from "@/types/selects";
import { UserRoleTypeOption, UserTypeOption } from "@/types/Auth";
import { ExaminationRequestState } from "@/types/inspection-and-evaluation-requests";

export const RegionList: { label: string; value: TypeInterfaceType }[] = [
  { label: "شمال", value: "north" },
  { label: "جنوب", value: "south" },
  { label: "شرق", value: "east" },
  { label: "غرب", value: "west" },
  { label: "شمال غرب", value: "north_west" },
  { label: "شمال شرق", value: "north_east" },
  { label: "جنوب غرب", value: "south_west" },
  { label: "على 4 شوارع", value: "4_streets" },
  { label: "على 3 شوارع", value: "3_streets" },
];

export const AreaList: OptionType[] = [
  { label: "صغيرة", value: "small" },
  { label: "متوسطة", value: "medium" },
  { label: "كبيرة", value: "large" },
];

export const PriceList: OptionType[] = [
  { label: "منخفض", value: "low" },
  { label: "متوسط", value: "medium" },
  { label: "مرتفع", value: "high" },
];

export const bedroomList: OptionType[] = [
  { label: "أي عدد", value: "any" },
  { label: "بدون غرفة", value: "none" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4", value: "flour" },
  { label: "+5", value: "largerThanFive" },
];

export const parkingList: OptionType[] = [
  { label: "أي عدد", value: "any" },
  { label: "لا يوجد", value: "none" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "+3", value: "largerThanThree" },
];

export const storeList: OptionType[] = [
  { label: "أي عدد", value: "any" },
  { label: "لا يوجد", value: "none" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "+3", value: "largerThanThree" },
];

export const bathroomList: OptionType[] = [
  { label: "أي عدد", value: "any" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "+4", value: "largerThanFour" },
];

export const typeOfBathroomList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "إيراني", value: "Iran" },
  { label: "فرنجي", value: "frange" },
  { label: "كلاهما", value: "togther" },
];

export const elevatorList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "+3", value: "largerThanThree" },
];

export const floorList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "طابق أرضي", value: "ground" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4", value: "flour" },
  { label: "+5", value: "largerThanFive" },
];

export const coolingSystemList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "مكيف هواء مائي", value: "WaterAir" },
  { label: "سبليت", value: "Split" },
  { label: "فن كويل", value: "VanCoyle" },
  { label: "شيلر", value: "Schiller" },
];

export const heatingSystemList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "مركزي", value: "central" },
  { label: "سبليت", value: "Split" },
  { label: "مدفأة", value: "fireplace" },
  { label: "من الأرض", value: "fromTheGround" },
  { label: "رادياتور", value: "Radiator" },
];

export const floorTypeList: OptionType[] = [
  { label: "لا يهم", value: "any" },
  { label: "حجر", value: "stone" },
  { label: "سيراميك", value: "ceramics" },
  { label: "باركيه", value: "parquet" },
  { label: "لامينيت", value: "laminate" },
  { label: "موزاييك", value: "mosaic" },
];

export const userTypeList: UserTypeOption[] = [
  { label: "فرد", value: "individual" },
  { label: "شركة", value: "company" },
  { label: "متعدد المالكين", value: "multi_owners" },
];

export const userRoleList: UserRoleTypeOption[] = [
  { label: "مالك", value: "owner" },
  { label: "وكيل", value: "agent" },
];

export const PropertyTypeList: {
  label: string;
  value: TypePropertyType;
}[] = [
  { label: "شقة", value: "apartment" },
  { label: "فيلا", value: "villa" },
  { label: "فيلا دوبلكس", value: "duplex_villa" },
  { label: "فيلا مستقلة", value: "independent_villa" },
  { label: "عمارة", value: "building" },
  { label: "قصر", value: "palace" },
  { label: "أرض", value: "land" },
  { label: "مكتب", value: "office" },
  { label: "محل تجاري", value: "shop" },
  { label: "استراحة", value: "rest_house" },
  { label: "دور", value: "floor" },
  { label: "دور روف", value: "roof_floor" },
  { label: "شاليه", value: "chalet" },
  { label: "مخيم", value: "camp" },
  { label: "مستودع", value: "warehouse" },
  { label: "مزرعة", value: "farm" },
];

export const purposesOfEvaluation: OptionType[] = [
  {
    label: "تقييم كامل قبل الشراء",
    value: "تقييم كامل قبل الشراء",
  },
  {
    label: "تقييم جزئي",
    value: "تقييم جزئي",
  },
  {
    label: "تقييم عقاري",
    value: "تقييم عقاري",
  },
];

export const purposesOfExamination: OptionType[] = [
  { label: "فحص شامل قبل الشراء", value: "فحص شامل قبل الشراء" },
  { label: "فحص جزئي", value: "فحص جزئي" },
  { label: "تقييم عقاري", value: "تقييم عقاري" },
];

export const purposesOfRealEstate: { label: string; value: TypePurposeType }[] =
  [
    { label: "بيع", value: "buy" },
    { label: "إيجار", value: "rent" },
  ];

export const PropertyCategory: {
  label: string;
  value: TypeUsedRealEstateType;
}[] = [
  // { label: "أي نوع", value: "all" },
  { label: "سكني", value: "residential" },
  { label: "تجاري", value: "commercial" },
  // { label: "بدون تحديد", value: "none" },
];

export const numberOptions: OptionType[] = Array.from(
  { length: 10 },
  (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  })
);

export const propertyAges: OptionType[] = [
  { label: "سنة", value: "1" },
  { label: "2 سنوات", value: "2" },
  { label: "3 سنوات", value: "3" },
  { label: "4 سنوات", value: "4" },
  { label: "5 سنوات", value: "5" },
  { label: "6 سنوات", value: "6" },
  { label: "7 سنوات", value: "7" },
  { label: "8 سنوات", value: "8" },
  { label: "9 سنوات", value: "9" },
  { label: "10 سنوات", value: "10" },
];

export const streetWidths: OptionType[] = [
  { label: "8 متر", value: "8" },
  { label: "12 متر", value: "12" },
  { label: "15 متر", value: "15" },
  { label: "20 متر", value: "20" },
  { label: "أكثر من 20 متر", value: "20_plus" },
];

export const SalesFeatures: OptionType[] = [
  { value: "parking", label: "موقف سيارات" },
  { value: "garden", label: "حديقة" },
  { value: "pool", label: "مسبح" },
  { value: "gym", label: "صالة رياضية" },
  { value: "security", label: "حراسة أمنية" },
  { value: "elevator", label: "مصعد" },
  { value: "balcony", label: "شرفة" },
  { value: "storage", label: "مخزن" },
];

export const RentalFeatures: OptionType[] = [
  { value: "parking", label: "موقف سيارات" },
  { value: "garden", label: "حديقة" },
  { value: "pool", label: "مسبح" },
  { value: "gym", label: "صالة رياضية" },
  { value: "security", label: "حراسة أمنية" },
  { value: "elevator", label: "مصعد" },
  { value: "balcony", label: "شرفة" },
  { value: "storage", label: "مخزن" },
];

export const LeaseTermList: { label: string; value: TypeRentalPeriodType }[] = [
  { value: "daily", label: "يومي" },
  { value: "weekly", label: "اسبوعي" },
  { value: "monthly", label: "شهري" },
  { value: "yearly", label: "سنوي" },
];

export const FoundOrNoFound: OptionType[] = [
  { value: "found", label: "يوجد" },
  { value: "not_found", label: "لا يوجد" },
];

export const AdvertisingChannelsList: OptionType[] = [
  { value: "Licensed", label: "منصة مرخصة" },
  { value: "Unlicensed", label: "منصة غير مرخصة" },
];

export const PropertyServicesList: OptionType[] = [
  { value: "electricity", label: "كهرباء" },
  { value: "waters", label: "مياه" },
  { value: "exchange", label: "صرف" },
  { value: "gas", label: "غاز" },
  { value: "all", label: "كهرباء , مياه .صرف , غاز" },
];

export const paymentMethodsList: OptionType[] = [
  { value: "كاش", label: "كاش" },
  { value: "بطاقة ائتمان", label: "بطاقة ائتمان" },
  { value: "تقسيط", label: "تقسيط" },
  { value: "تحويل بنكي", label: "تحويل بنكي" },
  { value: "المحفظة", label: "المحفظة" },
  { value: "اخرى", label: "اخرى" },
];

export const inspectionServiceList: OptionType[] = [
  { value: "with_report" as ExaminationRequestState, label: "تقرير" },
  { value: "without_report" as ExaminationRequestState, label: "بدون تقرير" },
  { value: "visit_package" as ExaminationRequestState, label: "باقة الزيارة" },
];
