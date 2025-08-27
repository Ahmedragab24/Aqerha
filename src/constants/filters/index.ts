import { OptionType } from "@/types/selects";

export const RegionList: OptionType[] = [
  { label: "الشمال", value: "north" },
  { label: "الجنوب", value: "south" },
  { label: "الشرق", value: "east" },
  { label: "الغرب", value: "west" },
];

export const AreaList = [
  { value: "0", from: 0, to: 100 }, // من 0 إلى 100 م²
  { value: "101", from: 101, to: 200 }, // من 101 إلى 200 م²
  { value: "201", from: 201, to: 300 }, // من 201 إلى 300 م²
  { value: "301", from: 301, to: 400 }, // من 301 إلى 400 م²
  { value: "401", from: 401, to: 500 }, // من 401 إلى 500 م²
  { value: "501", from: 501, to: 750 }, // من 501 إلى 750 م²
  { value: "751", from: 751, to: 1000 }, // من 751 إلى 1000 م²
  { value: "1001", from: 1001, to: 2000 }, // من 1001 إلى 2000 م²
  { value: "2001", from: 2001, to: 5000 }, // من 2001 إلى 5000 م²
  { value: "5001", from: 5001, to: 10000 }, // من 5001 إلى 10000 م²
  { value: "10001", from: 10001, to: null }, // أكثر من 10000 م²
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
