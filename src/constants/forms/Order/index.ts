import { RentalPropertyType, SalesPropertyType } from "@/types/products";
import { OptionType } from "@/types/selects";

// Options data
export const SalesPropertyTypeList: {
  label: string;
  value: SalesPropertyType;
}[] = [
  { label: "شقة", value: "apartment" },
  { label: "فيلا", value: "villa" },
  { label: "فيلا دوبلكس", value: "duplex-villa" },
  { label: "عمارة", value: "architecture" },
  { label: "أرض", value: "land" },
  { label: "مكتب", value: "office" },
  { label: "محل تجاري", value: "shop" },
  { label: "استراحة", value: "rest-house" },
  { label: "دور", value: "floor" },
  { label: "مزرعة", value: "farm" },
];

export const RentalPropertyTypeList: {
  label: string;
  value: RentalPropertyType;
}[] = [
  { label: "غرفة", value: "room" },
  { label: "شقة", value: "apartment" },
  { label: "دور", value: "floor" },
  { label: "فيلا", value: "villa" },
  { label: "فيلا دوبلكس", value: "duplex-villa" },
  { label: "عمارة", value: "architecture" },
  { label: "أرض", value: "land" },
  { label: "مزرعة", value: "farm" },
  { label: "محل تجاري", value: "shop" },
  { label: "مستودع", value: "storehouse" },
  { label: "مكتب", value: "office" },
  { label: "استراحة", value: "rest-house" },
  { label: "مخيم", value: "camp" },
];

export const purposes: OptionType[] = [
  { label: "للبيع", value: "sale" },
  { label: "للإيجار", value: "rent" },
  { label: "للاستثمار", value: "investment" },
];

export const facades: OptionType[] = [
  { label: "شمالية", value: "north" },
  { label: "جنوبية", value: "south" },
  { label: "شرقية", value: "east" },
  { label: "غربية", value: "west" },
  { label: "شمالية شرقية", value: "northeast" },
  { label: "شمالية غربية", value: "northwest" },
  { label: "جنوبية شرقية", value: "southeast" },
  { label: "جنوبية غربية", value: "southwest" },
];

export const numberOptions: OptionType[] = Array.from(
  { length: 10 },
  (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  })
);

export const propertyAges: OptionType[] = [
  { label: "جديد", value: "new" },
  { label: "أقل من سنة", value: "less_than_1" },
  { label: "1-5 سنوات", value: "1_to_5" },
  { label: "5-10 سنوات", value: "5_to_10" },
  { label: "أكثر من 10 سنوات", value: "more_than_10" },
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

export const LeaseTermList: OptionType[] = [
  { value: "all", label: "الكل" },
  { value: "day", label: "يومي" },
  { value: "week", label: "اسبوعي" },
  { value: "month", label: "شهري" },
  { value: "year", label: "سنوي" },
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
