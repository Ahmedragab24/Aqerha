import { TypeAuctionCategoryType, TypeAuctionType } from "@/types/Actions";
import { TypePropertyType } from "@/types/Real-estates";

export const AuctionTypeList: {
  label: string;
  value: TypeAuctionType | "all";
}[] = [
  { label: "الكل", value: "all" },
  { label: "إلكتروني", value: "electronic" },
  { label: "هجين", value: "hybrid" },
  { label: "خاص", value: "private" },
  { label: "عام", value: "public" },
];

export const AuctionCategoryList: {
  label: string;
  value: TypeAuctionCategoryType | "all";
}[] = [
  { label: "الكل", value: "all" },
  { label: "جاري الأن", value: "ongoing" },
  { label: "قادم", value: "upcoming" },
  { label: "انتهى", value: "ended" },
];

export const StoreAuctionCategoryList: {
  label: string;
  value: TypeAuctionCategoryType | "all";
}[] = [
  { label: "جاري الأن", value: "ongoing" },
  { label: "قادم", value: "upcoming" },
];

export const StoreAuctionTypeList: {
  label: string;
  value: TypeAuctionType | "all";
}[] = [
  { label: "إلكتروني", value: "electronic" },
  { label: "هجين", value: "hybrid" },
  { label: "خاص", value: "private" },
  { label: "عام", value: "public" },
];

export const AuctionRealEstatesType: {
  label: string;
  value: TypePropertyType;
}[] = [
  { label: "أرض", value: "land" },
  { label: "شقة", value: "apartment" },
  { label: "فيلا", value: "villa" },
  { label: "عمارة", value: "building" },
];
