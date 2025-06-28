import { OptionType } from "@/types/selects";

export const RegionList: OptionType[] = [
  { label: "الشمال", value: "north" },
  { label: "الجنوب", value: "south" },
  { label: "الشرق", value: "east" },
  { label: "الغرب", value: "west" },
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

export const PropertyTypeList: OptionType[] = [
  { label: "شقة", value: "apartment" },
  { label: "فيلا", value: "villa" },
  { label: "مكتب", value: "office" },
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
